<template>
  <div
    class="flex items-start p-1 py-2 space-x-1 md:rounded-md group hover:bg-gray-100">
    <div
      class="p-1.5 bg-indigo-500x rounded-md md:opacity-0 group-hover:opacity-100 text-gray-900 text-opacity-50 cursor-grab active:cursor-grabbing">
      <grip-vertical-icon :size="16" :stroke-width="3" />
    </div>
    <button
      class="p-1.5 bg-indigo-400x text-gray-900 text-opacity-50 rounded-md"
      @click="toggleComplete">
      <check-square-icon v-if="complete" :size="16" :stroke-width="3" />
      <square-icon :size="16" :stroke-width="3" v-else />
    </button>
    <div
      class="grid gap-x-1 w-full text-sm font-medium grid-cols-[1fr_auto] py-1 pr-2">
      <span
        class="inline-block w-full truncate"
        :class="[complete ? ' line-through' : '']">
        {{ title }}
      </span>
      <span class="font-bold text-gray-900/30"> R45</span>
    </div>
    <button class="bg-indigo-400s hidden p-1.5 rounded-md opacity-0" disabled>
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

defineProps<{
  id: number;
  complete: boolean;
  title: string;
}>();

const complete = ref(false);
function toggleComplete() {
  complete.value = !complete.value;
}
</script>
