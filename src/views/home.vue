<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex items-center justify-end p-4 space-x-2 lg:p-6 lg:px-12">
      <h1 class="flex-grow text-lg font-black"></h1>
      <button
        @click="signOut"
        class="p-1 font-bold rounded-md outline-none focus:ring-2 focus:ring-gray-300 hover:bg-gray-200">
        <logout-icon class="h-5 text-gray-800" />
      </button>
    </div>
    <div class="flex justify-center flex-grow">
      <!-- <div class="hidden w-full max-w-md lg:block"></div> -->
      <div class="flex flex-col flex-shrink-0 w-full max-w-screen-sm">
        <div class="flex-grow px-2 space-y-2 md:p-0">
          <div
            class="flex items-start w-full p-2 rounded-md pl-11 hover:bg-gray-100/75"
            :class="{ 'bg-gray-100/75': editing }">
            <textarea-autosize
              @focus="editing = true"
              @keypress.enter.prevent="saveItem"
              v-model="text"
              placeholder="enden?"
              class="flex-grow w-full py-1 text-sm bg-transparent resize-none" />
            <button
              class="p-1 bg-gray-300 rounded-md disabled:opacity-0"
              :disabled="!editing"
              @click="cancelEditing">
              <x-icon class="h-5 text-white" />
            </button>
          </div>
          <task-item :item="item" v-for="item in items" :key="item.id" />
        </div>
        <div class="sticky bottom-0">
          <div class="flex justify-end p-2 border" v-if="editing && false">
            <button class="p-1 rounded-md hover:bg-gray-200">
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
import {
  CheckIcon,
  MinusSmIcon,
  LogoutIcon,
  XIcon,
} from '@heroicons/vue/solid';

export default defineComponent({
  components: {
    TextareaAutosize,
    CheckIcon,
    MinusSmIcon,
    LogoutIcon,
    XIcon,
  },
  setup() {
    const text = ref<string>();
    const items = ref<any[]>([]);
    const pickedOutText = ref();
    const editing = ref(false);
    const router = useRouter();
    const { auth } = useSupabase();
    function saveItem() {
      const newItem = {
        id: items.value.length + 1,
        name: text.value,
        complete: false,
      };
      items.value = [newItem, ...items.value];
      text.value = '';
    }
    function signOut() {
      auth.signOut();
      router.push('/');
    }
    function cancelEditing() {
      text.value = '';
      editing.value = false;
    }
    return {
      text,
      items,
      pickedOutText,
      editing,
      saveItem,
      cancelEditing,
      signOut,
    };
  },
});
</script>
