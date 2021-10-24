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
              hover:bg-gray-100/75
            "
            :class="{ 'bg-gray-100/75': editing }">
            <textarea-autosize
              @focus="editing = true"
              @blur="editing = false"
              @keypress.enter.prevent="saveItem"
              v-model="text"
              placeholder="enden?"
              class="
                flex-grow
                w-full
                resize-none
                text-sm
                py-1
                bg-transparent
              " />
            <button
              class="rounded-md p-1 bg-gray-300 disabled:opacity-0"
              :disabled="!editing"
              @click="cancelEditing">
              <x-icon class="h-5 text-white" />
            </button>
          </div>
          <task-item v-for="(item, i) in []" :key="i" />
        </div>
        <div class="sticky bottom-0 md:rounded-t-md bg-white">
          <div class="border flex justify-end p-2" v-if="editing">
            <button class="rounded-md p-1 hover:bg-gray-200">
              <x-icon class="h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSupabase } from 'vue-supabase';
import TextareaAutosize from '~/components/textarea-autosize.vue';
import TaskItem from '~/components/task-item.vue';
import {
  CheckIcon,
  MinusSmIcon,
  LogoutIcon,
  XIcon,
} from '@heroicons/vue/solid';

export default defineComponent({
  components: {
    TextareaAutosize,
    TaskItem,
    CheckIcon,
    MinusSmIcon,
    LogoutIcon,
    XIcon,
  },
  setup() {
    const text = ref();
    const pickedOutText = ref();
    const editing = ref(false);
    const router = useRouter();
    const { auth } = useSupabase();
    function saveItem() {}
    function signOut() {
      auth.signOut();
      router.push('/');
    }
    function cancelEditing() {
      text.value = '';
      editing.value = false;
    }
    return { text, pickedOutText, editing, saveItem, cancelEditing, signOut };
  },
});
</script>
