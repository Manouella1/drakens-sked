<script setup>
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute(),
    isChecked = ref(false)
  // watch som bevakar när params ändras och då stänger hamburgermenyn
  watch(
    () => route.params,
    () => {
      isChecked.value = false
    }
  )

  // funktion som stänger hamburgermenyn när man klickar utanför
  onClickOutside()
  function onClickOutside() {
    document.addEventListener('click', (event) => {
      const menuToggle = document.querySelector('.menuToggle')
      if (!menuToggle.contains(event.target)) {
        isChecked.value = false
      }
    })
  }
</script>

<template>
  <header>
    <!--Vill vi ha loggan som en del av nav?-->
    <router-link to="/recepts">
      <h1>Drakens sked</h1>
    </router-link>
    <nav class="menu--right" role="navigation">
      <div class="menuToggle">
        <input type="checkbox" v-model="isChecked" />
        <span></span>
        <span></span>
        <span></span>
        <ul class="menuItem">
          <li>
            <router-link to="/recepts">
              <img class="logo" src="../assets/bilder/head.png" alt="logo" />
            </router-link>
          </li>
          <div class="divider"></div>
          <li><router-link to="/recepts">Hem</router-link></li>
          <li><router-link to="/information">Information</router-link></li>
          <li><router-link to="/intro">Intro</router-link></li>
          <li><router-link to="/myrecepts">Mina recept</router-link></li>
          <li><router-link to="/games">Spel</router-link></li>
          <li><router-link to="/contact">Kontakt</router-link></li>
          <li><router-link to="/about">Om oss</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
  a {
    text-decoration: none;
  }

  h1 {
    color: #219c56;
    margin-left: 0.5em;
    margin-top: 20px;
    font-size: 4em;
    /** Text shadowing */
    color: #219c56;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
      0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.15);
  }

  header {
    display: flex;
    justify-content: space-between;
    flex-flow: row;
    align-items: center;
    z-index: 6;
  }

  .logo {
    max-width: 69%;
  }

  .divider {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    height: 1px;
    width: 180px;
    background-color: white;
  }

  .menuToggle {
    display: block;
    position: relative;
    top: 50px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  .menuToggle a {
    text-decoration: none;
    color: #fff;
    font-size: 1.7rem;
    transition: all 0.3s ease;
  }

  .menuToggle a:hover {
    color: tomato;
  }

  .menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    cursor: pointer;
    opacity: 0;
    /* hide this */
    z-index: 2;
    /* and place it over the hamburger */
    /* CHECK GIVE ERROR */
    -webkit-touch-callout: none;
  }

  /* Menykortet där alla länkar står */
  .menuToggle span {
    /* position: relative; */
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background-color: #219c56;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

    /* CHECK IS NOT CORRECT!! */
    /* background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease; */
  }

  .menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  .menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  .menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  .menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  .menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  .menuToggle input:checked ~ .menuItem {
    transform: none;
  }

  /* Själva meny kortet, där länkarna syns */
  .menuItem {
    border-radius: 15px;
    position: absolute;
    width: 300px;
    padding: 50px;
    padding-top: 100px;
    background: #219c56;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  .menuItem li {
    padding: 5px 0;
    font-size: 22px;
  }

  .menu--right .menuToggle {
    position: fixed;
    right: 0;
  }

  .menu--right .menuToggle input {
    right: 50px;
  }

  .menu--right .menuToggle span {
    right: 50px;
  }

  .menu--right .menuItem {
    right: 0;
    margin: -100px 0 0 0;
    transform: translate(100%, 0);
  }

  .menu--right .menuItem li a:hover {
    padding-left: 5px;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 10vw;
    }
  }
</style>
