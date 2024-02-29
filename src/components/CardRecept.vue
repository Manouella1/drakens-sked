<!-- src/components/CardRecept.vue -->

<script>
  export default {
    props: [
      'title',
      'prepTime',
      'category',
      'level',
      'image',
      'id',
      'iconColor',
      'iconImage'
    ],
    data() {
      return {
        showConfirmation: false,
        isFavorite: false, // Boolean för att spåra om receptet är en favorit
        confirmationMessage: '' // Meddelande för bekräftelse
      }
    },
    methods: {
      enlargeImage(event) {
        // Enlarge the image when hovered
        event.currentTarget.style.transform = 'scale(1.04)'
        event.currentTarget.style.cursor = 'pointer'
      },

      resetImage(event) {
        // Reset the image when mouseout
        event.currentTarget.style.transform = 'scale(1)'
        event.currentTarget.style.cursor = 'default'
      },
      handleClick() {
        // Emit the 'selectRecept' event with the meal ID
        this.$emit('selectRecept', this.id)
      },
      addToFavorites() {
        // Toggle isFavorite status
        this.isFavorite = !this.isFavorite

        // Hämta alla favoritrecept från localStorage
        let favorites =
          JSON.parse(localStorage.getItem('favoriteRecipes')) || []

        // Kontrollera om receptet redan finns i favoriter
        const index = favorites.findIndex((recipe) => recipe.id === this.id)

        if (index !== -1) {
          // Om receptet redan finns, ta bort det från favoritrecepten
          favorites.splice(index, 1)
        } else {
          // Om receptet inte finns, lägg till det i favoritreceptenn
          const recipeObject = {
            id: this.id,
            category: this.category,
            title: this.title,
            image: this.image,
            level: this.level,
            prepTime: this.prepTime,
            iconColor: this.iconColor,
            iconImage: this.iconImage
          }
          favorites.push(recipeObject)
        }

        // Uppdatera  localStorage med de uppdaterade favoritrecepten
        localStorage.setItem('favoriteRecipes', JSON.stringify(favorites))

        // Uppdatera bekräftelsemeddelandet beroende på isFavorite-status
        this.confirmationMessage = this.isFavorite
          ? ' Receptet har lagts till i dina favoriter!'
          : ' Receptet har tagits bort från dina favoriter!'

        // Visa bekräftelsemeddelandet
        this.showConfirmation = true

        // Dölj bekräftelsemeddelandet efter 3 sekunder
        setTimeout(() => {
          this.showConfirmation = false
        }, 3000)
      }
    }
  }
</script>

<template>
  <article
    class="container-notepad"
    @mouseover="enlargeImage"
    @mouseout="resetImage"
    @click="handleClick"
  >
    <div class="notepad-heading">
      <h1>
        <!-- Kategorier  -->
        {{ category }}
      </h1>
    </div>

    <div class="img-container">
      <img class="cover-image" :src="`src/assets/receptsbilder/${image}`" />
    </div>

    <div class="flex">
      <p>{{ prepTime }}</p>
      <p>
        {{ iconColor }} <span>{{ iconImage }} </span>
      </p>
      <p>{{ level }}</p>
    </div>
    <div>
      <h1>{{ title }}</h1>

      <!-- Lägg till knapp för att lägga till i favoriter -->
      <BButton
        pill
        @click.stop="addToFavorites"
        :variant="isFavorite ? 'secondary' : 'outline-secondary'"
        :class="{ favorited: isFavorite }"
        >❤️</BButton
      >
      <span v-if="showConfirmation" class="confirmation">{{
        confirmationMessage
      }}</span>
    </div>
  </article>

  <!-- WE NEED TO DELETE THIS AFTER!!  JUST LEAVE IT AS REFERNCE IN CASE SOMETHING IS NOT WORKING FOR YOU VANESSA -->

  <!-- Receiving props from parent component -->
  <!-- <BCard
    :title="title"
    :img-src="`src/assets/receptsbilder/${image}`"
    img-alt="Image"
    img-height="250px"
    img-width="auto"
    img-top
    tag="article"
    style="max-width: 20rem; min-width: 15rem"
    @mouseover="enlargeImage"
    @mouseout="resetImage"
    @click="handleClick"
    class="mb-3 text-center position-relative"
  > -->
  <!-- In other Boostrap refences mention Img-fluid and embed but do not see how theywork seem not do anything:  -->
  <!-- class="cimg-fluid img-responsive" -->
  <!-- class="mb-3 text-center position-relative embed-responsive embed-responsive-4by3 embed-responsive-item" -->

  <!-- This is direct on  the CSS / See stules.css but is not working to style -->
  <!-- class="custom-card " -->
  <!-- id="my-card" -->
  <!-- <BCardText>
      <div class="flex">

        <p>{{ prepTime }}</p>

        <p>- {{ category }} -</p>

        <p>
          {{ iconColor }} <span>{{ iconImage }} </span>
        </p>

        <p>{{ level }}</p>
      </div>
    </BCardText> -->

  <!-- Lägg till knapp för att lägga till i favoriter -->
  <!-- <BButton pill @click.stop="addToFavorites" variant="outline-secondary"
      >❤️</BButton
    > -->
  <!-- Visar bekräftelsemeddelande när receptet läggs till i favoriter -->
  <!-- <span v-if="showConfirmation" class="confirmation">{{
      confirmationMessage
    }}</span>
  </BCard> -->
