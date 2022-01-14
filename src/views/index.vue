<template>
  <div
    class="flex-row-reverse items-start min-h-screen bg-gradient-to-br md:bg-gradient-to-r to-indigo-400 from-fuchsia-400 via-rose-400 md:flex md:flex-wrap md:items-stretch">
    <div
      class="w-full min-h-screen p-8 space-y-8 bg-white md:min-h-full md:max-w-screen-md md:pt-20 md:space-y-8">
      <h1 class="py-8 text-3xl font-black text-fuchsia-600">enden?</h1>
      <h1
        class="py-2 text-6xl font-black text-transparent bg-gradient-to-r bg-clip-text">
        Manage tasks with your budget in mind.
      </h1>
      <div v-if="loading">
        <span class="inline-block p-2 px-4 font-medium text-center w-44">
          Loading...
        </span>
      </div>
      <button
        v-else
        style="background-color: rgb(29, 161, 242)"
        class="flex items-center p-2 px-4 space-x-3 overflow-hidden text-white rounded-md hover:opacity-80 w-60"
        :class="{ 'grayscale opacity-40': loginDisabled }"
        :disabled="loginDisabled"
        @click="signInWithTwitter">
        <twitter-logo class="w-6" />
        <span class="font-medium">Sign In with Twitter</span>
      </button>
      <div class="flex flex-wrap items-end w-80">
        <input
          type="text"
          class="p-2 bg-gray-100 rounded-md w-60"
          placeholder="Email address" />
        <input
          type="text"
          placeholder="Password"
          class="p-2 mt-4 bg-gray-100 rounded-md w-60" />
        <button class="ml-4 bg-fuchsia-500 text-white rounded-md p-2.5">
          <arrow-right-icon class="h-5" />
        </button>
      </div>
    </div>
    <div class="flex-grow hidden">food</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useSupabase } from 'vue-supabase';
import twitterLogo from '~/components/twitter-logo.vue';
import { useSession } from '~/composables/session';
import { ArrowRightIcon } from '@heroicons/vue/solid';

export default defineComponent({
  components: { twitterLogo, ArrowRightIcon },
  setup() {
    const router = useRouter();
    const auth = useSupabase().auth;
    const { session, loading } = useSession();
    const loginDisabled = computed(() => typeof session.value === 'undefined');
    watchEffect(() => {
      if (!session.value) {
        return;
      }
      router.push({ name: 'Home' });
    });
    function signInWithTwitter() {
      auth.signIn({ provider: 'twitter' });
    }
    return { session, loading, loginDisabled, signInWithTwitter };
  },
});
</script>
