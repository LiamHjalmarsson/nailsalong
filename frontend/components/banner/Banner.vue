<template>
  <div
    class="px-6 pt-20 flex flex-col relative h-screen justify-between pb-12 max-w-7xl w-fit max-h-[1000px]">
    <div class="relative flex z-10 flex-1 grow max-h-[600px]">
      <div class="shadow-xl w-full rounded-xl overflow-hidden h-full">
        <NuxtImg
          src="/images/red.jpg"
          class="object-cover h-full w-full" />
        <NuxtImg
          src="/images/banner.jpg"
          class="object-cover absolute -bottom-4 md:-bottom-12 -right-4 z-10 w-1/2 h-1/3 rounded-xl shadow-secondary" />
      </div>
    </div>

    <div class="flex flex-col justify-end gap-4 mt-8">
      <h3
        class="text-5xl sm:text-6xl font-bold tracking-widest uppercase text-secondary drop-shadow-lg">
        Lustre & Grace
      </h3>

      <p class="text-gray-500 mb-2">
        Elevate your style with the perfect blend of artistry and elegance.
      </p>

      <div class="relative sm:w-1/2 w-full flex">
        <NuxtLink
          to="booking"
          class="py-2 rounded-xl w-full px-6 z-10 border-2 bg-white border-secondary text-center group relative active:scale-110 -translate-x-1 hover:translate-x-0 -translate-y-1 hover:translate-y-0 transition duration-300 focus:scale-110 focus:translate-x-0 focus:translate-y-0">
          <span
            class="group-hover:w-1/2 h-full rounded-lg left-0 bg-secondary absolute top-0 w-0 transition-all duration-300 group-active:w-full group-focus:w-full"></span>
          <span
            class="relative text-secondary z-10 tracking-wide font-bold group-focus:text-white">
            BOOK A TIME
          </span>
        </NuxtLink>
        <span
          class="border-2 py-2 border-transparent rounded-xl absolute h-full w-full left-0 shadow shadow-secondary"></span>
      </div>
    </div>
  </div>
</template>
