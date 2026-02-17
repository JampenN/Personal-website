<script setup>
import * as d3 from "d3";
import { onMounted } from "vue";

onMounted(() => {
  const svg = d3.select("#map")
    .attr("width", 800)
    .attr("height", 600);

  d3.json("/custom.geo.json").then(geo => {
    const projection = d3.geoMercator()
      .scale(5000)
      .center([7.5, 46.8])
      .translate([300, 200]);

    const path = d3.geoPath().projection(projection);

    svg.append("g")
      .selectAll("path")
      .data(geo.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 5);
  });
});
</script>

<template>
  <svg id="map" class="map"></svg>
</template>

<style scoped>
.map {
    width: auto;
    height: 50vh;
    overflow: hidden;
}
</style>
