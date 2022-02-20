<template>
  <div
    class="flex flex-col flex-shrink-[.7] w-full max-w-screen-md bg-white rounded-md md:rounded-xl md:overflow-auto">
    <div class="flex-grow space-y-2 md:p-4">
      <task v-for="i in array2" :key="i" />
    </div>
    <editor />
  </div>
</template>
<script lang="ts" setup>
import Task from '~/components/task.vue';
import Editor from '~/components/editor.vue';
function rangeGenerator(start: number, end: number) {
  return Array.from({ length: end - start }, (_, i) => i + start);
}
const array2 = rangeGenerator(0, 3);
</script>
