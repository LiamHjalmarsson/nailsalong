<template>
  <div class="bg-slate-500 h-screen grid grid-cols-10 grid-rows-10">
    <div
      class="col-start-1 col-span-10 row-start-1 row-span-6 bg-slate-900"></div>

    <div class="col-start-1 col-span-10 row-span-4 flex">
      <div class="flex-1 bg-secondary h-full"></div>
      <div class="flex-1 bg-stone-600 h-full"></div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  name: 'TrialsShow',
});

useHead({
  title: 'Nails',
});

const { find } = useStrapi();
const response = await find('posts');
</script>
