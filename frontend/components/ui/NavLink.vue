<template>
  <li class="flex">
    <NuxtLink
      @click="handleMenu"
      :to="url"
      class="font-vibes capitalize w-full py-2 px-4 font-semibold tracking-wider text-2xl text-secondary relative group text-center hover:scale-110 transition-transform duration-300 border-b border-secondary">
      <span
        class="absolute top-0 left-0 w-full bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300 ease-in-out origin-center h-0.5"></span>
      {{ label }}

      <span
        :class="[
          'absolute left-0 bottom-0 w-full bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300 ease-in-out origin-center h-0.5',
        ]"></span>
    </NuxtLink>
  </li>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    required: true,
  },

  label: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['close']);

const handleMenu = () => {
  emit('close');
};
</script>
