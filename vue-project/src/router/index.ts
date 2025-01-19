import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import Testside from '@/components/testside.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/testside',
    name: 'Testside',
    component: Testside,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
