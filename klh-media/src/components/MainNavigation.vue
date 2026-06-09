<script setup lang="ts">
import { links } from "../data/navigation.json";
</script>

<template>
  <nav class="main-navigation navbar navbar-expand-lg bg-primary">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mb-2 mb-lg-0 pr-4">
        <li v-for="(link, index) in links" :key="index">
          <router-link class="nav-link" active-class="active" :to="link.link">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
</style>
