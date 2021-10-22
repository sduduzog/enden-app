<template>
  <div class="min-h-screen flex flex-col">
    <div
      class="p-2 pr-4 lg:p-6 lg:px-12 font-black flex items-center justify-end">
      <h1 class="flex-grow text-lg">enden?</h1>
      <button @click="signOut" class="font-bold">sign out</button>
    </div>
    <div class="flex-grow flex justify-center">
      <!-- <div class="hidden lg:block w-full max-w-md"></div> -->
      <div class="flex-shrink-0 w-full max-w-screen-sm space-y-1 relative">
        <div class="p-2 px-3 bg-gray-300 rounded-md">
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            aliquam dicta ipsam ullam?</span
          >
        </div>
        <div class="absolute inset-x-0 bottom-0 p-4 bg-rose-100"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useSupabase } from 'vue-supabase';
import { DotsHorizontalIcon, DotsVerticalIcon } from '@heroicons/vue/solid';

export default defineComponent({
  components: { DotsHorizontalIcon, DotsVerticalIcon },
  setup() {
    const router = useRouter();
    const auth = useSupabase().auth;
    function signOut() {
      auth.signOut();
      router.push('/');
    }
    return { signOut };
  },
});
</script>
