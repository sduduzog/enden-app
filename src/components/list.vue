<template>
  <list-item v-for="item in items" :key="item" :item="item" />
</template>
<script setup lang="ts">
import { computed } from '@vue/runtime-core';
import ListItem from '/@/components/list-item.vue';
interface Props {
  items: Array<string>;
}
const props = withDefaults(defineProps<Props>(), {
  items: () => [],
});
const items = computed(() => props.items);
</script>
