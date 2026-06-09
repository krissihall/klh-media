// import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: 'rgb(38, 38, 38)',
    surface: '#fff',
    // 'on-background': '#fff', // Default text color on background
    // 'on-surface': '#fff',    // Default text color on surfaces
    'surface-bright': 'rgb(38, 38, 38)',
    // 'surface-bright': '#fff',
    'surface-light': '#101010',
    // 'surface-light': '#fff',
    'surface-variant': '#bbb',
    'on-surface-variant': '#eee',
    primary: '#ff2577',
    'primary-darken-1': 'rgb(190, 0, 71)',
    secondary: '#25ffad',
    'secondary-darken-1': 'rgb(0, 190, 118)',
    error: '#f0513f',
    info: 'rgb(28, 174, 255)',
    success: 'rgb(0, 235, 136)',
    warning: '#ffd925',
    'carousel-controls-bg': '#ddd'
,  },
  variables: {
    'border-color': '#ffffff',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#eeeeee',
    'theme-on-kbd': 'rgb(38, 38, 38)',
    'theme-code': '#101010',
    'theme-on-code': '#ffffff',
  },
  display: {
    thresholds: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    }
  }
}

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'myCustomDarkTheme',
    themes: {
      myCustomDarkTheme,
    },
  },
})
