<template>
  <div
    class="flex flex-col flex-shrink-[.7] w-full max-w-screen-md bg-white rounded-md md:rounded-xl md:overflow-auto">
    <div class="flex-grow space-y-2 md:p-4">
      <task
        v-for="i in items"
        :key="i.id"
        :id="i.id"
        :title="i.title"
        :complete="i.completed" />
    </div>
    <editor @title-changed="addItem" />
  </div>
</template>
<script lang="ts" setup>
import Task from '~/components/task.vue';
import Editor from '~/components/editor.vue';
import { ref } from 'vue';
const items = ref<any>([]);
function addItem(title: string) {
  if (!title) return;
  items.value.push({
    id: items.value.length + 1,
    title,
    completed: false,
  });
}
</script>
