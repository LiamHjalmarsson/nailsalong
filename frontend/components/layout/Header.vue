<template>
  <header
    class="fixed py-6 px-12 z-50 transition-colors duration-300 shadow w-full">
    <nav class="flex gap-6 justify-between items-center mx-auto max-w-3xl">
      <h3>Header</h3>

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
          class="px-6 py-2 bg-primary rounded-md shadow hover:bg-primary-hover transition duration-150 text-white font-semibold tracking-wider relative before:w-1/2 before:bg-primary-active before:z-20 after:w-1/2 after:bg-primary-active after:z-20">
          Book
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import NavLink from '@/components/ui/NavLink.vue';
</script>
