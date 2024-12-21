<template>
  <footer class="text-neutral-white bg-neutral py-12">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="flex gap-12 justify-center items-start">
        <div class="flex-1">
          <NuxtLink
            to="/"
            class="flex gap-4">
            <span class="text-2xl font-bold">Nails by sissi </span>
          </NuxtLink>

          <div class="flex flex-col gap-8 mt-8">
            <div class="flex gap-4 items-center">
              <div
                class="p-2 bg-neutral-white text-neutral rounded-md shadow flex justify-center items-center text-xl w-fit">
                <Icon name="material-symbols:call-sharp" />
              </div>

              <span> 0707070707 </span>
            </div>

            <div class="flex gap-4 items-center">
              <div
                class="p-2 bg-neutral-white text-neutral rounded-md shadow flex justify-center items-center text-xl w-fit">
                <Icon name="material-symbols:mail-sharp" />
              </div>

              <span> mail@mail.com </span>
            </div>

            <div class="flex gap-4 items-center">
              <div
                class="p-2 bg-neutral-white text-neutral rounded-md shadow flex justify-center items-center text-xl w-fit">
                <Icon name="ion:logo-instagram" />
              </div>
              <span> nails.by.sissi85 </span>
            </div>

            <div class="flex gap-4 items-center">
              <div
                class="p-2 bg-neutral-white text-neutral rounded-md shadow flex justify-center items-center text-xl w-fit">
                <Icon name="ion:logo-tiktok" />
              </div>
              <span> nails.by.sissi85 </span>
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
