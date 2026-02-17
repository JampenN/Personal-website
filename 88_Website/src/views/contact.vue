<script setup>
import Supporters from '@/components/footer/supporters.vue';
import contactimg from '@/assets/images/Contact-img.JPG'

</script>

<template>
    <div class="container-banner">
        <div class="banner">        
            <div class="banner-text">
                <span>Ta kontakt med meg • 連絡して • Contactez-moi • Mäud di • Say Hi • </span>
                <span>Ta kontakt med meg • 連絡して • Contactez-moi • Mäud di • Say Hi • </span>
            </div>
        </div>
        <div class="content-banner">
        <div class="contact-img">
            <div class="portrait-img"><img :src="contactimg" alt="#"></div>
        </div>
        <div class="contact-left">
            <p>Ob auf der Piste oder abseits davon – Teamwork bringt dich immer weiter.
Schreib mir eine Nachricht und lass uns den nächsten Lauf gemeinsam in Angriff nehmen!</p>
        </div>
        <div class="contact-right">
            <a href="mailto:nicola.jampen@bluewin.ch">nicola.jampen@bluewin.ch</a>
        </div>
             <div class="button-form">
                  <a href="#container-form" class="scroll-button">Zum Kontaktformular</a>
             </div>
        </div>
    </div>

    
    <div class="form-overlay" id="container-form">
        <div class="form-content">
                <form method="post" action="http://localhost:3000/contact" class="form-fields">
                    <P>Name</P>
                    <input type="text" name="name" placeholder="Enter name" class="contact-input"/>
                    <p>E-Mail</p>
                    <input type="email" name="email" placeholder="Enter email" class="contact-input"/>
                    <p>Betreff</p>
                    <input type="text" name="subject" placeholder="Enter subject" class="contact-input"/>
                    <p>Nachricht</p>
                    <textarea name="message" placeholder="Enter message" class="messagebox"></textarea>
                    <button type="submit" class="submit-button">Submit</button>
                </form>
        </div>  
    </div>

    <Supporters/>
</template>

<style scoped>
.container-banner {
    position: relative;
    height: 100vh;
    background-color: white;
}

.banner {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    position: absolute;
    top: 40%;
}

.banner-text {
    display: inline-flex;
    animation: scroll 30s linear infinite;
}

.banner-text span {
    font-size: 7rem;
    padding-right: 0%;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

.content-banner {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.portrait-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: max(60%, 350px);
    width: auto;
    max-width: 100%;
    aspect-ratio: 10/17.7;
    order: 2;
}

.contact-left {
    position: absolute;
    left: 10%;
    top: 60vh;
    width: min(15vw, 500px);
    order: 1;
}

.contact-right {
    position: absolute;
    left: 50%;
    right: 10%;
    top: 65vh;
    order: 3;
}

.contact-right a {
    position: relative;
    left: 60%;
    color: #0f0f0f;
    font-weight: 500;
}

.contact-right a::after {
    position: absolute;
    content: "";
    top: 102.5%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #0f0f0f;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s cubic-bezier(0.6, 0, 0.4, 1);
}

.contact-right a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}

.contact-left p {
    color: #0f0f0f;
    font-size: clamp(1rem, calc(0.2rem + 0.75vw) ,1.95rem);
    font-weight: 500;
}

@media (max-width: 500px) {
    .content-banner {
        flex-direction: column;
        align-items: center;
    }
    .portrait-img {
        order: 1;
        position: relative;
        top: 50vh;
        height: 45vh;
    }
    .contact-left {
        order: 2;
        position: relative;
        width: 70vw;
        left: 0;
        text-align: center;
        top: 30vh
    }
    .contact-right {
        order: 3;
        position: relative;
        left: 0;
    }
}

.button-form {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
}

.scroll-button {
    display: inline-block;
    font-size: min(5vw ,2.44rem);
    color: #8f8f8f;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
}

.scroll-button::after {
    position: absolute;
    content: "";
    top: 102.5%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #0f0f0f;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s cubic-bezier(0.6, 0, 0.4, 1);
}

.scroll-button:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}

.scroll-button:hover {
    color: #0f0f0f;
}

.form-overlay {
    height: 100vh;
    width: 100vw;
    background-color: #0f0f0f;
}

.form-content {
    padding-top: 30vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
}

.form-content p {
    padding-bottom: 0;
    padding-top: 40px;
}

.form-fields {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0px;
    width: min(500px, 70vw);
}

.contact-input {
    height: 40px;
    width: 100%;
    outline: none;
    border-width: 0 0 2px;
    padding-left: 0%;
    font-weight: 500;
    background-color: #0f0f0f;
    color: #fff;
    border-color: white;
}

.messagebox {
    height: 120px;
    width: 100%;
    outline: none;
    border-width: 0 0 2px;
    padding-left: 0%;
    padding-top: 10px;
    font-weight: 500;
    background-color: #0f0f0f;
    color: #fff;
    border-color: white;
    font-family: "TWK Lausanne", "Inter", sans-serif;
}

.submit-button {
 position: relative;
 align-self: flex-end;
 display: inline-block;
 font-size: 1.56rem;
 background-color: transparent;
 color: white;
 border: none;
 outline: none;
 cursor: pointer;
 padding-top: 10%;
}

.submit-button::after {
    position: absolute;
    content: "";
    top: 102.5%;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s cubic-bezier(0.6, 0, 0.4, 1);
}

.submit-button:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}
</style>