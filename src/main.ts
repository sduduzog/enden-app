import { createApp } from 'vue';
import { createVueSupabase } from 'vue-supabase';
import App from '~/App.vue';
import '~/index.css';
import router from '~/router';

const supabase = createVueSupabase({
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseKey: import.meta.env.VITE_SUPABASE_KEY,
});

const app = createApp(App);
app.use(router);
app.use(supabase);

app.mount('#app');
