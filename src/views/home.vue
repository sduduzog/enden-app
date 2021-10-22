<template>
  <div class="min-h-screen flex flex-col">
    <div class="p-4 lg:p-6 lg:px-12 flex items-center justify-end space-x-2">
      <h1 class="flex-grow text-lg font-black"></h1>
      <button
        @click="signOut"
        class="
          rounded-md
          p-1
          font-bold
          outline-none
          focus:ring-2 focus:ring-gray-300
          hover:bg-gray-200
        ">
        <logout-icon class="h-5 text-gray-800" />
      </button>
    </div>
    <div class="flex-grow flex justify-center">
      <!-- <div class="hidden lg:block w-full max-w-md"></div> -->
      <div class="flex-shrink-0 w-full max-w-screen-sm flex flex-col">
        <div class="flex-grow px-2 md:p-0 space-y-2">
          <input
            type="text"
            class="
              w-full
              rounded-md
              text-sm
              p-3
              pl-11
              outline-none
              bg-transparent
              hover:bg-gray-50
              focus:bg-gray-100
            "
            placeholder="enden?" />
          <div
            tabindex="0"
            v-for="(item, i) in [1]"
            :key="i"
            class="
              lg:mx-0
              p-2
              hover:bg-gray-100
              focus:bg-gray-100
              focus-within:bg-gray-100
              text-gray-700
              rounded-md
              outline-none
              flex
              items-start
              space-x-2
              group
            ">
            <button
              class="
                rounded-md
                p-1
                outline-none
                md:opacity-0
                group-focus:opacity-100
                focus:opacity-100
                group-hover:opacity-100
                focus:bg-gray-200 focus:ring-2 focus:ring-gray-300
                active:bg-gray-400/75 active:text-white
              ">
              <check-icon v-if="i % 2 === 0" class="h-5" />
              <minus-sm-icon v-else class="h-5" />
            </button>
            <span
              :class="i % 2 === 0 ? '' : 'line-through'"
              class="flex-grow py-1 font-medium text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
        <div class="bg-indigo-300 sticky bottom-0"></div>
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
