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
        const lineHeightString = window
          .getComputedStyle(cTextarea.value)
          .lineHeight.replace('px', '');
        const paddingTopString = window.getComputedStyle(
          cTextarea.value
        ).paddingTop;
        const paddingBottomString = window.getComputedStyle(
          cTextarea.value
        ).paddingBottom;
        const paddingTop = Number(paddingTopString.replace('px', ''));
        const paddingBottom = Number(paddingBottomString.replace('px', ''));
        const paddingY = paddingTop + paddingBottom;
        const lineHeight = Number(lineHeightString);
        const scrollHeight = cTextarea.value.scrollHeight - paddingY;
        console.log('paddingY', paddingY);
        console.log('lineHeight', lineHeight);
        console.log('scrollHeight', scrollHeight);
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
