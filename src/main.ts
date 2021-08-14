import { createApp } from 'vue';
import VueSupabase from 'vue-supabase';
import App from './App.vue';
import './index.css';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '/@/views/home.vue';

const routes = [{ path: '/', component: Home }];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

console.log(import.meta.env.SUPABASE_URL);

const app = createApp(App);
app.use(router);
app.use(VueSupabase, {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseKey: import.meta.env.VITE_SUPABASE_KEY,
});

app.mount('#app');
