<script setup>
import { onMounted, onBeforeUnmount, nextTick} from 'vue';
import { initGallery, pinResults } from '@/components/about/results';
import gsap from 'gsap';
import supporters from '@/components/footer/supporters.vue';
import { interactiveGallery } from '@/components/about/gallery';
import { podiumPreview, podiumPreview2, podiumPreviewSingle } from '@/components/about/podium';



const birthDate = new Date(2005, 3, 26) 

const age = () => {
  const today = new Date()
  let years = today.getFullYear() - birthDate.getFullYear()

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
     today.getDate() >= birthDate.getDate())

  if (!hasHadBirthdayThisYear) {
    years--
  }

  return years
}


let ticker;

onMounted(() => {
  if ('ontouchstart' in window) return;

  const cursor = document.querySelector('.custom-cursor');
  const cursorBack = document.querySelector('.custom-cursor-2');
  if (!cursor || !cursorBack) return;

  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const pos   = { x: mouse.x, y: mouse.y };

  gsap.set([cursor, cursorBack], {
    x: mouse.x,
    y: mouse.y,
    xPercent: -50,
    yPercent: -50,
    opacity: 0,
    force3D: true
  });

  window.addEventListener('pointermove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  ticker = () => {
    pos.x += (mouse.x - pos.x) * 0.25;
    pos.y += (mouse.y - pos.y) * 0.25;

    gsap.set(cursor, { x: pos.x, y: pos.y });
    gsap.set(cursorBack, { x: pos.x, y: pos.y });
  };

  gsap.ticker.add(ticker);

  document.addEventListener('mouseover', (e) => {
    gsap.to(cursor, {
      opacity: e.target.closest('.photobook') ? 1 : 0,
      duration: 0.15
    });

    gsap.to(cursorBack, {
      opacity: e.target.closest('.is-clone') ? 1 : 0,
      duration: 0.15
    });
  });
});

onBeforeUnmount(() => {
  if (ticker) gsap.ticker.remove(ticker);
});



onMounted(() => {
    pinResults()
}); 

onMounted(() => {
    podiumPreviewSingle()
});

onMounted(() => {
//    initGallery()
    interactiveGallery()
}); 

</script>

