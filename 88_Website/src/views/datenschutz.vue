<script setup>
import supporters from '@/components/footer/supporters.vue';
</script>

<template>
  <section class="privacy">
    <div class="privacy-container">
      <h1>Datenschutzerklärung</h1>

      <p>
        Der Schutz deiner persönlichen Daten ist mir ein wichtiges Anliegen.
        Diese Datenschutzerklärung informiert darüber, welche personenbezogenen
        Daten auf dieser Website verarbeitet werden.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung:<br />
        <strong>Nicola Jampen</strong><br />
        <strong>nicola.jampen@bluewin.ch</strong>
      </p>

      <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
      <p>
        Personenbezogene Daten werden nur erhoben, wenn du sie mir freiwillig
        zur Verfügung stellst, beispielsweise über das Kontaktformular oder per
        E-Mail.
      </p>

      <h2>3. Zweck der Datenverarbeitung</h2>
      <p>
        Die übermittelten Daten werden ausschliesslich zur Bearbeitung deiner
        Anfrage und zur Kontaktaufnahme verwendet.
      </p>

      <h2>4. Weitergabe von Daten</h2>
      <p>
        Es erfolgt keine Weitergabe personenbezogener Daten an Dritte, ausser
        es besteht eine gesetzliche Verpflichtung.
      </p>

      <h2>5. Technische Daten</h2>
      <p>
        Beim Besuch der Website können technisch bedingt Daten wie IP-Adresse,
        Browsertyp oder Zeitpunkt des Zugriffs verarbeitet werden. Diese Daten
        dienen ausschliesslich dem sicheren Betrieb der Website.
      </p>

      <h2>6. Rechte</h2>
      <p>
        Gemäss dem revidierten Schweizer Datenschutzgesetz (revDSG) hast du das
        Recht auf Auskunft, Berichtigung oder Löschung deiner personenbezogenen
        Daten.
      </p>

      <h2>7. Kontakt</h2>
      <p>
        Bei Fragen zum Datenschutz kannst du mich jederzeit kontaktieren.
      </p>
    </div>
  </section>

  <supporters />
</template>

<style scoped>

section {
    height: auto;
}

.privacy {
  min-height: 100svh;
  background-color: var(--bg);
  color: var(--fg);
  display: flex;
  justify-content: center;
  padding: 6rem 1.5rem;
}

.privacy-container {
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  /*font-weight: 900;*/
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-top: 1.5rem;
  color: white;
}

p {
  font-size: 1.05rem;
  line-height: 1.7;
  opacity: 0.9;
}

/* Mobile optimization */
@media (max-width: 600px) {
  .privacy {
    padding: 4rem 1.25rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
