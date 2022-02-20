<template>
  <header class="w-full p-1 md:p-8">
    <div
      class="flex justify-end p-2 bg-white rounded-md shadow-md md:p-4 md:rounded-xl">
      <Menu as="div" class="relative inline-block text-left">
        <menu-button
          class="p-2 bg-opacity-0 rounded-md bg-rose-500 hover:bg-opacity-20 text-rose-500">
          <menu-icon :size="20" :stroke-width="3" />
        </menu-button>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0">
          <menu-items
            class="absolute right-0 w-56 mt-2 bg-white rounded-md shadow-lg focus:outline-none">
            <div class="p-1">
              <menu-item v-slot="{ active }">
                <button
                  @click="signOut"
                  :class="[
                    active ? 'bg-rose-500 text-white' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                  ]">
                  sign out
                </button>
              </menu-item>
            </div>
          </menu-items>
        </transition>
      </Menu>
    </div>
  </header>
  <main class="flex justify-center p-1 md:overflow-hidden md:p-8 md:space-x-8">
    <slot></slot>
  </main>
</template>
<script lang="ts" setup>
import { useSupabaseAuth } from 'vue-supabase';
import { MenuButton, Menu, MenuItems, MenuItem } from '@headlessui/vue';
import { Menu as MenuIcon } from 'lucide-vue-next';

const auth = useSupabaseAuth();
function signOut() {
  auth.signOut();
}
</script>
