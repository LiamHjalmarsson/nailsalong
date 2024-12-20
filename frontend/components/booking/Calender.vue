<template>
  <div class="flex w-full items-center justify-center flex-1">
    <div class="flex w-full flex-col rounded-lg shadow-lg overflow-hidden">
      <!-- Header of calender -->
      <div
        class="flex justify-between p-2 items-center mb-4 bg-neutral text-neutral-white">
        <div
          class="py-1 lg:py-2 px-2 lg:px-4 cursor-pointer"
          :class="{ 'opacity-50 cursor-default': isPrevDisabled }"
          @click="!isPrevDisabled && changeMonth('prev')">
          <Icon
            name="mdi:chevron-left"
            class="text-4xl" />
        </div>
        <div class="flex flex-col items-center">
          <span class="text-2xl font-bold">{{ monthNames[currentMonth] }}</span>
          <span>{{ currentYear }}</span>
        </div>
        <div
          class="py-1 lg:py-2 px-2 lg:px-4 cursor-pointer"
          :class="{ 'opacity-50 cursor-default': isNextDisabled }"
          @click="!isNextDisabled && changeMonth('next')">
          <Icon
            name="mdi:chevron-right"
            class="text-4xl" />
        </div>
      </div>

      <!-- Days of the week -->
      <div class="grid grid-cols-7 text-center font-bold mb-2">
        <div
          v-for="day in daysOfWeek"
          :key="day"
          class="py-2">
          {{ day }}
        </div>
      </div>

      <div class="grid grid-cols-7 gap-2 pb-4">
        <!-- Days of month before -->
        <div
          v-for="n in startDay"
          :key="n"
          class="flex justify-center items-center w-full rounded-full text-gray-400 cursor-pointer"
          @click="changeMonthToPrev">
          {{ prevMonthDates[n - 1] }}
        </div>

        <!-- Days of the month -->
        <div
          v-for="(date, index) in daysInMonth"
          :key="index"
          class="flex justify-center items-center h-10 w-full rounded-full cursor-pointer">
          {{ date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const today = new Date();

const currentYear = ref(today.getFullYear());
const currentMonth = ref(today.getMonth());
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
const maxDate = new Date(today.getFullYear() + 1, today.getMonth(), 1);

// Computed properties
const daysInMonth = computed(() => {
  const year = currentYear.value;
  const month = currentMonth.value;
  return Array.from(
    { length: new Date(year, month + 1, 0).getDate() },
    (_, i) => i + 1
  );
});

const startDay = computed(() => {
  const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1);
  const dayOfWeek = firstDayOfMonth.getDay();
  return dayOfWeek === 0 ? 6 : dayOfWeek - 1;
});

const prevMonthDates = computed(() => {
  const prevMonth = currentMonth.value === 0 ? 11 : currentMonth.value - 1;
  const prevYear =
    currentMonth.value === 0 ? currentYear.value - 1 : currentYear.value;
  const prevMonthDays = new Date(prevYear, prevMonth + 1, 0).getDate();
  const startDayOfWeek = new Date(prevYear, prevMonth, prevMonthDays).getDay();
  return Array.from(
    { length: startDay.value },
    (_, i) => prevMonthDays - startDay.value + i + 1
  );
});

const isPrevDisabled = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1) <= minDate;
});

const isNextDisabled = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1) >= maxDate;
});

// Methods
const changeMonth = (direction) => {
  if (direction === 'prev' && !isPrevDisabled.value) {
    if (currentMonth.value === 0) {
      currentMonth.value = 11;
      currentYear.value--;
    } else {
      currentMonth.value--;
    }
  } else if (direction === 'next' && !isNextDisabled.value) {
    if (currentMonth.value === 11) {
      currentMonth.value = 0;
      currentYear.value++;
    } else {
      currentMonth.value++;
    }
  }
};

const changeMonthToPrev = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
};

const isToday = (date) => {
  const today = new Date();
  return (
    date === today.getDate() &&
    currentMonth.value === today.getMonth() &&
    currentYear.value === today.getFullYear()
  );
};

const isPastDay = (date) => {
  const today = new Date();
  const currentDate = new Date(currentYear.value, currentMonth.value, date);
  return currentDate < today && !isToday(date);
};
</script>
