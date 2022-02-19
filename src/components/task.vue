<template>
  <div class="flex items-start p-1 py-2 space-x-1 rounded-md hover:bg-gray-100">
    <button class="p-1.5 bg-indigo-500x rounded-md opacity-0">
      <grip-vertical-icon :size="16" :stroke-width="3" />
    </button>
    <button
      class="p-1.5 bg-indigo-400x text-gray-900 text-opacity-50 rounded-md"
      @click="toggleComplete">
      <check-square-icon v-if="complete" :size="16" :stroke-width="3" />
      <square-icon :size="16" :stroke-width="3" v-else />
    </button>
    <div
      class="grid gap-x-1 w-full text-sm font-medium grid-cols-[auto_auto] py-1">
      <span class="truncate" :class="[complete ? ' line-through' : '']">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quasi quos
        explicabo perspiciatis amet facere error doloribus reiciendis?
      </span>
      <span class="font-bold text-gray-900/30"> R45</span>
    </div>
    <button class="bg-indigo-400s p-1.5 rounded-md opacity-0" disabled>
      <more-vertical-icon :size="16" :stroke-width="3" />
    </button>
  </div>
</template>
<script lang="ts" setup>
import {
  GripVertical as GripVerticalIcon,
  Square as SquareIcon,
  CheckSquare as CheckSquareIcon,
  MoreVertical as MoreVerticalIcon,
} from 'lucide-vue-next';
import { ref } from 'vue';

const complete = ref(false);
function toggleComplete() {
  complete.value = !complete.value;
}
</script>
