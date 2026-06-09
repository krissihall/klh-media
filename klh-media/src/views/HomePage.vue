<script setup lang="ts">
</script>

<template>
  <div class="homepage-container home-container">
    <v-carousel :aspect-ratio="1.97" :height="550" show-arrows="hover" cycle>
      <v-carousel-item
        src="/carousel/stinky-craft.png"
        cover />
      <v-carousel-item
        src="/carousel/kristina-l-hall.png"
        cover />
      <v-carousel-item
        src="/carousel/logos.png"
        cover />
    </v-carousel>
  </div>
</template>
