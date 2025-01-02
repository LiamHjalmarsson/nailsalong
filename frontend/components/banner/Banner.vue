<template>
  <div class="w-full h-screen relative mb-24">
    <div class="h-4/5 shadow">
      <div class="relative h-full w-full flex justify-center items-center">
        <div class="w-full h-full bg-black">
          <NuxtImg
            src="/images/s.png"
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
                class="group relative p-2 w-full">
                <div
                  class="py-3 overflow-hidden w-full px-6 z-10 bg-gradient-to-r from-accent to-accent-hover text-center relative transition duration-300 focus:scale-110">
                  <span
                    class="group-hover:w-full h-full delay-[600ms] left-0 bg-neutral absolute top-0 w-0 transition-all duration-300 origin-bottom-left group-active:bg-neutral"></span>

                  <span class="relative z-10 tracking-wide font-bold">
                    BOOK A TIME
                  </span>
                </div>

                <span
                  class="absolute left-0 bottom-0 w-full h-1 bg-accent scale-x-0 origin-right transition-transform duration-150 ease-out group-hover:scale-x-100 z-10"></span>

                <span
                  class="absolute right-0 top-0 h-full w-1 bg-accent scale-y-0 origin-top transition-transform duration-150 delay-150 ease-out group-hover:scale-y-100 z-10"></span>

                <span
                  class="absolute left-0 top-0 w-full h-1 bg-accent scale-x-0 origin-left transition-transform duration-150 delay-300 ease-out group-hover:scale-x-100 z-10"></span>

                <span
                  class="absolute left-0 top-0 h-full w-1 bg-accent scale-y-0 origin-bottom transition-transform duration-150 delay-[450ms] ease-out group-hover:scale-y-100 z-10"></span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="-mt-12 w-full left-0 z-10 relative px-12">
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
