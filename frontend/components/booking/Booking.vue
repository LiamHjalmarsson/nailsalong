<template>
  <div class="bg-background relative">
    <NuxtImg
      src="/images/background.png"
      class="object-cover h-full w-full absolute opacity-10 top-0 object-top"
      alt="Red Background Image" />

    <div
      class="max-w-7xl w-full flex mx-auto justify-between items-start gap-12 relative z-10 p-12">
      <div class="flex-1 py-3 max-w-xl">
        <Heading
          title="Book Appointment"
          subTitle=" Nails * Style * HandCare">
          <ul class="flex flex-col gap-6 mt-3">
            <li
              class="flex justify-between items-center border-primary border-b pb-3">
              <p class="text-lg font-semibold">Monday - Friday</p>
              <span class="font-thin text-neutral-darkGray">9 AM - 9 PM</span>
            </li>
            <li
              class="flex justify-between items-center border-primary border-b pb-3">
              <p class="text-lg font-semibold">Saturday</p>
              <span class="font-thin text-neutral-darkGray">9 AM - 9 PM</span>
            </li>
            <li
              class="flex justify-between items-center border-primary border-b pb-3">
              <p class="text-lg font-semibold">Sunday & red days</p>
              <span class="font-thin text-neutral-darkGray">Closed</span>
            </li>
            <li class="flex justify-between items-center pb-3">
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
