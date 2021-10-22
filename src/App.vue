<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { useSupabase } from 'vue-supabase';
import { useSession } from './composables/session';

export default defineComponent({
  name: 'App',
  setup() {
    const { session } = useSession();
    const supabase = useSupabase();
    const auth = supabase.auth;
    const { data: subscription } = auth.onAuthStateChange((_, _session) => {
      session.value = _session;
    });
    onMounted(() => {
      session.value = auth.session();
    });
    onUnmounted(() => {
      subscription?.unsubscribe();
    });
    return {};
  },
});
</script>

<style type="text/css">
.st0 {
  fill: #1d9bf0;
}
</style>
