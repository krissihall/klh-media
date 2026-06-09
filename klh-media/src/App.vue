<script setup lang="ts">
import DebugBox from './components/DebugBox.vue';
import SiteHeader from './components/SiteHeader.vue';
</script>

<template>
  <div id="app" class="application-root">
    <v-app style="align-items: center; display: flex">
      <SiteHeader />
      <div class="content-container">
        <router-view />
      </div>
      <DebugBox :isShown="true" />
    </v-app>
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
