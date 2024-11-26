<template>
  <header class="fixed lg:px-12 z-50 transition-colors duration-300 w-full">
    <nav class="pl-6 flex gap-6 justify-between items-center mx-auto max-w-5xl">
      <div class="text-2xl font-bold text-secondary">
        <h1>Nail</h1>
      </div>

      <!-- Desktop Navigation -->
      <ul class="flex gap-6 max-lg:hidden">
        <NavLink
          url="/service"
          label="Service" />
        <NavLink
          url="/gallery"
          label="Gallery" />
      </ul>

      <!-- Mobile Menu Toggle -->
      <button
        class="lg:hidden flex flex-col gap-1.5 px-4 py-4 bg-black rounded-bl-lg"
        aria-label="Toggle menu">
        <span class="w-6 h-0.5 bg-white transition-all duration-300"></span>
        <span class="w-6 h-0.5 bg-white transition-all duration-300"></span>
        <span class="w-6 h-0.5 bg-white transition-all duration-300"></span>
      </button>
    </nav>
  </header>
</template>

<script setup>
import NavLink from '@/components/ui/NavLink.vue';
</script>
