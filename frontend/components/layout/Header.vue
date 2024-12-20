<template>
  <header class="absolute top-0 z-40">
    <nav class="pl-6 flex gap-6 justify-between items-center mx-auto">
      <NuxtLink
        to="/"
        class="flex gap-4 py-4 items-center justify-center">
        <span
          class="h-12 w-12 border-accent border-2 flex p-1 rotate-45 rounded-md">
          <span
            class="h-full w-full border-accent border-2 flex justify-center items-center rounded-md">
            <span class="-rotate-45"> C </span>
          </span>
        </span>
        <span class="text-4xl font-bold">Nail</span>
      </NuxtLink>

      <Sidebar
        v-model="menu"
        @closed="toggle" />

      <button
        class="flex flex-col top-0 gap-1.5 px-4 py-4 bg-accent transition duration-300 hover:bg-accent-hover rounded-bl-lg fixed z-50 right-0 max-h-[72px] h-full justify-center"
        aria-label="Toggle menu"
        :aria-expanded="menu"
        @click="toggle">
        <span
          :class="[
            'w-6 h-0.5 bg-white transition-all duration-200',
            menu ? ' rotate-45 translate-y-2' : 'rotate-0 translate-y-0',
          ]"></span>
        <span
          :class="[
            'w-4 h-0.5 bg-white transition-all duration-150 ',
            menu ? ' translate-x-[300%]' : 'translate-x-0',
          ]"></span>
        <span
          :class="[
            'w-6 h-0.5 bg-white transition-all duration-200',
            menu ? ' -rotate-45 -translate-y-2' : 'translate-x-0',
          ]"></span>
      </button>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';

let menu = ref(false);

const toggle = () => {
  menu.value = !menu.value;
};
</script>
