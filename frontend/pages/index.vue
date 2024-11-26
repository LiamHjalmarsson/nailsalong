<template>
  <div class="h-screen flex justify-center items-center px-6 font-noto">
    <div class="w-full h-1/2 relative flex gap-6 justify-center">
      <div class="bg-slate-900 relative h-full">
        <NuxtImg
          src="/images/red.jpg"
          class="object-cover h-full w-full" />
      </div>

      <div class="flex flex-col gap-4 max-w-[650px] p-2">
        <h3 class="text-6xl font-semibold tracking-wider">
          Shine & Stylis Nail Art
        </h3>

        <div class="relative">
          <button
            class="w-1/2 py-2 z-10 border-2 bg-white border-secondary text-center group relative active:scale-105 -translate-x-1 hover:translate-x-0 -translate-y-1 hover:translate-y-0 transition duration-300">
            <span
              class="group-hover:w-1/2 h-full left-0 bg-secondary absolute top-0 w-0 transition-all duration-300"></span>
            <span class="relative z-10 tracking-wide font-semibold">
              BOOK A TIME
            </span>
            <span
              class="absolute bg-slate-100 w-0 h-full top-0 right-0 transition-all duration-300 ease-in-out group-hover:w-1/2"></span>
          </button>
          <span
            class="border-2 border-transparent absolute w-1/2 h-full left-0 shadow shadow-secondary"></span>
        </div>
      </div>
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
