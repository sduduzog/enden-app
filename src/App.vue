<template>
  <div class="p-4" v-if="signedIn">
    <div class="flex justify-between items-center max-w-screen-sm mx-auto">
      <h1 class="p-4 py-8 text-xl font-semibold">Enden?</h1>
      <nav>
        <button class="hover:bg-gray-100 p-2 px-4 rounded-md" @click="signOut">
          Sign out
        </button>
      </nav>
    </div>
    <div class="relative p-4 bg-white max-w-2xl mx-auto space-y-2">
      <div
        class="flex items-start group space-x-2"
        v-for="(item, i) of list"
        :key="i"
      >
        <button class="p-0.5" @click="item.checked = !item.checked">
          <svg
            v-if="!item.checked"
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
          :class="item.checked ? 'opacity-50 line-through' : ''"
        >
          {{ item.name }}
        </span>
        <div class="p-0.5 opacity-30 group-hover:opacity-70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-maximize-2"
          >
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        </div>
      </div>
      <input
        type="text"
        class="sticky bottom-0 p-4 px-8 border w-full"
        placeholder="Enden?"
        @keyup.enter="addEntry"
        v-model="entry"
      />
    </div>
  </div>
  <div
    v-else
    class="
      flex
      justify-center
      items-center
      min-h-screen
      flex-wrap
      border
      rounded-lg
    "
  >
    <div class="p-12 space-y-8">
      <h2 class="flex-grow w-full text-center text-lg font-medium">
        Sign in to Continue
      </h2>
      <button
        class="flex p-4 px-8 border rounded-md space-x-4"
        @click="signInViaTwitter"
      >
        <svg
          version="1.1"
          id="Logo"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          height="28px"
          width="28px"
          x="0px"
          y="0px"
          viewBox="0 0 248 204"
          style="enable-background: new 0 0 248 204"
          xml:space="preserve"
        >
          <g id="Logo_1_">
            <path
              id="white_background"
              class="st0"
              d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
            />
          </g>
        </svg>
        <span> Sign in with Twitter </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

function useSupabaseAuth(supabase: SupabaseClient) {
  const signedIn = ref(false);

  supabase.auth.onAuthStateChange((_, session) => {
    signedIn.value = session !== null;
  });
  async function signInViaTwitter() {
    await supabase.auth.signIn(
      {
        provider: 'twitter',
      },
      {
        redirectTo: window.location.origin,
      }
    );
  }
  function signOut() {
    supabase.auth.signOut();
  }

  return { signedIn, signInViaTwitter, signOut };
}

export default defineComponent({
  name: 'App',
  setup() {
    const options = {};
    const list = ref<Array<{ checked: boolean; name: string }>>([]);
    const entry = ref<string>();
    const supabase = createClient(
      'https://glcenwzasztexldnfmud.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNDAzMzE5MCwiZXhwIjoxOTM5NjA5MTkwfQ.Pfzgv4VIMs2_Wm5okKXzsgIbGJ4ROXtPDiecpHmnOUw',
      options
    );

    supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        fetchData();
      }
    });

    async function fetchData() {
      const { data: tasks, error } = await supabase.from('tasks').select('*');
      if (error) {
        console.error(error);
        return;
      }
      console.log(tasks);
    }

    function addEntry() {
      if (!entry.value) {
        return;
      }
      list.value.push({
        checked: false,
        name: entry.value,
      });
      entry.value = undefined;
    }

    return { list, entry, addEntry, ...useSupabaseAuth(supabase) };
  },
});
</script>

<style type="text/css">
.st0 {
  fill: #1d9bf0;
}
</style>
