import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/scss/global.scss'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

const defaultTheme = 'dark'
// You might add logic here to check localStorage or system preferences
// Example: const savedTheme = localStorage.getItem('user-theme')
// const initialTheme = savedTheme || defaultTheme;

document.documentElement.setAttribute('data-theme', defaultTheme)

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(vuetify)
app.mount('#app')
