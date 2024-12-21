<template>
  <div class="py-12 bg-background relative">
    <NuxtImg
      src="/images/background.png"
      class="object-cover h-full w-full absolute opacity-10 top-0 object-top"
      alt="Red Background Image" />

    <div
      class="max-w-7xl w-full flex mx-auto justify-between items-start gap-12 relative z-10">
      <div class="flex-1 flex flex-col gap-2 py-2 max-w-xl pr-8">
        <Heading
          title="Book Appointment"
          subTitle=" Nails * Style * HandCare">
          <ul class="flex flex-col gap-8 mt-8">
            <li
              class="flex justify-between items-center border-primary border-b pb-4">
              <p class="text-lg font-semibold">Monday - Friday</p>
              <span class="font-thin text-neutral-darkGray">9 AM - 9 PM</span>
            </li>
            <li
              class="flex justify-between items-center border-primary border-b pb-4">
              <p class="text-lg font-semibold">Saturday</p>
              <span class="font-thin text-neutral-darkGray">9 AM - 9 PM</span>
            </li>
            <li
              class="flex justify-between items-center border-primary border-b pb-4">
              <p class="text-lg font-semibold">Sunday & red days</p>
              <span class="font-thin text-neutral-darkGray">Closed</span>
            </li>
            <li class="flex justify-between items-center pb-4">
              <p class="text-lg font-semibold">Location</p>
              <span class="font-thin text-neutral-darkGray"
                >Saint-hilaire-de-riez</span
              >
            </li>
          </ul>
        </Heading>
      </div>

      <Calender />
    </div>
  </div>
</template>

<script setup>
import Heading from '@/components/ui/Heading.vue';
import Calender from '@/components/booking/Calender.vue';
</script>
