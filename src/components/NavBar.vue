<script setup>
import $ from "jquery";

$(document).ready(function () {
  $(".container").click(function () {
    $(".stick").toggleClass(function () {
      return $(this).is(".open, .close") ? "open close" : "open";
    });
  });
});
</script>

<template>
  <div class="nav">
    <h1>Drakens Sked</h1>
    <div class="container">
      <div class="stick stick-1"></div>
      <div class="stick stick-2"></div>
      <div class="stick stick-3"></div>
    </div>
  </div>
  <!-- <div class="nav-bar">
    <div>
      <p v-if="ifMenuClicked === false" @click="menuClick">MENU</p>
      <img
        class="icon-menu"
        v-else
        src="../assets/circle-xmark-solid.svg"
        @click="menuClick"
      />

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
.nav {
  display: flex;
  align-items: center;
}
h1 {
  font-family: "luckiest guy";
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
}

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
