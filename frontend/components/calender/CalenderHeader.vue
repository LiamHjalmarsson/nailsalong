<template>
  <div class="flex w-full items-center justify-between">
    <div
      class="flex justify-center items-center py-1 lg:py-2 px-2 lg:px-4 border rounded-md h-full hover:bg-gray-100"
      @click="$emit('changeMonth', 'prev')">
      <Icon
        name="mdi:chevron-left"
        class="text-3xl m-0 p-4" />
    </div>
    <div class="flex flex-col items-center">
      <h2 class="text-2xl">Januari</h2>
      <h2 class="">2024</h2>
    </div>
    <div
      @click="$emit('changeMonth', 'next')"
      class="flex justify-center items-center py-1 lg:py-2 px-2 lg:px-4 border rounded-md h-full">
      <Icon
        name="mdi:chevron-right"
        class="text-3xl" />
    </div>
  </div>
</template>
