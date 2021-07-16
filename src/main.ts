import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '/@/views/home.vue';
const routes = [{ path: '/', component: Home }];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

createApp(App).use(router).mount('#app');
