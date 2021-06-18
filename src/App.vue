<template>
  <h1 class="py-8 text-3xl font-bold max-w-screen-sm mx-auto">Home</h1>
  <div class="p-4">
    <div class="relative p-4 bg-white max-w-2xl mx-auto space-y-2">
      <div
        class="flex items-start space-x-2"
        v-for="(item, i) of list"
        :key="i"
      >
        <button class="p-0.5" @click="item.checked = !item.checked">
          <svg
            v-if="!item.checked"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-square"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-check-square"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            ></path>
          </svg>
        </button>
        <span
          class="font-medium"
          :class="item.checked ? 'opacity-50 line-through' : ''"
        >
          {{ item.name }}
        </span>
      </div>
      <input
        type="text"
        class="sticky bottom-0 p-4 px-8 border w-full"
        placeholder="Enden?"
        @keyup.enter="addEntry"
        v-model="entry"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const list = ref<Array<{ checked: boolean; name: string }>>([]);
    const entry = ref<string>();
    function addEntry() {
      if (!entry.value) {
        return;
      }
      list.value.push({
        checked: false,
        name: entry.value,
      });
      entry.value = undefined;
    }
    return { list, entry, addEntry };
  },
});
</script>
