<template>
  <footer class="text-neutral-white bg-neutral py-12">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="flex gap-12 justify-center items-start">
        <div class="flex-1">
          <NuxtLink
            to="/"
            class="flex gap-4">
            <span
              class="h-12 w-12 border-accent border-2 flex p-1 rotate-45 rounded-md">
              <span
                class="h-full w-full border-accent border-2 flex justify-center items-center rounded-md">
                <span class="-rotate-45"> C </span>
              </span>
            </span>
            <span class="text-4xl font-bold">Nail</span>
          </NuxtLink>

          <div class="flex flex-col gap-8 mt-8">
            <div class="flex gap-4 items-center">
              <div
                class="p-2 bg-neutral-white text-neutral rounded-md shadow flex justify-center items-center text-xl w-fit">
                <Icon name="ion:logo-tiktok" />
              </div>

              <span> 0707070707 </span>
            </div>

            <div class="flex gap-4 items-center">
              <div
                class="p-2 bg-neutral-white text-neutral rounded-md shadow flex justify-center items-center text-xl w-fit">
                <Icon name="ion:logo-tiktok" />
              </div>

              <span> mail@mail.com </span>
            </div>
          </div>

          <div class="mt-8 flex gap-8">
            <div
              class="p-2 bg-neutral-white text-neutral rounded-md shadow flex justify-center items-center text-3xl w-fit">
              <Icon name="ion:logo-instagram" />
            </div>
            <div
              class="p-2 bg-neutral-white text-neutral rounded-md shadow flex justify-center items-center text-3xl w-fit">
              <Icon name="ion:logo-facebook" />
            </div>
            <div
              class="p-2 bg-neutral-white text-neutral rounded-md shadow flex justify-center items-center text-3xl w-fit">
              <Icon name="ion:logo-tiktok" />
            </div>
          </div>
        </div>

        <div class="flex-1">
          <p class="text-xl font-semibold">Links</p>
          <ul class="flex-1 gap-8 mt-4 flex flex-col">
            <li class="">
              <NuxtLink> Booking </NuxtLink>
            </li>
            <li class="">
              <NuxtLink> Service </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="flex-1">
          <p class="text-xl font-semibold">Open</p>
          <ul class="flex-1 gap-8 mt-4 flex flex-col">
            <li class="">Monday - Friday</li>
            <li class="">Saturday</li>
            <li class="">Sunday & red days</li>
            <li class="">Location</li>
          </ul>
        </div>

        <div class="mt-8 h-full flex gap-4"></div>

        <div class="h-96 w-96">
          <Map />
        </div>
      </div>

      <div class="border-t border-accent my-8"></div>

      <div class="flex flex-col md:flex-row justify-center items-center">
        <p class="text-sm text-center">
          © 2025 My Brand. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
