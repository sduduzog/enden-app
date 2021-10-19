import { createRouter, createWebHistory } from 'vue-router';
import Index from '~/views/index.vue';
import Terms from '~/views/terms.vue';
import Privacy from '~/views/privacy.vue';
import Home from '~/views/home.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/terms', component: Terms },
  { path: '/privacy', component: Privacy },
  { path: '/home', component: Home, name: 'Home' },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
