<template>
  <div
    class="min-h-screen flex flex-col justify-between relative bg-secondary/10">
    <Header />

    <main class="flex-1 flex flex-col pb-6">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Header from '~/components/layout/Header.vue';
</script>
