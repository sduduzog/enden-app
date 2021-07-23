<template>
  <dumb-centered-wrapper> {{ item }} </dumb-centered-wrapper>
</template>
<script setup lang="ts">
import DumbCenteredWrapper from '/@/components/dumb-centered-wrapper.vue';

interface Props {
  item?: string;
}

const props = withDefaults(defineProps<Props>(), {
  item: '',
});
</script>
