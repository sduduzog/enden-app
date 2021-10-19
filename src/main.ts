import { createApp } from 'vue';
import VueSupabase, { useSupabase } from 'vue-supabase';
import App from '~/App.vue';
import '~/index.css';
import router from '~/router';

const app = createApp(App);
app.use(router);
app.use(VueSupabase, {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseKey: import.meta.env.VITE_SUPABASE_KEY,
});
const supabase = useSupabase();
console.log(supabase);

app.mount('#app');
