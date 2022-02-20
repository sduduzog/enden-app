<template>
  <header class="w-full p-1 md:p-8">
    <div
      class="grid gap-x-2 md:gap-x-4 grid-cols-[auto_1fr_auto] items-center p-2 bg-white rounded-md shadow-md md:p-4 md:rounded-xl">
      <button class="p-2 rounded-md opacity-20">
        <arrow-left-icon :size="16" :stroke-width="3" />
      </button>
      <div class="grid text-sm truncate text-ellipsis">
        <span class="max-w-4xl truncate"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          accusantium libero magni repellendus facere nostrum dignissimos.
          Magni, consequatur. Iure eligendi sapiente eaque culpa eius
          dignissimos nisi quos, laboriosam laudantium optio.</span
        >
        <span class="font-bold">R45</span>
      </div>
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
                <button class="flex w-full p-2 text-sm rounded-md">
                  move up
                </button></menu-item
              >
              <menu-item v-slot="{ active }">
                <button
                  class="flex w-full p-2 text-sm rounded-md"
                  @click="signOut"
                  :class="[
                    active ? 'bg-rose-400 text-white' : 'text-gray-900 ',
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
import { Menu as MenuIcon, ArrowLeft as ArrowLeftIcon } from 'lucide-vue-next';

const auth = useSupabaseAuth();
function signOut() {
  auth.signOut();
}
</script>
