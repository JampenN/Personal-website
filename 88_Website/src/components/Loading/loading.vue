<script setup>
import { onMounted } from 'vue';
import { initLoading } from './script-loading';

onMounted(() => {
    initLoading()
}); 
</script>

<template>
            <div class="loading-overlay">
            <div class="projects">
                <div class="project-header">
                    <p>Event</p>
                    <p>Category</p>
                </div>
                </div>
                <div class="loader">
                    <h1 class="logo-line-1">Nicola</h1>
                    <h1 class="logo-line-2">Jampen</h1>
                </div>
                <div class="locations">
                    <div class="location-header">
                        <p>Location</p>
                    </div>
                </div>
            </div>
            
            <div class="image-grid">
                <div class="grid-row">
                    <div class="loader-img"><img src="/images/Loading_animation/img1.jpg" alt=""></div>
                    <div class="loader-img"><img src="/images/Loading_animation/img2.jpg" alt=""></div>
                    <div class="loader-img"><img src="/images/Loading_animation/img3.jpg" alt=""></div>
                </div>
                <div class="grid-row">
                    <div class="loader-img"><img src="/images/Loading_animation/img4.jpg" alt=""></div>
                    <div class="loader-img main-img"><img src="/images/Loading_animation/img5.jpg" alt=""></div>
                    <div class="loader-img"><img src="/images/Loading_animation/img6.jpg" alt=""></div>
                </div>
                <div class="grid-row">
                    <div class="loader-img"><img src="/images/Loading_animation/img7.jpg" alt=""></div>
                    <div class="loader-img"><img src="/images/Loading_animation/img8.jpg" alt=""></div>
                    <div class="loader-img"><img src="/images/Loading_animation/img9.jpg" alt=""></div>
                </div>
            </div>
            
            <div class="banner-img banner-img-1"><img src="/images/Loading_animation/img2.jpg" alt=""></div>
            <div class="banner-img banner-img-2"><img src="/images/Loading_animation/img7.jpg" alt=""></div>
            
            <div class="intro-copy">
                <h3>Alpine</h3>
                <h3>Skier</h3>
            </div>
            
            <div class="title">
                <h1>Nicola Jampen</h1>
            </div>
</template>


<style scoped>

.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100svh;
    padding: 2em;
    background-color: #000;
    color: #fff;
    display: flex;
    gap: 2em;
    overflow: hidden;
    align-items: center;
}

.projects, .loader, .locations {
    flex: 1;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
}

.loader {
    align-items: center;
    gap: 0;
}

.loader h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: "Druk", sans-serif;
    font-size: 2.5rem;
    font-style: italic;
    line-height: 0.9;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-image: linear-gradient(0deg, #3a3a3a, #3a3a3a 50%, #fff 0);
    background-size: 100% 200%;
    background-position: 0% 100%;
    color: #3a3a3a;
}

.loading-overlay p {
    text-transform: uppercase;
    font-family: "Akkurat Mono", monospace;
    font-size: 1rem;
}

:deep(.project-text) {
    font-size: 1rem;
}

:deep(.category-text) {
    font-size: 1rem;
    text-align: right;
}

:deep(.project-item) {
    display: flex;
    flex-direction: row;
}

:deep(.project-item > *) {
    flex: 1;
}

:deep(.category-text) {
    display: flex;
    align-self: flex-end;
}

.project-header, .project-item, .location-header, .location-item {
    display: flex;
    gap: 2em;
    opacity: 0;
}

.project-header > *, .location-header > * {
    flex: 1;
}

.locations {
    align-items: center;
}

.location-header, .location-item {
    width: 50%;
}

.project-item, .location-item {
    color: #4f4f4f;
}

.image-grid {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    gap: 1em;
    z-index: 2;
}

.grid-row {
    width: 100%;
    display: flex;
    gap: 1em;
}

.loader-img {
    position: relative;
    flex: 1;
    aspect-ratio: 1;
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
}

.banner-img {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 20%;
    aspect-ratio: 4/5;
}

.intro-copy {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    width: 100%;
    padding: 0.8em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title  {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
}

.intro-copy h3, .title h1 {
    position: relative;
    text-transform: uppercase;
    color: #000;
    font-family: "Druk", sans-serif;
    font-weight: 500;
    font-style: italic;
    line-height: 0.9;
}

.title h1 {
    font-size: 3.5rem;
}

.intro-copy h3 {
    font-size: 1.5rem;
}

.intro-copy h3, .title h1 {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

.intro-copy h3 .word, .title h1 .word {
    display: inline-block;
    position: relative;
    will-change: transform;
    margin-right: 0.1rem;
}

@media (max-width: 900px) {
    .loader{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

.banner-img, .intro-copy, .locations, .projects {
    display: none;
}

.title {
    width: 100%;
    bottom: 20%;
    display: flex;
    justify-content: center;
}

.title h1 {
    font-size: 2.5rem;
}

.image-grid {
    width: 75%;
    gap: 0.5em;
}

.grid-row {
    width: 95%;
    justify-content: space-around;
    gap: 0.5em;
}
}
</style>