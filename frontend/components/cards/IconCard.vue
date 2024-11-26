<template>
  <div class="flex gap-4 py-2 border-b pb-4 border-primary/20">
    <div
      class="p-2 bg-primary/20 h-fit rounded-full flex justify-center items-center">
      <Icon
        :name="icon"
        class="font-bold bg-secondary text-4xl" />
    </div>
    <div>
      <h3 class="text-xl font-semibold">{{ title }}</h3>
      <p class="text-gray-500 mt-2">{{ description }}</p>
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
