<script setup>
import loading from '@/components/Loading/loading.vue';
import supporters from '@/components/footer/supporters.vue';
</script>

<template>
<loading/>
<div class="hero-blocker"></div>
<section class="preview-about">
    <div class="section-title">
        <h1>Über mich</h1>
    </div>
    <div class="information-wrapper">
        <div class="information">
            <h2>Ich bin Nicola Jampen, Skirennfahrer im Kader des Nationalen Leistungszentrums von Swiss-Ski, mit dem Anspruch, mich jeden Tag weiterzuentwickeln – sportlich wie persönlich.</h2>
        </div>

        <div class="button">
            <router-link to="/about">
                Erfahre mehr über mich!
            </router-link>
        </div>
    </div>
    
</section>
<section class="preview-sponsoring">
    <div class="section-title">
        <h1>Sponsoring</h1>
    </div>
    <div class="information-wrapper">
        <div class="button">
            <router-link to="/sponsoring">
                Mehr zu den Sponsoring-Möglichkeiten erfahren!
            </router-link>
        </div>
        <div class="information">
            <h2>Leistung entsteht nicht allein. Mit starken Partnern an meiner Seite wird aus jedem Schritt der nächste Fortschritt.</h2>
        </div>
    </div>
</section>

<supporters/>
</template>

<style scoped>
.hero-blocker {
    height: 100vh;
    background-color: white;
}

section {
    background-color: white;
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    /*z-index: 101;*/
}

.section-title {
    text-align: center;
    /*z-index: 3;*/
}

.information-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

.information {
    width: 20vw;
}

.button {
    width: 30vw;
}

.button a::after {
    position: absolute;
    content: "";
    top: 102.5%;
    left: 0;
    width: 100%;
    height: 2px;
    background: black;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s cubic-bezier(0.6, 0, 0.4, 1);
}

.button a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}

h1 {
    color: black;
}

h2 {
    color: black;
}

a {
    font-size: 2rem;
    font-weight: 600;
    color: black;
}
</style>