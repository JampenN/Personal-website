<script setup>
import supporters from '@/components/footer/supporters.vue';
</script>

<template>
        <div class="container-legal">
            <div class="impressum">
                <h1>Impressum</h1>
                <p class="mb-big">Nicola Jampen</p>
                <p>Eichberg 276b</p>
                <p>3661 Uetendorf</p>
                <p class="mb-big">Switzerland</p>
                <p>nicola.jampen@bluewin.ch</p>
            </div>
        </div>
    <supporters/>
</template>

<style scoped>
h1 {
    color: black;
}

.container-legal {
  position: relative;
  width: 100vw;
  height: 100svh;
  will-change: transform;
  transform-origin: right top;
  padding-top: 35vh;
  padding-left: clamp(2rem, 16vw, 30rem);
  text-align: left;
  background-color: #fff;
}

.container-legal p {
    font-size: 1.25rem;
    color: black;
    font-weight: 400;
}

.mb-big {
    margin-bottom: 2rem !important;
}
</style>