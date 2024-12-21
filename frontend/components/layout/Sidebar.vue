<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300 delay-75"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div
        @toggle="modelValue"
        @click="closed"
        class="fixed top-0 left-0 w-full h-full bg-neutral-darkGray/10 z-40 lg:hidden"></div>
    </Transition>

    <!-- Sidebar -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-in-out"
      leave-active-class="transition-transform duration-300 ease-in-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full">
      <div
        v-show="modelValue"
        class="fixed w-2/3 sm:w-1/2 md:w-1/5 h-full top-0 right-0 z-40 bg-neutral-white flex flex-col justify-between items-center shadow-lg px-12 py-24">
        <ul class="gap-12 w-full flex flex-col justify-center items-center">
          <NavLink
            label="Booking"
            @close="closed" />
          <NavLink
            label="Gallery"
            @close="closed" />
          <NavLink
            label="Contact"
            @close="closed" />
          <NavLink
            label="Blog"
            @close="closed" />
        </ul>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import NavLink from '@/components/ui/NavLink.vue';

defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(['closed']);

const closed = () => {
  emit('closed');
};
</script>
