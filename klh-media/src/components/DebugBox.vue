<script setup lang="ts">
const props = defineProps({
    isShown: Boolean,
});
</script>

<template>
    <div v-if="isShown" class="debug-panel">
        <p class="pb-0">Debug Panel</p>
        <div class="debug-scss"></div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/includes/variables" as v;
@use "../assets/scss/includes/functions" as f;

.debug-panel {
    background: rgba(v.$black, 0.7);
    bottom: 0;
    color: v.$white;
    padding: f.rem-calc(20);
    position: fixed;
    right: 0;
    z-index: 100000;

    // .debug-css {
        
    // }
}
</style>
