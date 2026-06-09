<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useBreakpoints } from '@/composables/useBreakpoints';

const { width, name, mobile } = useDisplay()
const { currentBreakpoint } = useBreakpoints();

const props = defineProps({
    isShown: Boolean,
});
</script>

<template>
    <div v-if="isShown" class="debug-panel">
        <h3>Debug Panel</h3>
        <div class="info">
            Current Breakpoint: {{ name }} {{ currentBreakpoint }}<br />
            Width: {{ width }}px<br />
            Is Mobile: {{ mobile }}
        </div>
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
