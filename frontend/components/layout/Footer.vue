<template>
  <footer class="text-neutral-white bg-neutral py-12">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
        <div class="px-8">
          <h2 class="text-2xl font-bold">My Brand</h2>

          <div class="flex space-x-4 mt-4">
            <NuxtLink
              to="#"
              class="hover:text-white text-3xl">
              <Icon name="ph:instagram-logo" />
            </NuxtLink>
            <NuxtLink
              to="#"
              class="hover:text-white text-3xl">
              <Icon name="ph:facebook-logo" />
            </NuxtLink>
            <NuxtLink
              to="#"
              class="hover:text-white text-3xl">
              <Icon name="ph:youtube-logo" />
            </NuxtLink>
          </div>
        </div>

        <div class="px-8">
          <ul class="space-y-2">
            <li>
              <NuxtLink
                href="#"
                class="hover:text-white transition"
                >Booking</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div class="px-8">
          <ul class="space-y-2">
            <li>
              <NuxtLink
                href="#"
                class="hover:text-white transition"
                >mail</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div></div>
      </div>

      <div class="border-t border-neutral-silver my-8"></div>

      <div class="flex flex-col md:flex-row justify-center items-center">
        <p class="text-sm text-center">© 2024 My Brand. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
