import { createApp } from 'vue';
import VueSupabase from 'vue-supabase';
import App from '~/App.vue';
import '~/index.css';
import router from '~/router';
// import { registerSW } from 'virtual:pwa-register';

// registerSW();
const app = createApp(App);

app.use(VueSupabase, {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseKey: import.meta.env.VITE_SUPABASE_KEY,
});

app.use(router);

app.mount('#app');
