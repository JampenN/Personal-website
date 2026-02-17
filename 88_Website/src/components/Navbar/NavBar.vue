<script setup>
import { onMounted } from 'vue';
import { initNav } from '@/components/Navbar/Script-menu.js'
import img1 from '@/assets/images/img-1.JPG'
import img2 from '@/assets/images/img-2.jpg'
import img3 from '@/assets/images/img-3.jpg'
import img4 from '@/assets/images/Contact-img.JPG'

onMounted(() => {
    initNav()
})

</script>

<template>
     <nav>
    <div class="logo">
        <router-link to="/home">
                        <svg></svg>
        </router-link>
    </div>
    <div class="menu-toggle">
        <p id="menu-open">Menu</p>
        <p id="menu-close">Close</p>   
    </div>
 </nav>

     <div class="menu-overlay">
    <div class="menu-content">
     <div class="menu-items">
        <div class="col-lg">
            <div class="menu-preview-img"><img src="./public/images" alt="" />
            </div>
        </div>
        <div class="col-sm">
            <div class="menu-links">
                <div class="link">
                    <router-link to="/about" :data-img="img1">Über mich</router-link>
                </div>
                <div class="link">
                    <router-link to="/sponsoring" :data-img="img2">Sponsoring</router-link>
                </div>
                <div class="link">
                    <!--<router-link to="/aktuelles" :data-img="img3">Aktuelles</router-link>-->
                </div>
                <div class="link">
                    <router-link to="/contact" :data-img="img4">Kontakt</router-link>
                </div>
            </div>
            <div class="menu-socials">
                <div class="social"><a href="https://www.instagram.com/_.nkj_/" target="_blank" rel="noopener noreferrer">Instagram</a></div>
                <div class="social"><a href="https://www.fis-ski.com/DB/general/athlete-biography.html?competitorid=261620&sectorcode=AL" target="_blank" rel="noopener noreferrer">FIS Profile</a></div>
            </div>
        </div>
    </div>
    <div class="menu-footer">
        <div class="col-lg">
           
        </div>
        <div class="col-sm">
            <router-link to="/impressum">Impressum</router-link>
            <router-link to="/datenschutz">Datenschutz</router-link>
        </div>
    </div> 
    </div>
 </div>

 <div class="container">

 </div>
</template>

<style scoped>
nav {
    position: fixed;
    width: 100vw;
    padding: 2.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 4;
    mix-blend-mode: difference;
    background: rgba(0,0,0,0.001);
    pointer-events: none;
}

.logo svg {
    width: 200px;
    height: auto;
    display: block;
}

.logo a {
    font-weight: 600;
    pointer-events: auto;
}

.menu-toggle {
    position: relative;
    width: 3rem;
    height: 1.5rem;
    cursor: pointer;
    pointer-events: auto;
}

.menu-toggle p {
    position: absolute;
    transform-origin: top left;
    will-change: transform, opacity;
    mix-blend-mode: difference;
    color: white;
}

.menu-overlay {
    position: fixed;
    width: 100vw;
    height: 100svh;
    background-color: #0f0f0f;
    z-index: 3;
}

.menu-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: left bottom;
    will-change: transform, opacity;
}

.menu-items, .menu-footer {
    width: 100%;
    padding: 2.5em;
    display: flex;
    gap: 2.5em;
}

.col-lg {
    flex: 3;
}

.col-sm {
    flex: 2;
}

.menu-items .col-lg {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-preview-img {
    position: relative;
    width: 45%;
    aspect-ratio: 10 / 16;
    overflow: hidden;
    pointer-events: none;
}

.menu-preview-img img {
    position: absolute;
    will-change: transform, opacity;
}

.menu-items .col-sm {
    padding: 2.5em 0;
    display: flex;
    flex-direction: column;
    gap: 2.5em;
}

.menu-links, .menu-socials {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}

.link, .social {
    padding-bottom: 6px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

.link a, .social a, button a {
    position: relative;
    display: inline-block;
    will-change: transform;
    transition: color 0.5s;
}

.link a {
    font-size: 3.5rem;
    letter-spacing: -0.2rem;
}

.social a {
    color: #8f8f8f;
}

.social a:hover {
    color: #fff;
}

.menu-footer {
    position: absolute;
    bottom: 0;
}

.menu-footer .col-sm {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
}

.link a::after,
.social a::after,
.menu-footer a::after {
    position: absolute;
    content: "";
    top: 102.5%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s cubic-bezier(0.6, 0, 0.4, 1);
}

.link a:hover::after,
.social a:hover::after,
.menu-footer a:hover::after{
    transform: scaleX(1);
    transform-origin: left;
}

.menu-toggle p#menu-close {
    opacity: 0;
    transform: translateX(-5px) translateY(10px) rotate(5deg);
}

.link a, .social a {
    transform: translateY(120%);
    opacity: 0.25;
}

.menu-content {
    transform: translateX(-100px) translateY(-100px) scale(1.5) rotate(-15deg);
    opacity: 0.25;
}

.menu-overlay {
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
}

@media (max-width: 900px) {
    .hero h1 {
        width: 100%;
        font-size: 4rem;
        letter-spacing: 0;
    }

    .menu-items .col-lg {
        display: none;
    }

    .link a::after, 
    .social a::after,
    .menu-footer a::after {
        display: none;
    }
}
</style>