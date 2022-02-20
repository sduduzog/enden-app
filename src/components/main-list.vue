<template>
  <div
    class="flex flex-col flex-shrink-[.7] w-full max-w-screen-md bg-white rounded-md md:rounded-xl md:overflow-auto">
    <draggable
      handle=".grab-handle"
      :group="{ name: 'tasks' }"
      class="flex-grow space-y-2 md:p-4"
      v-model="items"
      item-key="id">
      <template #item="{ element }">
        <task :title="element.title" :item="element" :items="element.items" />
      </template>
    </draggable>
    <editor @title-changed="addItem" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Task from '~/components/task.vue';
import Editor from '~/components/editor.vue';
import Draggable from 'vuedraggable';
const items = ref<any[]>([]);
function addItem(title: string) {
  if (!title) return;
  items.value.push({
    id: items.value.length + 1,
    title,
    completed: false,
  });
}
</script>
