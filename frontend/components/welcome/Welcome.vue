<template>
  <div
    class="h-[50vh] w-full flex justify-center items-center bg-background py-8 mb-24 relative">
    <NuxtImg
      src="/images/background.png"
      class="object-cover h-full w-full absolute opacity-15"
      alt="Red Background Image" />

    <div
      class="max-w-7xl grid grid-cols-2 grid-rows-2 gap-8 h-full relative z-10">
      <div class="row-span-2 overflow-hidden rounded-lg shadow-lg">
        <NuxtImg
          src="/images/me.png"
          class="object-cover h-full w-full"
          alt="Image description for accessibility" />
      </div>

      <div class="flex items-center">
        <Heading
          title="Camille at"
          subTitle="This is me">
          <p class="text-gray-700 leading-relaxed mt-8">
            Step into a world of elegance and style. At
            <span class="text-primary font-bold">My Nail Salon</span>, we blend
            artistry with precision to bring your nail dreams to life. From
            timeless classics to bold modern designs, every detail is crafted
            with care. Relax, unwind, and let us pamper you with luxury
            treatments that leave you feeling radiant and refreshed.
          </p>
        </Heading>
      </div>

      <div class="rounded-lg shadow-lg h-[130%]">
        <NuxtImg
          src="/images/clean.png"
          class="object-cover object-bottom h-full w-full rounded-lg"
          alt="Image description for accessibility" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading from '@/components/ui/Heading.vue';
</script>
