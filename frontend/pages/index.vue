<template>
  <div>xx</div>
</template>

<script setup>
definePageMeta({
  name: 'TrialsShow',
});

useHead({
  title: 'Nails',
});

const { find } = useStrapi();
const response = await find('posts');
</script>
