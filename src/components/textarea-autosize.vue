<template>
  <textarea
    class="outline-none"
    :value="modelValue"
    ref="cTextarea"
    :rows="rows"
    @input="handleInput"></textarea>
</template>
<script lang="ts">
import { defineComponent, ref, watch, nextTick, watchEffect } from 'vue';
export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: undefined,
    },
  },
  setup(props, { emit }) {
    const cTextarea = ref<HTMLTextAreaElement>();
    const rows = ref(1);
    watch(
      () => props.modelValue,
      async () => {
        if (!cTextarea.value) {
          return;
        }
        rows.value = 1;
        await nextTick();
        const paddingTopString = window
          .getComputedStyle(cTextarea.value)
          .paddingTop.replace('px', '');
        const lineHeightString = window
          .getComputedStyle(cTextarea.value)
          .lineHeight.replace('px', '');
        const lineHeight = Number(lineHeightString);
        const paddingTop = Number(paddingTopString);
        const offset = paddingTop * 2;
        const scrollHeight = cTextarea.value.scrollHeight - offset;
        const newRows = scrollHeight / lineHeight;
        rows.value = newRows;
      }
    );
    function handleInput(inputEvent: Event) {
      const target = inputEvent.target as HTMLTextAreaElement;
      emit('update:modelValue', target.value);
    }
    return { rows, cTextarea, handleInput };
  },
});
</script>
