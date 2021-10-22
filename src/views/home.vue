<template>
  <div class="min-h-screen flex flex-col">
    <div
      class="p-2 pr-4 lg:p-6 lg:px-12 font-black flex items-center justify-end">
      <h1 class="flex-grow text-lg">enden?</h1>
      <button @click="signOut" class="font-bold">sign out</button>
    </div>
    <div class="flex-grow flex justify-center">
      <!-- <div class="hidden lg:block w-full max-w-md"></div> -->
      <div class="flex-shrink-0 w-full max-w-screen-sm space-y-2 relative">
        <div
          tabindex="0"
          v-for="(item, i) in [1, 2]"
          :key="i"
          class="
            p-1
            text-sm
            bg-fuchsia-200
            hover:bg-gray-50
            focus:bg-gray-100 focus:shadow-sm
            text-gray-700
            rounded-md
            outline-none
            flex
            items-start
            space-x-1
          ">
          <button class="bg-rose-300 rounded-md p-1">
            <check-icon class="h-5" />
          </button>
          <span class="bg-indigo-400 flex-grow py-1 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </span>
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
import {
  DotsHorizontalIcon,
  DotsVerticalIcon,
  CheckIcon,
  MinusSmIcon,
} from '@heroicons/vue/solid';

export default defineComponent({
  components: { DotsHorizontalIcon, DotsVerticalIcon, CheckIcon, MinusSmIcon },
  setup() {
    const router = useRouter();
    const { auth } = useSupabase();
    function signOut() {
      auth.signOut();
      router.push('/');
    }
    return { signOut };
  },
});
</script>
