<template>
  <div
    class="sticky overflow-hidden bg-white border rounded-md rounded-t-none bottom-1 md:rounded-xl md:bottom-0">
    <div class="flex justify-end p-2">
      <button class="p-2 bg-gray-300 rounded-md">
        <trash-icon :size="16" :stroke-width="3" />
      </button>
    </div>
    <div class="flex items-center text-sm font-medium">
      <input
        type="text"
        class="w-full p-4 truncate outline-none"
        placeholder="Input" />
      <span class="text-gray-900/70">R</span>
      <input
        type="number"
        class="w-16 py-4 outline-none"
        value="12345"
        placeholder="Input" />
      <button class="p-2 mr-2 bg-gray-300 rounded-md">
        <x-icon :size="16" :stroke-width="3" />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { X as XIcon, Trash as TrashIcon } from 'lucide-vue-next';
</script>
