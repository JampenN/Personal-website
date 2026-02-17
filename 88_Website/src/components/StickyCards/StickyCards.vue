<script setup>
import "@/components/StickyCards/StickyCards.css";
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import _ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stickyCardsData = [
    {
    index: "01",
    title: "Warum Unterstützung zählt",
    image: "/sticky-cards/card_1.jpg",
    subtitle: "Der nächste Schritt.",
    description: "Der nächste Schritt im Leistungssport entsteht durch tägliche Arbeit und die richtigen Rahmenbedingungen. Training, Wettkämpfe und Entwicklung erfordern Zeit, Einsatz – und Menschen, die diesen Weg mittragen. Unterstützung ermöglicht genau diesen nächsten Schritt.",
  },
  {
    index: "02",
    title: "Vorteile als Unterstützer",
    image: "/sticky-cards/card_2.jpg",
    subtitle: "Teil des Wegs sein.",
    description: "Als Sponsor oder Partner erhalten Sie während der Saison regelmässige Einblicke in meinen Trainings- und Wettkampfalltag. Sie begleiten meine Fortschritte aus nächster Nähe und werden Teil meines Weges. Zudem dürfen Sie aktuelles Bildmaterial für Ihre eigenen Kommunikationskanäle wie Website, Social Media oder Print nutzen. Gerne stelle ich Ihnen dafür hochwertiges, saisonaktuelles Material zur Verfügung.",
  },
  {
    index: "03", 
    title: "Sponsor/Partner",
    image: "/sticky-cards/card_3.jpg",
    subtitle: "Den nächsten Schritt möglich machen.",
    description: "Der nächste Schritt im Leistungssport gelingt nicht allein. Als Sponsor oder Partner begleiten Sie mich auf meinem Weg und tragen aktiv dazu bei, mein Potenzial weiter auszuschöpfen. Gemeinsam entstehen Fortschritt, Sichtbarkeit und eine authentische Partnerschaft.",
  },
  {
    index: "04",
    title: "Gönner",
    image: "/sticky-cards/card_4.JPG",
    subtitle: "Viele kleine Schritte führen ans Ziel.",
    description: "Als Gönner unterstützen Sie mich mit einem frei wählbaren Beitrag und ermöglichen damit die nächsten Schritte in meiner sportlichen Entwicklung. Im Leistungssport sind es oft kleine Fortschritte, die langfristig den Unterschied machen. Jede Unterstützung, ob klein oder gross, bringt mich auf meinem Weg weiter und wird von mir sehr geschätzt.",
  },
]

const container = ref(null);
let ctx

onMounted(() => {
    ctx = gsap.context(() => {
        const stickyCards = document.querySelectorAll(".sticky-card");

        stickyCards.forEach((card, index) => {
            if (index < stickyCards.length -1) {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    endTrigger: stickyCards[stickyCards.length -1],
                    end: "top top",
                    pin: true,
                    pinSpacing: false,
                });
            }

            if (index < stickyCards.length - 1) {
                gsap.to(card, {
                    scale: 0.75,
                    rotation: index % 2 === 0 ? 5 : -5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: stickyCards[index + 1],
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                    }
                });
            }
        })
    }, container.value)
})

</script>

<template>
  <div class="sticky-cards" ref="container">
    <div
      v-for="(card, index) in stickyCardsData"
      :key="index"
      class="sticky-card"
    >
      <div class="sticky-card-index">
        <h1>{{ card.index }}</h1>
      </div>

      <div class="sticky-card-content">
        <div class="sticky-card-content-wrapper">
          <h1 class="sticky-card-header">{{ card.title }}</h1>

          <div class="sticky-card-img">
            <img :src="card.image" alt="" />
          </div>

          <div class="sticky-card-copy">
            <div class="sticky-card-copy-title">
              <p>{{ card.subtitle }}</p>
            </div>

            <div class="sticky-card-copy-description">
              <p>{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

