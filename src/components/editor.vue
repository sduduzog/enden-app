<template>
  <dumb-centered-wrapper
    class="
      mb-2
      sticky
      bottom-0
      p-4
      border
      w-full
      rounded
      focus-within:ring-2
      ring-gray-400
    "
  >
    <input type="text" class="w-full outline-none" placeholder="Enden?" />
  </dumb-centered-wrapper>
</template>
<script setup lang="ts">
import DumbCenteredWrapper from '/@/components/dumb-centered-wrapper.vue';
</script>
