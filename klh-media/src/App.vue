<script setup lang="ts">
import DebugBox from './components/DebugBox.vue';
</script>

<template>
  <div id="app" class="application-root">
    <div class="logo">
      <img src="/klh-media-logo.svg" alt="KLH Media LLC Logo" width="100%" />
    </div>
    <h1>Coming Soon...</h1>
    <DebugBox :isShown="false" />
  </div>
</template>

<style lang="scss" scoped>
@use "./assets/scss/includes/functions" as f;

.application-root {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo {
  margin-bottom: f.rem-calc(40);
  max-width: f.rem-calc(400);
}
</style>
