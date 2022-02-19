<template>
  <div
    class="grid min-h-screen grid-rows-[auto_1fr] to-indigo-400 from-fuchsia-400 via-rose-400 bg-gradient-to-br overflow-hidden max-h-screen">
    <router-view />
  </div>
  <div
    v-if="!session"
    class="fixed inset-0 z-50 flex flex-row-reverse backdrop-blur-lg">
    <div class="w-full p-8 space-y-8 bg-white sm:max-w-screen-sm">
      <h1 class="py-8 text-3xl font-black text-fuchsia-600">enden?</h1>
      <h1
        class="py-2 text-6xl font-black text-transparent bg-gradient-to-r bg-clip-text from-fuchsia-400 to-indigo-400 via-rose-400">
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
          <log-in-icon :size="18" :stroke-width="3" />
        </button>
      </div>
    </div>
  </div>
</template>

<style type="text/css">
.st0 {
  fill: #1d9bf0;
}
</style>
<script lang="ts" setup>
import TwitterLogo from '~/components/twitter-logo.vue';
import { useOnAuthStateChange, useSupabaseAuth } from 'vue-supabase';
import { useSession } from '~/composables/session';
import { LogIn as LogInIcon } from 'lucide-vue-next';
const loading = false;
const loginDisabled = false;
const auth = useSupabaseAuth();
const { session } = useSession();
useOnAuthStateChange((_, _session) => {
  session.value = _session;
});
function signInWithTwitter() {
  auth.signIn({ provider: 'twitter' });
}
function signOut() {
  auth.signOut();
}
</script>
