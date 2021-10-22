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
          <div
            class="
              rounded-md
              w-full
              p-2
              pl-11
              flex
              items-start
              hover:bg-gray-50
            "
            :class="{ 'bg-gray-100': editing }">
            <textarea-autosize
              @focus="editing = true"
              @blur="editing = false"
              v-model="text"
              class="flex-grow resize-none text-sm py-1 bg-transparent" />
            <button
              class="rounded-md p-1 bg-gray-300 disabled:opacity-0"
              :disabled="!editing">
              <x-icon class="h-5 text-white" />
            </button>
          </div>
          <div
            tabindex="0"
            v-for="(item, i) in [1, 2]"
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
                active:bg-gray-300 active:text-white
              ">
              <check-icon v-if="i % 2 === 0" class="h-5" />
              <minus-sm-icon v-else class="h-5" />
            </button>
            <span
              :class="i % 2 === 0 ? '' : 'line-through '"
              class="flex-grow py-1 font-medium text-sm bg-fuchsia-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              ab fugiat nesciunt.
            </span>
          </div>
        </div>
        <div class="bg-indigo-300 sticky bottom-0"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSupabase } from 'vue-supabase';
import TextareaAutosize from '~/components/textarea-autosize.vue';
import {
  CheckIcon,
  MinusSmIcon,
  LogoutIcon,
  XIcon,
} from '@heroicons/vue/solid';

export default defineComponent({
  components: { TextareaAutosize, CheckIcon, MinusSmIcon, LogoutIcon, XIcon },
  setup() {
    const text = ref();
    const editing = ref(false);
    const router = useRouter();
    const { auth } = useSupabase();
    function signOut() {
      auth.signOut();
      router.push('/');
    }
    function editorFocussed() {
      console.log('editor focussed');
      editing.value = true;
    }
    function rando() {
      console.log('random function');
    }
    return { text, signOut, editing, editorFocussed, rando };
  },
});
</script>
