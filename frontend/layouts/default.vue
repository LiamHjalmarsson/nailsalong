<template>
  <div class="relative text-neutral bg-neutral-white">
    <Header />

    <main>
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/layout/Header.vue';
import Footer from '~/components/layout/Footer.vue';
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
