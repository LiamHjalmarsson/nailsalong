<template>
  <div class="p-4 shadow relative group rounded-md flex overflow-hidden">
    <div
      class="absolute w-full h-full top-0 left-0 opacity-15 group-hover:opacity-50 rounded-md duration-300 transition">
      <!-- <NuxtImg
        src="/images/hand.png"
        class="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
        alt="Gallery Image 1" /> -->
      <!-- <video
        class="h-full w-full object-cover"
        autoplay
        loop
        muted>
        <source
          src="/videos/bg.mp4"
          type="video/webm" />
      </video> -->
    </div>
    <div
      class="flex flex-1 gap-4 py-4 flex-col text-center justify-center items-center px-8 relative z-10 group overflow-hidden">
      <h3 class="text-xl font-semibold">{{ title }}</h3>
      <p class="text-neutral-darkGray mt-2 cursor-default">{{ description }}</p>
      <div
        class="mt-2 p-2 border rounded-full text-accent border-accent flex justify-center items-center duration-300 ease-in-out relative">
        <Icon
          :name="icon"
          class="font-bold text-5xl z-10" />
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
