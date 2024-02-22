<script setup>
  // import $ from 'jquery'

  // $(document).ready(function () {
  //   $('.container').click(function () {
  //     $('.stick').toggleClass(function () {
  //       return $(this).is('.open, .close') ? 'open close' : 'open'
  //     })
  //   })
  // })
</script>

<template>
  <header>
    <!--Vill vi ha loggan som en del av nav?-->
    <router-link to="/recepts">
      <h1>Drakens sked</h1>
    </router-link>
    <nav class="menu--right" role="navigation">
      <div class="menuToggle">
        <input type="checkbox" />
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

  <!-- <div class="nav-bar">
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
  </div> -->
</template>

<style scoped>
  a {
    text-decoration: none;
  }

  h1 {
    color: #219c56;
    margin-left: 0.5em;
    margin-top: 0.5em;
    font-size: 3rem;
    /** Text shadowing */
    color: #219c56;
    font-size: 4rem;
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
  }

  .logo {
    max-width: 69%;
  }

  .divider {
    margin-top: 2em;
    margin-bottom: 2.5em;
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
    position: relative;
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
    padding-top: 125px;
    background: #219c56;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  .menuItem li {
    padding: 10px 0;
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

  /* .nav {
  display: flex;
  align-items: center;
}
h1 {
  font-family: 'luckiest guy';
  flex-grow: 1;
}
.container {
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
}

.stick {
  width: 80px;
  height: 8px;
  border-radius: 4px;
  margin-bottom: 15px;
  background-color: #219c56;
  display: inline-block;
}

.stick:last-child {
  margin-bottom: 0px;
}

.stick-1.open {
  animation: stick-1-open 0.6s ease-out forwards;
}

.stick-2.open {
  animation: stick-2-open 0.6s linear forwards;
}

.stick-3.open {
  animation: stick-3-open 0.6s linear forwards;
}

@keyframes stick-1-open {
  0% {
    width: 80px;
  }
  40% {
    background-color: black;
    width: 8px;
    transform: translate(40px, 0px);
  }
  75%,
  80% {
    width: 8px;
    transform: translate(40px, -50px);
    animation-timing-function: cubic-bezier(0, 1, 1, 1);
  }
  100% {
    background-color: black;
    width: 8px;
    transform: translate(35px, 46px);
  }
}

@keyframes stick-2-open {
  80% {
    background-color: #219c56;
    transform: translate(0px, 0px) rotate(0deg);
  }
  100% {
    background-color: black;
    transform: translate(8px, 0px) rotate(40deg);
  }
}

@keyframes stick-3-open {
  80% {
    background-color: #219c56;
    transform: translate(0px, 0px) rotate(0deg);
  }
  100% {
    background-color: black;
    transform: translate(8px, -23px) rotate(-40deg);
  }
}

.stick-1.close {
  width: 8px;
  transform: translate(27px, 26px);
  animation: stick-1-close 0.6s ease-out forwards;
}

.stick-2.close {
  transform: translate(0px, 0px) rotate(40deg);
  animation: stick-2-close 0.6s ease-out forwards;
}

.stick-3.close {
  transform: translate(0px, -23px) rotate(-40deg);
  animation: stick-3-close 0.6s ease-out forwards;
}

@keyframes stick-1-close {
  0%,
  70% {
    width: 0px;
  }
  100% {
    width: 80px;
    transform: translate(0, 0);
  }
}

@keyframes stick-2-close {
  0% {
    background-color: #ff1456;
    width: 80px;
  }
  20% {
    background-color: #ff1456;
    width: 8px;
    transform: translate(0, 0px) rotate(40deg);
  }
  40% {
    background-color: #2dfdb9;
    width: 0px;
  }
  65% {
    transform: translate(0, -70px);
    animation-timing-function: cubic-bezier(0, 1, 1, 1);
  }
  80% {
    width: 0px;
  }
  100% {
    width: 80px;
    transform: translate(0, 0px);
  }
}

@keyframes stick-3-close {
  0% {
    background-color: #ff1456;
    width: 80px;
  }
  20% {
    background-color: #ff1456;
    width: 8px;
    transform: translate(0, -23px) rotate(-40deg);
  }
  40% {
    background-color: #2dfdb9;
  }
  65% {
    transform: translate(0, -93px);
    animation-timing-function: cubic-bezier(0, 1, 1, 1);
  }
  90% {
    width: 8px;
  }
  100% {
    width: 80px;
    transform: translate(0, 0px);
  }
} */

  /* ul {
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
} */
</style>
