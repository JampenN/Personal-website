<script setup>
import supporters from '@/components/footer/supporters.vue';
import StickyCards from '@/components/StickyCards/StickyCards.vue';

</script>

<template>  
    <section calss="intro">
        <div class="container">
            <div class="line1">
                <span class="line">Gemeinsam</span>
            </div>
            <div class="line-image">
                <img src="/public/images/3-JK_09370.jpg" alt="">
            </div>
            <div class="line2">
                <span class="line">den nächsten</span>
            </div>
            <div class="line3-1">
                <span class="line">Schritt</span>
            </div>
            <div class="line3-2">
                <span class="line">Gehen</span>
            </div>
            <div class="line4">
                <p class="subtitle">Begleite mich auf meinen Weg!</p>
            </div>
        </div>
    
            <!--<div class="hero_images">
                <img class="img1" src="/public/images/5-JK_09775.jpg" alt="">
                <img class="img2" src="/public/images/3-JK_09370.jpg" alt="">
            </div>-->
    
    </section>

    <StickyCards />

    <section class="outro">
        <div class="outro-title">
            <h1>Bereit für den nächsten Schritt?</h1>
        </div>
        <div class="further-info">
            <h3>Mehr Infos findest du im <a href="/files/Sponsoring_Dossier-Nicola_Jampen.pdf" target="_blank" rel="noopener">Sponsoringdossier</a>.</h3>
            <h3>Bei Interesse oder Fragen melde dich einfach über das <RouterLink to="/contact#container-form">Kontaktformular</RouterLink>!</h3>
        </div>
    </section>
    <supporters/>
</template>

<style scoped>

    body {
        background-color: black;
    }

    img { 
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    section {
        position: relative;
        width: 100%;
        height: 100svh;
        background-color: var(--bg);
        color: var(--fg);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .intro {
        display: flex;
        justify-content: space-between;
        padding: 2rem;
    }


    .line {
        color: white;
        font-size: clamp(2.5rem, 4vw + 2vmin, 7.5rem);
        font-weight: 900;
        text-transform: uppercase;
    }

    .container {  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . img img"
    "line1 line1 img img"
    ". line2 line2 ."
    "line3-1 . line3-2 line3-2"
    ". line4 line4 .";
}

.line1 { grid-area: line1; }

.line2 { grid-area: line2; }

.line3-1 {
    grid-area: line3-1; 
    text-align: right;
}

.line3-2 { grid-area: line3-2; }

.line4 { grid-area: line4; }

.line-image {
    grid-area: img;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.line-image img {
    width: 100%;
    max-width: 350px;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border-radius: 12px;
}

.outro {
    display: flex;
    flex-direction: row;
}

.outro-title h1 {
    width: 100%;
}

h3, a {
    font-size: 2rem;
    font-weight: 500;
}

h3 {
    color: white;
}

a {
    color: #6c84e4;
}

a::after {
    position: absolute;
    content: "";
    top: 102.5%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #6c84e4;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s cubic-bezier(0.6, 0, 0.4, 1);
}

a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}

@media (max-width: 1000px) {
  .outro {
    display: flex !important;
    flex-direction: column !important; 
    align-items: center;   
    text-align: center;    
    gap: 2rem;              
  }

  .outro-title h1 {
    font-size: clamp(2rem, 6vw, 3rem); 
  }

  .further-info h3 {
    font-size: clamp(1.5rem, 4vw, 2rem); 
  }

  .further-info {
    display: flex;
    flex-direction: column;
    gap: 1rem; 
    align-items: center;
  }
}
</style>