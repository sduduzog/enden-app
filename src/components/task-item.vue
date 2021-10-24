<template>
  <div
    tabindex="0"
    class="
      lg:mx-0
      p-2
      hover:bg-gray-100
      focus:bg-gray-100
      focus-within:bg-gray-100
      text-gray-700
      rounded-md
      outline-none
      flex
      items-start
      space-x-2
      group
    "
    :class="{ 'text-gray-400': complete }">
    <button
      class="
        rounded-md
        p-1
        outline-none
        md:opacity-0
        group-focus:opacity-100
        focus:opacity-100
        group-hover:opacity-100
        focus:bg-gray-200 focus:ring-2 focus:ring-gray-300
        active:bg-gray-300 active:text-white
        disabled:text-transparent
      "
      :disabled="editing">
      <minus-icon v-if="complete" class="h-5" />
      <check-icon v-else class="h-5" />
    </button>
    <textarea-autosize
      v-model="pickedOutText"
      v-if="editing"
      @keydown.enter.prevent
      class="flex-grow resize-none text-sm py-1 bg-transparent" />
    <span
      v-else
      :class="complete ? 'line-through' : ''"
      class="flex-grow py-1 font-medium text-sm">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ab
      fugiat nesciunt.
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { CheckIcon, MinusIcon } from '@heroicons/vue/solid';
import TextareaAutosize from '~/components/textarea-autosize.vue';

export default defineComponent({
  components: { CheckIcon, MinusIcon, TextareaAutosize },
  setup() {
    const pickedOutText = ref();
    const editing = ref(false);
    const complete = ref(true);
    return { pickedOutText, editing, complete };
  },
});
</script>
