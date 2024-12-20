<template>
  <div class="mx-auto max-w-7xl mb-24">
    <Heading
      title="Services"
      subTitle="Experience My"
      class="max-w-3xl mx-auto text-center justify-center items-center">
      <p class="text-gray-700 leading-relaxed my-8">
        We want to provide a new type of nail salon, a comfy and warm space that
        you can enjoy. We use all organic and nature product to give you the
        best experience. We provide all organic treatments, no harsh chemicals,
        even our nail polish remover is non-acetone. A eco-friendly, non-toxic
        salons to keep your nails on point and safe for your body.
      </p>
    </Heading>

    <div class="grid grid-cols-3 gap-8 mt-8">
      <ServiceCard
        image="/images/hands.jpg"
        title="Color Gel"
        subTitle="Come get"
        color="border-primary" />

      <ServiceCard
        image="/images/display.jpg"
        title="Nail Art"
        subTitle="Come get"
        color="border-secondary" />

      <ServiceCard
        image="/images/banner.jpg"
        title="Spa Treatment"
        subTitle="Come get"
        color="border-accent" />
    </div>
  </div>
</template>

<script setup>
import Heading from '@/components/ui/Heading.vue';
import ServiceCard from './ServiceCard.vue';
</script>
