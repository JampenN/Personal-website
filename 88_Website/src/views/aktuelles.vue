<script setup>
import Map from '@/components/map/map.vue';
import supporters from '@/components/footer/supporters.vue';
</script>

<template>
    <h1>Wo bin ich</h1>
    <div class="map-wrapper">
        <Map/> 
    </div>
    <supporters/>
</template>

<style scoped>
    .map-wrapper {
        position: relative;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
    }

    h1 {
        color: black;
    }
</style>