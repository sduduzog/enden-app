<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToDoItem from './components/to-do-item.vue';

export default defineComponent({
  name: 'App',
  components: { ToDoItem },
  setup() {
    return {};
  },
});
</script>

<style type="text/css">
.st0 {
  fill: #1d9bf0;
}
</style>