<template>
    <section class="biography" id="scene">

        <div class="bio-hero">
            <div class="bio-hero-img-container">
                <img class="bio-hero-img" src="/public/images/IMG_2781.PNG" alt="">
            </div>
    
            <h1>Hey. Ich bin Nicola Jampen - {{ age() }} Jahre alt und Skirennfahrer</h1>
        </div>
        
        <div class="bio-text">

            <div class="column-left">
                <img class="bio-text-img" src="/public/images/IMG_2775.jpg" alt="">
            </div>

            <div class="column-right">

                <div class="about">
                    <div class="bio-textfield">
                        <p>Geboren in Thun im Berner Oberland war mein Weg auf die Pisten nicht weit. Schon mit zwei Jahren wagte ich mich das erste Mal mit den Brettern an den Füssen auf den Schnee. Bald folgte ich meiner älteren Schwester in den Skiklub und entdeckte so meine Leidenschaft fürs Rennenfahren. Meine Liebe zum Sport wuchs mit jedem Training, und ich fand Freude daran, mich ständig zu verbessern und weiterzuentwickeln. Ausserdem begeistert es mich, neue Orte zu entdecken und in der Bergwelt unterwegs zu sein.
                        Neben dem Sport hat mich meine Faszination für Technik dazu geführt, eine Lehre als Konstrukteur EFZ abzuschliessen. Derzeit absolviere ich die Berufsmaturität.
                        Mein Anspruch ist es, Schritt für Schritt meinen Weg zu gehen, konstant Leistung zu bringen und mich sowohl sportlich als auch persönlich weiterzuentwickeln.</p>
                    </div>
    
                    <div class="quote-1">
                        <h2>"Der Drang, mich ständig zu verbessern, treibt mich an."</h2>
                    </div>
                </div>

                <div class="results">
                    <h2>Resultate</h2>
                    <h3>Weltrangliste (Stand 14.08.2025)</h3>
                    <Span>GS Rang 450</Span>
                    <Span>SG Rang 314</Span>
                    <Span>DH Rang 182</Span>
                    <h3>Saison 2025/26</h3>
                    <span class="result">3er Rang FIS GS Davos</span>
                    <h3>Saison 2024/25</h3>
                    <Span class="result">2er Rang NJR GS Haute-Nendaz</Span>
                    <Span class="result">2er Rang NJR GS Bormio</Span>

                <div class="podium">
                    <div class="podium-img podium-img-1"></div>
                    <div class="podium-img podium-img-2"></div>
                </div>

                </div>

                <div class="spacer">
                </div>

            </div>
        </div>

        <h3 class="gallery-header">Momente meines Wegs</h3>
        
        <div class="gallery">
            <img class="photobook" id="dreams" src="/public/images/IMG_0023.JPG" alt="">
            <img class="photobook" id="imagination" src="/public/images/img-2.jpg" alt="">
            <img class="photobook" id="patience" src="/public/images/img-4.JPG" alt="">
            <img class="photobook" id="friendship" src="/public/images/img8.jpg" alt="">
            <img class="photobook" id="hunger" src="/public/images/hero.JPG" alt="">
            <img class="photobook" id="regenerate" src="/public/images/IMG_2678.JPG" alt="">
            <img class="photobook" id="polyvalante" src="/public/images/_DSC3537.JPG" alt="">
            <img class="photobook" id="endurance" src="/public/images/dolomites.JPG" alt="">
            <img class="photobook" id="strength" src="/public/images/IMG_1395.jpg" alt="">
            <img class="photobook" id="progress" src="/public/images/IMG_1741.JPEG" alt="">
            <img class="photobook" id="payback" src="/public/images/JK_01657.jpg" alt="">
            <!--<img class="photobook" src="/public/images/" alt="">-->
        </div>
        
        
    </section>
    
    <div class="story-overlay">
        <div class="story-layout">        
            <div class="description">
                <div class="meta">
                    <span class="location"></span>
                </div>
                <div class="meta">
                    <span class="date"></span>
                </div>
            </div>
            
            <div class="image-clone"></div>

            <div class="story">
                <h2 class="title"></h2>
                <p class="story-text"></p>
            </div>
        </div>
    </div>
    
    <!--<div class="cta">
    <div class="call">
            <h2>Gemeinsam den nächsten Schritt gehen</h2>
        </div>
        <div class="to">
            <p>Erfahre mehr über meine Sponsoring-Möglichkeiten oder nimm direkt Kontakt mit mir auf.</p>
        </div>
        <div class="action">
            <RouterLink to="/sponsoring">Sponsoring</RouterLink>
            <RouterLink to="/contact">Kontakt</RouterLink>
        </div>
    </div>-->

    <div class="custom-cursor">click</div>
    <div class="custom-cursor-2">back</div>

    <supporters/>
</template>

<style scoped>

/*#scene {
    transform-origin: center center;
    will-change: transform;
}*/

.biography {
    background-color: white;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0;
}

.bio-hero {
    height: 100vh;
    width: 100vw;
    top: 0;
    position: relative;
    padding-left: 30px;
    display: flex;
}

.bio-hero-img-container {
    height: 100vh;
}

.bio-hero-img {
    position: absolute;
    top: 0px;
    right: 0px;
    height: 85vh;
    width: auto;
}

.bio-hero h1 {
    position: absolute;
    bottom: 0;
    color: black;
    font-weight: 800;
    text-transform: uppercase;
    font-size: clamp(2.5rem, 4vw + 2vmin, 7.5rem);
}

.quote-1 h2 {
    color: black;
    font-style: italic;
}

.bio-text {
    height: auto;
    display: flex;
    flex-direction: row;
    padding-top: 10vh;
}

.column-left {
    width: 30%;
    position: relative;
    padding: 5%;
    pointer-events: none;
}

.bio-text-img {
    height: auto;
    width: 100%;
}

.column-right {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 70%;
}

.about {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100vh;
}

.bio-textfield p {
    color: black;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    padding-left: 15%;
    padding-right: 15%;
}

