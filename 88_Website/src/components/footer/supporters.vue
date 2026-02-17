<script setup>
import { svg } from 'd3';

</script>

<template>
    <div class="sponsor-logos">

        <!-- <div class="partner"> -->
            <div class="helmet-sponsor">
                <p class="category">Kopfsponsor</p>
                <a href="https://www.holzsteiner.ch/de/" target="_blank" rel="noopener noreferrer"><img class=main-partner src="/logos/EduardSteiner.svg" /></a>
            </div>
            <div class="cohelmet-sponsor">
                <p class="category">Co-Kopfsponsor</p>
                <a href="https://aheadintranet.com/" target="_blank" rel="noopener noreferrer"><img class=side-partner src="/logos/ahead.svg" /></a>
            </div>
        <!-- </div> -->

        <div class="supplier">
            <p class="category">Ausrüster</p>
            <div class="supplier-logo">
                <a href="https://www.rossignol.com/ch-de/" target="_blank" rel="noopener noreferrer"><img class="supplier-svg rossignol" src="/logos/rossignol.svg" /></a>
                <a href="https://www.leki.com/ch/en" target="_blank" rel="noopener noreferrer"><img class="supplier-svg leki" src="/logos/Leki.svg" /></a>
                <!--<a href="" target="_blank" rel="noopener noreferrer"><img class="supplier-svg" src="" /></a>-->
            </div>
        </div>

        <div class="extern">
            <a href="https://www.instagram.com/_.nkj_/" target="_blank" rel="noopener noreferrer"><img class="social-logo insta" src="/logos/insta.svg"></a>
            <a href="https://www.fis-ski.com/DB/general/athlete-biography.html?competitorid=261620&sectorcode=AL" target="_blank" rel="noopener noreferrer"><img class="social-logo fis" src="/logos/fis.svg"></a>
        </div>

        <div class="footer-links">
            <div class="intern">
                <router-link to="/impressum">Impressum</router-link>
                <router-link to="/datenschutz">Datenschutz</router-link>
            </div>
        </div>
    
    </div>


</template>

<style scoped>
.sponsor-logos a {
    display: flex;
    height: 100%;
    align-items: center;
}

.sponsor-logos {
    display: flex;
    /*flex-direction: row; */
    flex-wrap: wrap;
    height: 15vh;
    width: 100vw;
    background-color: #0f0f0f;
    overflow: hidden;
    padding: 30px;
    gap: 30px;
    justify-self: center;
    justify-content: space-around;
}

.partner {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
}

.supplier {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%; 
}

.helmet-sponsor {
    flex-direction: column;
    display: flex;
    height: 100%;
}

.cohelmet-sponsor {
    flex-direction: column;
    display: flex;
    height: 100%;
}

.supplier-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
}

.rossignol {
    height: 300%;
    width: auto;
}

.leki {
    height: 100%;
    width: auto;
}

.main-partner {
object-fit: contain;
padding: 10px 10px 10px 0;
}

.side-partner {
object-fit: contain;
padding: 10px 10px 10px 0;
}

.footer-links {
    display: flex;
    align-items: center;
}

.intern {
    display: flex;
    flex-direction: row;
    gap: 2em;
}

.extern {
    display: flex;
    flex-direction: row;
    gap: 30px;
}

.social-logo {
    height: 50px;
    width: auto;
    filter: invert(100);
}

.intern a::after {
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

.intern a:hover::after{
    transform: scaleX(1);
    transform-origin: left;
}

</style>