<template>
  <div class="w-full py-12 flex flex-col">
    <Heading
      title="Get Social Together"
      subTitle="Let us"
      class="max-w-3xl mx-auto text-center justify-center items-center">
    </Heading>

    <div class="max-w-7xl mx-auto my-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          class="relative group sm:col-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-xl shadow-xl">
          <NuxtImg
            src="/images/red.jpg"
            class="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500 relative z-10"
            alt="Gallery Image 1" />
        </div>

        <div class="relative group overflow-hidden rounded-xl shadow-xl">
          <NuxtImg
            src="/images/green.jpg"
            class="object-cover h-64 w-full group-hover:scale-105 transition-transform duration-500"
            alt="Gallery Image 2" />
        </div>

        <div class="relative group overflow-hidden rounded-xl shadow-xl">
          <NuxtImg
            src="/images/hand.jpg"
            class="object-cover h-64 w-full group-hover:scale-105 transition-transform duration-500"
            alt="Gallery Image 3" />
        </div>

        <div
          class="relative group sm:col-span-2 lg:col-span-2 overflow-hidden rounded-xl shadow-xl">
          <NuxtImg
            src="/images/banner.jpg"
            class="object-cover h-64 w-full group-hover:scale-105 transition-transform duration-500"
            alt="Gallery Image 4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading from '@/components/ui/Heading.vue';
</script>
