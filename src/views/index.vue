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
        md:min-h-full md:max-w-screen-md
        bg-white
        p-8
        pt-16
        md:pt-20
        space-y-8
        md:space-y-8
      "
    >
      <h1 class="text-3xl font-bold text-fuchsia-600 py-8">
        enden? {{ session }}
      </h1>
      <h1
        class="
          text-6xl
          font-black
          text-transparent
          bg-gradient-to-r bg-clip-text
          py-2
        "
      >
        Manage tasks with your budget in mind.
      </h1>
      <button
        style="background-color: rgb(29, 161, 242)"
        class="
          rounded-md
          text-white
          p-2
          px-4
          flex
          space-x-3
          items-center
          hover:opacity-80
        "
        :class="{ 'grayscale opacity-40': loginDisabled }"
        :disabled="loginDisabled"
        @click="signInWithTwitter"
      >
        <twitter-logo class="w-6" />
        <span>Sign-In with Twitter</span>
      </button>
    </div>
    <div class="hidden flex-grow">food</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useSupabaseAuth } from 'vue-supabase';
import twitterLogo from '~/components/twitter-logo.vue';
import { useSession } from '~/composables/session';

export default defineComponent({
  components: { twitterLogo },
  setup() {
    const router = useRouter();
    const auth = useSupabaseAuth();
    const { session } = useSession();
    const loginDisabled = computed(() => typeof session.value === 'undefined');
    watchEffect(() => {
      router.push({ name: 'Home' });
    });
    function signInWithTwitter() {
      auth.signIn({ provider: 'twitter' });
    }
    return { session, loginDisabled, signInWithTwitter };
  },
});
</script>
