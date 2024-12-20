<template>
  <li class="flex w-full group">
    <NuxtLink
      @click="handleMenu"
      :to="url"
      class="capitalize w-full py-4 px-4 font-semibold tracking-wider text-xl text-primary group-hover:text-accent relative text-center cursor-pointer transition duration-300">
      {{ label }}

      <span
        class="absolute left-0 bottom-0 w-full h-0.5 bg-accent scale-x-0 origin-left transition-transform duration-150 ease-out group-hover:scale-x-100">
      </span>

      <span
        class="absolute left-0 top-0 h-full w-0.5 bg-accent scale-y-0 origin-top transition-transform duration-150 ease-out delay-150 group-hover:scale-y-100">
      </span>

      <span
        class="absolute left-0 top-0 w-full h-0.5 bg-accent scale-x-0 origin-right transition-transform duration-150 delay-100 ease-out group-hover:scale-x-100">
      </span>

      <span
        class="absolute right-0 top-0 h-full w-0.5 bg-accent scale-y-0 origin-bottom transition-transform duration-150 delay-75 ease-out group-hover:scale-y-100">
      </span>
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
