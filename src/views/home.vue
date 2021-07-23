<template>
  <main-content>
    <div class="flex-1">items</div>
    <div class="bg-blue-200">
      <input
        type="text"
        class="sticky bottom-0 p-4 px-8 w-full outline-none"
        placeholder="Enden?"
        @keyup.enter="addEntry"
        v-model="entry"
      />
    </div>
  </main-content>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import MainContent from '/@/components/main-content.vue';

export default defineComponent({
  setup() {
    return { addEntry: () => {}, entry: '' };
  },
  components: { MainContent },
});
</script>
