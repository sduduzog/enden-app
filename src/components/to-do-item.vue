<template>
  <div class="flex items-start group space-x-2">
    <button class="p-0.5">
      <svg
        v-if="!checked"
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
        stroke-width="2"
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
      class="flex-grow font-medium"
      :class="checked ? 'opacity-50 line-through' : ''"
    >
      {{ name }}
    </span>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';

type ToDoType = {
  name: string;
  checked: boolean;
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
    const checked = computed(() => props.item?.checked);
    return { name, checked };
  },
});
</script>
