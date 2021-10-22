<template>
  <div class="min-h-screen flex flex-col bg-fuchsia-300">
    <div class="p-4 font-black flex items-center justify-end bg-white">
      <h1 class="flex-grow text-lg">enden?</h1>
      <button @click="signOut" class="font-bold">sign out</button>
    </div>
    <div class="flex-grow border bg-white">Cheese</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useSupabaseAuth } from 'vue-supabase';

export default defineComponent({
  setup() {
    const router = useRouter();
    const auth = useSupabaseAuth();
    function signOut() {
      auth.signOut();
      router.push('/');
    }
    return { signOut };
  },
});
</script>
