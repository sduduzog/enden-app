<template>
  <div class="">
    <div class="border">Cheese</div>
  </div>
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
