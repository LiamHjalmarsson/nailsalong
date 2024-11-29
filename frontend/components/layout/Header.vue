<template>
  <header class="absolute lg:px-12 transition-colors duration-300 w-full">
    <nav class="pl-6 flex gap-6 justify-between items-center mx-auto max-w-5xl">
      <NuxtLink to="/">
        <h1 class="py-4 text-3xl font-bold text-secondary font-vibes">Nail</h1>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <ul class="flex gap-6 max-lg:hidden">
        <NavLink
          url="/booking"
          label="Booking" />
      </ul>

      <!-- Mobile Navigation -->
      <Teleport to="body">
        <!-- Overlay -->
        <Transition
          enter-active-class="transition-opacity duration-300"
          leave-active-class="transition-opacity duration-300 delay-75"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0">
          <div
            v-show="menuOpen"
            @click="menuOpen = false"
            class="fixed top-0 left-0 w-full h-full bg-black/60 z-40"></div>
        </Transition>

        <!-- Sidebar -->
        <Transition
          enter-active-class="transition duration-300 delay-75"
          leave-active-class="transition duration-300"
          enter-from-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-from-class="translate-x-0"
          leave-to-class="-translate-x-full"
          :duration="1400">
          <div
            v-show="menuOpen"
            class="fixed w-2/3 h-full flex top-0 z-50 bg-white flex-col justify-between items-center">
            <div class="pt-6 h-1/3"></div>

            <ul
              class="space-y-4 px-4 w-full h-1/3 flex justify-center items-center">
              <NavLink
                url="/booking"
                label="Booking"
                class="w-full"
                @close="menuOpen = false" />
            </ul>

            <ul class="pb-6 h-1/3 flex justify-end items-end flex-col">
              <!-- <li
                class="p-1 bg-secondary rounded-full w-10 h-10 flex justify-center items-center">
                <Icon
                  name="streamline:instagram"
                  class="text-2xl bg-white" />
              </li>
              <li
                class="p-1 bg-secondary rounded-full w-10 h-10 flex justify-center items-center mt-2">
                <Icon
                  name="mdi:gmail"
                  class="text-2xl bg-white" />
              </li> -->
            </ul>
          </div>
        </Transition>
      </Teleport>

      <!-- Mobile Menu Toggle -->
      <button
        class="lg:hidden flex flex-col top-0 gap-1.5 px-4 py-4 bg-secondary rounded-bl-lg fixed z-50 right-0"
        aria-label="Toggle menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen">
        <span
          :class="[
            'w-6 h-0.5 bg-white transition-all duration-200',
            menuOpen ? ' rotate-45 translate-y-2' : 'rotate-0 translate-y-0',
          ]"></span>
        <span
          :class="[
            'w-4 h-0.5 bg-white transition-all duration-150 ',
            menuOpen ? ' translate-x-[300%]' : 'translate-x-0',
          ]"></span>
        <span
          :class="[
            'w-6 h-0.5 bg-white transition-all duration-200',
            menuOpen ? ' -rotate-45 -translate-y-2' : 'translate-x-0',
          ]"></span>
      </button>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import NavLink from '@/components/ui/NavLink.vue';

const menuOpen = ref(false);
</script>
