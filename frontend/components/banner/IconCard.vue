<template>
  <div class="p-4 shadow flex-1 rounded-md relative group">
    <div
      class="absolute w-full h-full top-0 left-0 group-hover:opacity-15 opacity-0 duration-300 transition">
      <NuxtImg
        src="/images/background.png"
        class="object-cover h-full w-full"
        alt="Red Background Image" />
    </div>
    <div
      class="flex gap-4 py-4 flex-col text-center justify-center items-center px-8 relative z-10">
      <h3 class="text-xl font-semibold">{{ title }}</h3>
      <p class="text-neutral-darkGray mt-2">{{ description }}</p>
      <div
        class="mt-2 p-2 shadow-sm shadow-accent rounded-full bg-accent text-white flex justify-center items-center">
        <Icon
          :name="icon"
          class="font-bold text-5xl" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
