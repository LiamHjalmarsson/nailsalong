<template>
  <div class="min-h-screen flex flex-col justify-between relative">
    <Header />
    <main class="flex-1 flex flex-col">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/layout/Header.vue';
import Footer from '~/components/layout/Footer.vue';
</script>
