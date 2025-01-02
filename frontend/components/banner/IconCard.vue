<template>
  <div class="p-4 shadow relative group flex overflow-hidden">
    <div
      class="flex flex-1 py-4 flex-col text-center justify-center items-center px-8 relative z-10 group overflow-hidden">
      <h3 class="text-xl font-semibold mb-3">{{ title }}</h3>
      <p class="text-neutral-darkGray cursor-default mb-6">
        {{ description }}
      </p>
      <div
        class="mt-2 p-2 border-2 rounded-full text-accent border-accent flex justify-center items-center relative">
        <Icon
          :name="icon"
          class="font-bold text-5xl z-10" />
      </div>
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
