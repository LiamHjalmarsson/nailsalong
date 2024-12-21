<template>
  <div class="w-full py-12 flex flex-col">
    <Heading
      title="Get Social Together"
      subTitle="Let us"
      class="max-w-3xl mx-auto text-center justify-center items-center">
    </Heading>

    <div class="my-12 max-w-7xl mx-auto">
      <div class="max-h-96 flex gap-4">
        <div
          class="relative flex-1 group overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:flex-[2]">
          <NuxtImg
            src="/images/hand.png"
            class="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
            alt="Gallery Image 1" />
        </div>

        <div
          class="relative flex-1 group overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:flex-[2]">
          <NuxtImg
            src="/images/nails.png"
            class="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
            alt="Gallery Image 2" />
        </div>

        <div
          class="relative flex-1 group overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:flex-[2]">
          <NuxtImg
            src="/images/style.png"
            class="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
            alt="Gallery Image 3" />
        </div>

        <div
          class="relative flex-1 group overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:flex-[2]">
          <NuxtImg
            src="/images/s.png"
            class="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
            alt="Gallery Image 3" />
        </div>
      </div>
    </div>

    <!-- <div class="max-w-7xl mx-auto my-12">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-[400px]">
        <div
          class="relative group sm:col-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-xl shadow-xl h-full">
          <NuxtImg
            src="/images/s.png"
            class="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500 relative z-10"
            alt="Gallery Image 1" />
        </div>

        <div class="relative group overflow-hidden rounded-xl shadow-xl">
          <NuxtImg
            src="/images/green.png"
            class="object-cover max-h-64 h-full w-full group-hover:scale-105 transition-transform duration-500"
            alt="Gallery Image 2" />
        </div>

        <div class="relative group overflow-hidden rounded-xl shadow-xl">
          <NuxtImg
            src="/images/hand.png"
            class="object-cover max-h-64 h-full w-full group-hover:scale-105 transition-transform duration-500"
            alt="Gallery Image 3" />
        </div>

        <div
          class="relative group sm:col-span-2 lg:col-span-2 overflow-hidden rounded-xl shadow-xl">
          <NuxtImg
            src="/images/nails.png"
            class="object-cover max-h-64 h-full w-full group-hover:scale-105 transition-transform duration-500"
            alt="Gallery Image 4" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import Heading from '@/components/ui/Heading.vue';
</script>
