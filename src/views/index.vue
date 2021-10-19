<template>
  <div
    class="
      min-h-screen
      bg-gradient-to-br
      md:bg-gradient-to-r
      to-indigo-400
      from-fuchsia-400
      via-rose-400
      md:flex md:flex-wrap
      flex-row-reverse
      items-start
      md:items-stretch
    "
  >
    <div
      class="
        w-full
        min-h-screen
        md:min-h-full md:max-w-xl
        bg-white
        p-8
        pt-16
        md:pt-28
        space-y-8
        md:space-y-16
      "
    >
      <h1
        class="
          text-6xl
          font-black
          text-transparent
          bg-gradient-to-r bg-clip-text
        "
      >
        Manage tasks with your budget in mind.
      </h1>
      <button
        style="background-color: rgb(29, 161, 242)"
        class="rounded-md text-white p-2 px-4 flex space-x-3 items-center"
      >
        <twitter-logo class="w-6" />
        <span>Sign-In with Twitter</span>
      </button>
    </div>
    <div class="hidden flex-grow">food</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import twitterLogo from '~/components/twitter-logo.vue';

export default defineComponent({
  components: { twitterLogo },
});
</script>
