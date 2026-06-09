import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutMe from '../views/AboutMe.vue';
import PricingPage from '../views/PricingPage.vue';
import ContactPage from '../views/ContactPage.vue';

const routes = [
{
  path: '/',
  name: 'home',
  component: HomePage,
},
{
  path: '/about',
  name: 'about',
  component: AboutMe,
},
{
  path: '/pricing',
  name: 'pricing',
  component: PricingPage,
},
{
  path: '/contact',
  name: 'contact',
  component: ContactPage,
},
// Placeholder for additional routes
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
