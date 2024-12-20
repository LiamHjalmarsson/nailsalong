<template>
  <div class="w-full h-screen relative mb-24">
    <div class="h-4/5 shadow">
      <div class="relative h-full w-full flex justify-center items-center">
        <div class="w-full h-full bg-black">
          <NuxtImg
            src="/images/s.jpg"
            class="object-cover h-full w-full opacity-80"
            alt="Red Background Image" />
        </div>

        <div class="absolute w-full max-w-4xl">
          <div
            class="p-6 rounded text-center flex flex-col gap-6 justify-center items-center text-neutral-white">
            <h1 class="text-7xl font-extrabold text-center tracking-wide">
              NAIL PROJECT
            </h1>
            <h2 class="text-4xl font-semibold tracking-wide">
              Enjoy the latest nail fashion
            </h2>

            <div class="w-1/3 flex">
              <NuxtLink
                to="booking"
                class="py-3 rounded-lg overflow-hidden group w-full px-6 z-10 bg-primary text-center relative transition duration-300 focus:scale-110">
                <span
                  class="group-hover:w-1/2 h-full rounded-l-lg rounded-br-full left-0 bg-primary-hover absolute top-0 w-0 transition-all duration-300 group-active:bg-primary-active group-active:w-full group-focus:w-full group-active:rounded-br-lg group-focus:rounded-br-lg group-focus:bg-primary-focus"></span>
                <span class="relative z-10 tracking-wide font-bold">
                  BOOK A TIME
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="-mt-12 w-full left-0 z-10 relative">
        <div class="mx-auto max-w-5xl flex gap-12">
          <IconCard
            icon="mdi-nail"
            title="Nail Care"
            description="Achieve impeccable nails with a smooth, shiny finish that lasts."
            class="scale-95 bg-secondary-disabled" />

          <IconCard
            icon="mdi-sparkles"
            title="Nail Art"
            description="Indulge in our premium treatments for nails that radiate elegance and beauty."
            class="scale-110 bg-secondary-disabled" />

          <IconCard
            icon="mdi-flower"
            title="Tips & Trends"
            description="Express your unique style with personalized nail art created just for you."
            class="scale-95 bg-secondary-disabled" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconCard from './IconCard.vue';
</script>
