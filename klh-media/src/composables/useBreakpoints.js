// composables/useBreakpoints.js
import { ref, onMounted, onUnmounted } from 'vue';

export function useBreakpoints() {
  const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  };

  const currentBreakpoint = ref('');

  const updateBreakpoint = () => {
    const width = window.innerWidth;
    if (width < breakpoints.sm) currentBreakpoint.value = 'xs';
    else if (width < breakpoints.md) currentBreakpoint.value = 'sm';
    else if (width < breakpoints.lg) currentBreakpoint.value = 'md';
    else if (width < breakpoints.xl) currentBreakpoint.value = 'lg';
    else if (width < breakpoints.xxl) currentBreakpoint.value = 'xl';
    else currentBreakpoint.value = 'xxl';
  };

  onMounted(() => {
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoint);
  });

  return { currentBreakpoint };
}
