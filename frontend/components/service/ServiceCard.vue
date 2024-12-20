<template>
  <div
    class="relative h-full flex flex-col gap-4 max-h-80 group rounded-2xl hover:scale-95 transition duration-500 shadow-lg">
    <div class="absolute top-0 left-0 p-8 pt-12 z-10 text-white">
      <h3 class="text-xl font-semibold">
        {{ subTitle }}
      </h3>
      <h2 class="text-4xl font-bold">
        {{ title }}
      </h2>
      <span
        class="block border-b-4 h-4 w-24 mt-2"
        :class="color" />
    </div>
    <div
      class="h-full w-full transition duration-500 rounded-lg overflow-hidden bg-black">
      <NuxtImg
        :src="image"
        class="object-cover h-full w-full opacity-70 group-hover:opacity-85 transition duration-500"
        alt="Service Image" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  subTitle: String,
  color: String,
});
</script>
