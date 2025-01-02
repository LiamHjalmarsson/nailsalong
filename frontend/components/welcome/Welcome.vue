<template>
  <div
    class="lg:h-[50vh] lg:max-h-[700px] w-full flex justify-center items-center bg-background p-6 lg:p-12 mb-24 relative">
    <NuxtImg
      src="/images/background.png"
      class="object-cover h-full w-full absolute opacity-15"
      alt="Red Background Image" />

    <div
      class="max-w-7xl lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-12 h-full relative z-10">
      <div class="row-span-2 overflow-hidden shadow-lg max-lg:mb-12">
        <NuxtImg
          src="/images/me.png"
          class="object-cover h-full w-full"
          alt="Image description for accessibility" />
      </div>

      <div class="flex items-center">
        <Heading
          title="Camille at"
          subTitle="This is me">
          <p class="text-neutral-darkGray leading-relaxed mt-3">
            Step into a world of elegance and style. At
            <span class="text-primary font-bold">My Nail Salon</span>, we blend
            artistry with precision to bring your nail dreams to life. From
            timeless classics to bold modern designs, every detail is crafted
            with care. Relax, unwind, and let us pamper you with luxury
            treatments that leave you feeling radiant and refreshed.
          </p>
        </Heading>
      </div>

      <div class="max-lg:mt-12">
        <NuxtImg
          src="/images/clean.png"
          class="object-cover object-bottom h-64 lg:h-full w-full"
          alt="Image description for accessibility" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading from '@/components/ui/Heading.vue';
</script>
