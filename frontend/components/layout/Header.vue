<template>
  <header
    class="fixed py-6 px-12 z-50 transition-colors duration-300 shadow w-full">
    <nav class="flex gap-6 justify-between items-center mx-auto max-w-3xl">
      <div>
        <p class="flex items-center gap-2">
          <span class="text-2xl text-secondary">Nails</span>
          <span class="text-4xl text-secondary"> & </span>
          <span class="text-2xl text-secondary">Style</span>
        </p>
      </div>

      <ul class="flex gap-6">
        <NavLink
          url="/service"
          label="Service" />
        <NavLink
          url="/gallery"
          label="Gallery" />
      </ul>

      <div>
        <button
          class="px-6 py-2 bg-primary rounded-md shadow hover:bg-primary-hover transition duration-150 text-white font-semibold tracking-wider relative focus:ring-2 focus:ring-primary-focus">
          Book
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import NavLink from '@/components/ui/NavLink.vue';
</script>
