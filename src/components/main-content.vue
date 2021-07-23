<template>
  <toolbar />
  <list :items="[1, 2, 3, 4, 5, 6, 7, 8, 9]" />
  <div class="flex-1"></div>
  <editor />
</template>
<script setup lang="ts">
import Toolbar from '/@/components/toolbar.vue';
import List from '/@/components/list.vue';
import Editor from '/@/components/editor.vue';
</script>
