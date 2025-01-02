<template>
  <div class="w-full p-6 lg:p-12 flex flex-col">
    <Heading
      title="Get Social Together"
      subTitle="Let us"
      class="max-w-3xl mx-auto text-center justify-center items-center">
    </Heading>

    <div class="my-12 max-w-7xl mx-auto">
      <div class="lg:max-h-72 flex max-lg:flex-col gap-12 lg:gap-3">
        <div
          class="relative flex-1 group overflow-hidden shadow-xl transition-all duration-500 hover:flex-[2] max-h-80">
          <NuxtImg
            src="/images/hand.png"
            class="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
            alt="Gallery Image 1" />
        </div>

        <div
          class="relative flex-1 group overflow-hidden shadow-xl transition-all duration-500 hover:flex-[2] max-h-80">
          <NuxtImg
            src="/images/nails.png"
            class="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
            alt="Gallery Image 2" />
        </div>

        <div
          class="relative flex-1 group overflow-hidden shadow-xl transition-all duration-500 hover:flex-[2] max-h-80">
          <NuxtImg
            src="/images/style.png"
            class="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
            alt="Gallery Image 3" />
        </div>

        <div
          class="relative flex-1 group overflow-hidden shadow-xl transition-all duration-500 hover:flex-[2] max-h-80">
          <NuxtImg
            src="/images/s.png"
            class="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
            alt="Gallery Image 3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading from '@/components/ui/Heading.vue';
</script>