</template>

<style scoped>
  /* färg för gillat favortrecept */
  .favorited {
    background-color: rgb(241, 166, 166);
    /* eller den färg du vill använda för favoriserade recept */
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .confirmation {
    color: green;
    font-size: 14px;
  }

  /* Originally from www.webinterfacelab.com/snippets/notepad */
  h1 {
    font-size: 20px;
  }

  .cover-image {
    min-height: 210px;
    width: 100%;
    object-fit: cover;
  }

  .img-container {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
  }

  .container-notepad,
  .container-notepad:before,
  .container-notepad:after {
    background-color: #fff;
    background-image: -webkit-linear-gradient(#f6abca 1px, transparent 1px),
      -webkit-linear-gradient(#f6abca 1px, transparent 1px),
      -webkit-linear-gradient(#e8e8e8 1px, transparent 1px);
    background-image: -moz-linear-gradient(#f6abca 1px, transparent 1px),
      -moz-linear-gradient(#f6abca 1px, transparent 1px),
      -moz-linear-gradient(#e8e8e8 1px, transparent 1px);
    background-image: -o-linear-gradient(#f6abca 1px, transparent 1px),
      -o-linear-gradient(#f6abca 1px, transparent 1px),
      -o-linear-gradient(#e8e8e8 1px, transparent 1px);
    background-image: linear-gradient(#f6abca 1px, transparent 1px),
      linear-gradient(#f6abca 1px, transparent 1px),
      linear-gradient(#e8e8e8 1px, transparent 1px);
    background-size: 1px 1px, 1px 1px, 23px 23px;
    background-repeat: repeat-y, repeat-y, repeat;
    background-position: 22px 0, 24px 0, 0 50px;
    border-radius: 2px;
    -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15),
      0 0 4px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 0 4px rgba(0, 0, 0, 0.5);
  }

  .container-notepad {
    position: relative;
    margin: 60px auto;
    padding: 0 23px 14px 35px;
    width: 300px;
    line-height: 23px;
    font-size: 16px;
    /* font-family: 'Allura', cursive; */
    color: #333;
    text-align: center;
  }

  .container-notepad p,
  .container-notepad blockquote {
    margin-bottom: 25px;
  }

  .container-notepad :last-child {
    margin-bottom: 0;
  }

  .container-notepad:before,
  .container-notepad:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 100%;
    left: 3px;
    right: 3px;
    margin-top: -2px;
    height: 4px;
    background-size: 1px 1px, 1px 1px, 0 0;
  }

  .container-notepad:before {
    z-index: -2;
    left: 6px;
    right: 6px;
    height: 6px;
    background-color: #eee;
  }

  /* Blue  */
  /* .notepad-heading {
    position: relative;
    margin: 0 -23px 14px -35px;
    height: 38px;
    background: #08f233;
    border-radius: 2px 2px 0 0;
    background-image: -webkit-linear-gradient(top, #226797, #0c3452);
    background-image: -moz-linear-gradient(top, #226797, #0c3452);
    background-image: -o-linear-gradient(top, #226797, #0c3452);
    background-image: linear-gradient(to bottom, #226797, #0c3452);
    -webkit-box-shadow: inset 0 1px #2f81ad, 0 2px 1px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(0, 0, 0, 0.5), 0 1px #000;
    box-shadow: inset 0 1px #2f81ad, 0 2px 1px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(0, 0, 0, 0.5), 0 1px #000;
  } */

  /* Green dark */
  .notepad-heading {
    position: relative;
    margin: 0 -23px 14px -35px;
    height: 38px;
    background: #219c56;
    border-radius: 2px 2px 0 0;
    background-image: #219c56;
    box-shadow: inset 0 1px #219c56, 0 2px 1px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(0, 0, 0, 0.5), 0 1px #000;
  }

  .notepad-heading > h1 {
    letter-spacing: 3px;
    line-height: 36px;
    font-size: 22px;
    color: #fff;
    text-align: center;
    text-shadow: 0 -1px rgba(0, 0, 0, 0.7);
  }

  .notepad-heading:before,
  .notepad-heading:after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 1px;
    right: 1px;
    height: 0;
    border-top: 1px dashed #617c90;
    border-color: rgba(255, 255, 255, 0.35);
  }

  .notepad-heading:after {
    bottom: 3px;
    border-color: #071c2c;
    border-color: rgba(0, 0, 0, 0.5);
  }
</style>
