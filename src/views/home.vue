<template>
  <div class="min-h-screen flex flex-col">
    <div
      class="p-2 pr-4 lg:p-6 lg:px-12 font-black flex items-center justify-end">
      <h1 class="flex-grow text-lg">enden?</h1>
      <button @click="signOut" class="font-bold">sign out</button>
    </div>
    <div class="flex-grow flex justify-center">
      <!-- <div class="hidden lg:block w-full max-w-md"></div> -->
      <div class="flex-shrink-0 w-full max-w-screen-sm flex flex-col">
        <div class="flex-grow px-2 md:p-0 space-y-2">
          <div
            tabindex="0"
            v-for="(item, i) in [1, 2, 3]"
            :key="i"
            class="
              lg:mx-0
              p-1
              text-sm
              hover:bg-gray-50
              focus:bg-gray-100 focus:shadow-sm
              text-gray-700
              rounded-md
              outline-none
              flex
              items-start
              space-x-1
            ">
            <button class="rounded-md p-1">
              <check-icon v-if="i % 2 === 0" class="h-5" />
              <minus-sm-icon v-else class="h-5" />
            </button>
            <span
              :class="i % 2 === 0 ? '' : 'line-through'"
              class="flex-grow py-1 font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
        <div class="bg-indigo-300 sticky bottom-0">Cheese</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useSupabase } from 'vue-supabase';
import { CheckIcon, MinusSmIcon, LogoutIcon } from '@heroicons/vue/solid';

export default defineComponent({
  components: { CheckIcon, MinusSmIcon, LogoutIcon },
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
