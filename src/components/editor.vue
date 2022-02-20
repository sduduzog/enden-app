<template>
  <div
    class="sticky overflow-hidden bg-white border rounded-md rounded-t-none bottom-1 md:rounded-xl md:bottom-0">
    <div class="flex justify-end p-2" v-if="!editorCollapsed">
      <button class="p-2 bg-gray-300 rounded-md">
        <trash-icon :size="16" :stroke-width="3" />
      </button>
    </div>
    <div class="flex items-center px-2 text-sm font-medium">
      <button
        class="p-2 mr-2 rounded-md"
        @click="editorCollapsed = !editorCollapsed">
        <chevron-down-icon
          v-if="editorCollapsed"
          :size="16"
          :stroke-width="3" />
        <chevron-up-icon v-else :size="16" :stroke-width="3" />
      </button>
      <input
        type="text"
        class="w-full p-4 truncate outline-none"
        placeholder="Input"
        @keyup.enter="addTitle"
        v-model="title" />
      <span class="text-gray-900/70">R</span>
      <input
        type="number"
        class="w-12 py-4 pr-2 outline-none"
        placeholder="0.00000" />
      <button class="p-2 bg-gray-300 rounded-md">
        <x-icon :size="16" :stroke-width="3" />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  X as XIcon,
  Trash as TrashIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
} from 'lucide-vue-next';
import { ref } from 'vue';

const editorCollapsed = ref(true);
const emit = defineEmits(['titleChanged']);

const title = ref();
function addTitle() {
  emit('titleChanged', title.value);
  title.value = '';
}
</script>
