import { createApp } from 'vue';
import { createSupabase } from 'vue-supabase';
import App from './App.vue';
import './index.css';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '/@/views/home.vue';

const routes = [{ path: '/', component: Home }];

const supabase = createSupabase({
  supabaseUrl: 'https://glcenwzasztexldnfmud.supabase.co',
  supabaseKey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNDAzMzE5MCwiZXhwIjoxOTM5NjA5MTkwfQ.Pfzgv4VIMs2_Wm5okKXzsgIbGJ4ROXtPDiecpHmnOUw',
});

const router = createRouter({
  routes,
  history: createWebHistory(),
});

const app = createApp(App);

app.use(router);
app.use(supabase);

app.mount('#app');
