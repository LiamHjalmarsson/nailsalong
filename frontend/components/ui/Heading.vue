<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-lg font-semibold text-primary tracking-wide uppercase">
      {{ subTitle }}
    </h2>

    <h1 class="text-4xl font-extrabold text-gray-900 leading-tight">
      {{ title }}
    </h1>

    <span class="block border-b border-primary h-2 w-24" />

    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subTitle: String,
});
</script>
