<template>
  <div>{{ name }}</div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

type ToDoType = {
  name: string;
};
const ToDoPropType: PropType<ToDoType> = Object;
export default defineComponent({
  props: {
    item: {
      type: ToDoPropType,
      default: undefined,
    },
  },
  setup(props) {
    const name = ref(props.item?.name);
    return { name };
  },
});
</script>
