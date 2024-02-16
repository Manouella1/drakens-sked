<script>
export default {
  data() {
    return {
      menu_text: 'Menu',
      ifMenuClicked: false,
    }
  },
  methods: {
    menuClick() {
      this.ifMenuClicked = !this.ifMenuClicked
      this.menu_text = this.ifMenuClicked ? 'X' : 'Menu'
    },
  },
}
</script>

<template>
  <div class="nav-bar">
    <div>
      <p v-if="ifMenuClicked === false" @click="menuClick">MENU</p>
      <img class="icon-menu" v-else src="../assets/circle-xmark-solid.svg" @click="menuClick" />

      <nav v-show="ifMenuClicked">
        <ul>
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/recepts">RECEPTS</router-link></li>
          <li><router-link to="/myrecepts">FAVORITE RECEPTS</router-link></li>
          <li><router-link to="/games">GAMES</router-link></li>
          <li><router-link to="/contact">CONTACT</router-link></li>
          <li><router-link to="/about">ABOUT</router-link></li>
          <li><router-link to="/information">INFO</router-link></li>
          <li><router-link to="/intro">INTRO</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  color: white;

  max-width: 200px;
  max-width: 200px;

  margin-top: 5px;
  padding: 1em;
}

a,
h2,
p {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 20px;
}

.icon-menu {
  height: 25px;
  margin: 10px 20px;
}

.nav-bar {
  background-color: black;
  height: 50px;
  display: flex;
}

p {
  padding-top: 10px;
  margin: 0 20px;
}

.greeting {
  padding-top: 0.6em;
}
</style>
