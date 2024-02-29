<template>
  <div class="about-us">
    <span class="redpin">📌</span>
    <div class="about-container">
      <h1>Om Oss</h1>
      <div class="about-content">
        <h3>
          Välkommen till Drakens Sked!
        </h3>
        <img class="logo" src="../assets/bilder/drake-hej.png" alt="logo" /><img>
        <h2>Vår Berättelse</h2>
        <p>
          Drakens Sked är resultatet av en passionerad grupp studenter som delar en gemensam vision: att göra matlagning
          till en rolig och lärorik upplevelse för barn i alla åldrar. Med våra kreativa och barnvänliga recept strävar vi
          efter att inspirera nästa generation av matälskare och kockar.
        </p>
        <h2>Vår Mission</h2>
        <p>
          Vi tror på kraften i att göra matlagning tillgänglig för alla och att främja en hälsosam relation till mat från
          en tidig ålder. Genom vårt arbete strävar vi efter att skapa en positiv och inkluderande miljö där barn kan
          utforska, lära sig och framför allt ha kul i köket.
        </p>
        <h2>Vårt Team</h2>
        <p>
          Vi är en mångsidig grupp av engagerade studenter från olika bakgrunder och discipliner, men med en gemensam
          passion för matlagning och pedagogik. Vårt team består av blivande kockar, lärare, och kreativa själar som alla
          delar en önskan att göra skillnad genom matlagning.
        </p>
        <h2>Varför Välja Oss?</h2>
        <ul>
          <li><strong>Studentdriven Innovation:</strong> Som en grupp studenter strävar vi ständigt efter att utforska nya
            idéer och metoder för att göra matlagning roligare och mer lärorik för barn.</li>
          <li><strong>Kreativa och Anpassningsbara Recept:</strong> Våra recept är utformade med barns behov och intressen
            i åtanke, vilket gör dem både roliga och enkla att följa.</li>
          <li><strong>Samhällsengagemang:</strong> Vi är dedikerade till att bidra till samhället genom att främja
            hälsosamma matvanor och lärande för barn och familjer i vår omgivning.</li>
        </ul>
        <p>
          Gör dig redo att utforska en värld av smaker, upptäckter och kreativitet tillsammans med oss på Drakens Sked!
          Oavsett om du är en erfaren kock eller nybörjare i köket är du välkommen att vara en del av vår gemenskap och
          dela glädjen i matlagning med barn.
        </p>
        <p class="last-paragraph">Var en del av vår resa mot att göra matglädje till en självklarhet för alla barn!</p>

      </div>
    </div>
  </div>
</template>

<style scoped>
.redpin {
  position: absolute;
  font-size: 60px;
  /* Uppdaterat värde för font-size för att göra redpin större */
  width: 29px;
  margin-bottom: 20px;
}

h1 {
  text-align: center;
  margin-top: 40px;
  color: white;
}

.container {
  display: inline-block;
  margin-bottom: 40px;
  font-size: 20px;
  background-color: #219c56;
  border-radius: 50px;
  padding: 20px;
}

.logo {
  width: 30%;
  max-height: 800px;
}

.logo:hover {
  transform: rotate(4deg);
}

.about-us {
  text-align: center;
}

.about-container {
  background-color: #219c56;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 17px rgba(0, 0, 0, 0.1);
  margin: 50px 15%;
  color: white;
  font-weight: bolder;

}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-content h2 {
  margin-top: 30px;
}

.about-content ul {
  text-align: left;
  list-style-type: none;
}

.about-content li::before {
  content: "•";
  margin-right: 10px;
}

.last-paragraph {
  font-weight: bold;
  font-size: 30px;
  margin-top: 60px;
}

@media (max-width: 768px) {
  .about-container {
    margin: 50px 10%;
    /* Adjust margin for smaller screens */
  }
}

/* Media Query for Mobile Devices */
@media (max-width: 576px) {

  .redpin {
    position: absolute;
    font-size: 40px;
    /* Uppdaterat värde för font-size för att göra redpin större */
    width: 29px;
    margin-top: 20px;

  }

  .logo {
    width: 80%;
    /* Adjust logo size for smaller screens */
    max-height: 400px;
    /* Adjust max-height for smaller screens */
  }
}
</style>
