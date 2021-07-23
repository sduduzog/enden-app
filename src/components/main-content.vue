<template>
  <toolbar />
  <list :items="['cheese', 'noodles', 'do not go together']" />
  <div class="p-4 flex flex-col min-h-screen border max-w-screen-md mx-auto">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import Toolbar from '/@/components/toolbar.vue';
import List from '/@/components/list.vue';
</script>