.quote-1 {
    position: relative;
    bottom: 0;
    text-align: center;
}

.results {
    display: flex;
    flex-direction: column;
    color: black;
    text-align: center;
}

.results h2 {
    color: black;
    font-weight: 800;
    text-transform: uppercase;
    font-size: clamp(2.5rem, 3vw + 2vmin, 7.5rem);
}

.results h3 {
    padding-top: 40px;
    font-size: clamp(1.5rem, 1vw + 1vmin, 7rem);
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.podium {
    position: absolute;
    top: 0;
    left: 0;
    width: 225px;
    height: 275px;
    z-index: 5;
    pointer-events: none;
}

.podium-img {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translate(-100%, 100%);
}

.podium-img-2 {
    top: 20px;
    height: 20px;
}

.preview-img img {
    position: absolute;
    top: 0;
    left: 0;
}

.spacer{
    height: 40vh;
}

.gallery-header {
    color: black;
    text-transform: uppercase;
    font-weight: 800;
    font-size: clamp(2.5rem, 3vw + 2vmin, 7.5rem);
    text-align: center;
    padding-bottom: 10vh;
}

.gallery {
    columns: 3;
    column-gap: 5rem;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-bottom: 5rem;
}

.gallery img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    margin-bottom: 5rem;
}

.photobook {
    position: relative;
    cursor: none;
}

.story-overlay {
    /*position: fixed;
    inset: 50% auto auto 50%;
    width: 0;   
    height: 0;
    background-color: #0f0f0f;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 20;
    border-radius: 100%; */
    position: fixed;
    inset: 0;
    background-color: #0f0f0f;
    z-index: 20;
    pointer-events: none;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    opacity: 0;    
}

.story-layout {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    gap: 3rem;
}

.description {
    /*display: flex;
    flex-direction: column-reverse;
    z-index: 21;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    /*height: 100%; */
}

.meta {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.location, .date {
    transform: rotate(-90deg);
    transform-origin: center;
    white-space: nowrap;
    color: white;
    font-size: 1rem;
}

.image-clone {
    z-index: 21;
}

.image-clone img {
    max-height: 80vh;
    width: auto;
    display: block;
}

.story {
    /*display: flex;
    flex-direction: column;
    z-index: 21; */
    max-width: 400px;
    color: white;
}

.story h2 {
    margin-bottom: 1rem;
}

.title h1{
    opacity: 0;
}

:deep(.story-Line .line) {
    overflow: hidden;
    position: relative;
    clip-path: inset(0 100% 0 0);
    transition: none !important;
    width: fit-content !important;
} 

:deep(.story-Line .line.animate) {
    animation: Story-clip-text 1s forwards;
}

:deep(.storyRevealAnimation::after) {
    transition: none !important;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 5;
    background-color: white;
    pointer-events: none;
    animation: StoryReveal 1s forwards;
}

@keyframes StoryReveal {
    0% {
        clip-path: inset(0 100% 0 0);
    }

    50% {
        clip-path: inset(0 0% 0 0);
    }

    100% {
        clip-path: inset(0 0% 0 100%);
    }
}

@keyframes Story-clip-text {
    from {
        clip-path: inset(0 100% 0 0);
    }
    to {
        clip-path: inset(0 0 0 0);
    }
}

.cta {
    display: flex;
    flex-direction: column;
}

.call {
    color: black;
}

.to p {
    color: black;
    font-size: 1.5rem;
    font-weight: 400;
}

.custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 400;
    color: white;
    pointer-events: none;
    transition: transform 0.1s ease, opacity 0.2s ease; 
    z-index: 9999;
    /*mix-blend-mode: difference;*/ 
    background-color: rgba(150,150,150, 0.4);
    backdrop-filter: blur(2px);
    opacity: 0;
}

.custom-cursor-2 {
    position: fixed;
    top: 0;
    left: 0;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 400;
    color: white;
    pointer-events: none;
    transition: transform 0.1s ease, opacity 0.2s ease; 
    z-index: 9999;
    /*mix-blend-mode: difference;*/ 
    background-color: rgba(150,150,150, 0.4);
    backdrop-filter: blur(2px);
    opacity: 0;
}



</style>