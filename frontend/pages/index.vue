<template>
  <div>
    <Banner />

    <div class="px-6 mt-6">
      <div class="flex flex-wrap gap-6">
        <IconCard
          icon="mdi-brush"
          title="Polish Perfection"
          description="Experience the ultimate shine and long-lasting polish for a perfect finish." />
        <IconCard
          icon="mdi-brush"
          title="Polish Perfection"
          description="Experience the ultimate shine and long-lasting polish for a perfect finish." />
        <IconCard
          icon="mdi-brush"
          title="Polish Perfection"
          description="Experience the ultimate shine and long-lasting polish for a perfect finish." />
      </div>
    </div>

    <div class="flex gap-6 flex-col mt-6 px-4">
      <NuxtImg
        src="/images/red.jpg"
        class="object-cover h-full w-full rounded-xl" />
    </div>
  </div>
</template>

<script setup>
import IconCard from '~/components/cards/IconCard.vue';

definePageMeta({
  name: 'TrialsShow',
});

useHead({
  title: 'Nails',
});

const { find } = useStrapi();
const response = await find('posts');
</script>
