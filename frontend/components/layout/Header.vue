<template>
  <header class="absolute lg:px-12 transition-colors duration-300 w-full">
    <nav class="pl-6 flex gap-6 justify-between items-center mx-auto max-w-5xl">
      <div class="py-4 text-2xl font-bold text-secondary">
        <h1>Nail</h1>
      </div>

      <!-- Desktop Navigation -->
      <ul class="flex gap-6 max-lg:hidden">
        <NavLink
          url="/booking"
          label="Booking" />
      </ul>

      <!-- Mobile Navigation -->
      <Teleport to="body">
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

        <Transition
          enter-active-class="transition duration-300 delay-75"
          leave-active-class="transition duration-300"
          enter-from-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-from-class="translate-x-0"
          leave-to-class="-translate-x-full">
          <div
            v-show="menuOpen"
            class="fixed w-2/3 h-full flex top-0 z-50 bg-white flex-col">
            <h1 class="py-4 text-center w-full">Nail</h1>

            <ul class="w-full space-y-4 px-4">
              <NavLink
                url="/booking"
                label="Booking" />
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
