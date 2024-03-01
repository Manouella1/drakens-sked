<script></script>

<template>
  <div class="container">
    <h1>INFORMATION</h1>
    <img class="logo" src="../assets/bilder/drake-hej.png" alt="logo" />
    <div class="basicmeal">
      <h2 class="h21">Lätt <span>🟢</span><span>🥄</span></h2>
      <p>
        Här hittar du enkla och snabba recept som passar perfekt för dig som är
        själv hemma och vill ha något lättlagat att äta. Från mackor och maträtter till
        smoothies. Dessa recept kräver inte mycket tid och inte heller avancerade recept.
      </p>
    </div>
    <div class="mediummeal">
      <h2 class="h22">Medium<span>🟡</span><span>🔪</span></h2>
      <p>
        I medium kategorin hittar du lite mer avancerade recept som kanske kräver lite mer tid och kunskap i köket. Det kan vara rätter som kräver lite mer förberedelse och kanske lite mer avancerade tekniker. Roligt om du vill utmana dig själv lite mer i köket men med lite hjälp eller att någon har kontroll och översyn av det som tillagas.
      </p>
    </div>
    <div class="advancedmeal">
      <h2 class="h23">Avancerat<span>🟠</span><span>🧑‍🍳</span></h2>
      <p>
        Avancerade recept kräver lite mer erfarenhet och kunskap i köket. Du behöver en vuxen som kan assistera! Dessa recept kan innehålla mer avancerade tekniker, längre tillagningstid eller mer avancerade ingredienser. Perfekt för dig som vill tillaga något godare men även ha kul tillsammans med någon annan äldre under tiden.
      </p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 40px;
  color: white;

}
h2 {
  text-align: center;
}

.container {
  display: inline-block;
  margin-bottom: 40px;
  font-size: 20px;
  border: 30px;
  background-color: #219c56;
  color: white;
  border-radius: 50px;
  padding: 20px;
  max-width: 700px;
}

.logo {
  width: 30%;
  max-height: 800px;
  margin-left: 33%;
}

.logo:hover {
  transform: rotate(4deg);
}

.h21 {
  color: rgb(17, 235, 17);
  font-weight: bolder;

}
.h22 {
  color: rgb(239, 239, 35);
  font-weight: bolder;
}
.h23 {
  color: orange;
  font-weight: bolder;
}

/* Media Query for Mobile Devices */
@media (max-width: 768px) {
  .about-container {
    margin: 50px 10%;
    /* Adjust margin for smaller screens */
  }
}
</style>
