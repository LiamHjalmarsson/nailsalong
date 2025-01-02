<template>
  <footer class="text-neutral-white bg-neutral py-12">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div
        class="flex max-lg:flex-col gap-12 lg:gap-24 justify-center items-center lg:items-start">
        <div class="text-center">
          <NuxtLink
            to="/"
            class="flex gap-4">
            <span class="text-2xl font-bold max-lg:text-center"
              >Nails by sissi
            </span>
          </NuxtLink>

          <div class="flex flex-col gap-6 mt-6">
            <div class="flex gap-4 items-center">
              <div
                class="p-2 bg-neutral-white text-neutral shadow flex justify-center items-center text-xl w-fit">
                <Icon name="material-symbols:call-sharp" />
              </div>

              <span> 0707070707 </span>
            </div>

            <div class="flex gap-4 items-center">
              <div
                class="p-2 bg-neutral-white text-neutral shadow flex justify-center items-center text-xl w-fit">
                <Icon name="material-symbols:mail-sharp" />
              </div>

              <span> mail@mail.com </span>
            </div>

            <div class="flex gap-4 items-center">
              <div
                class="p-2 bg-neutral-white text-neutral shadow flex justify-center items-center text-xl w-fit">
                <Icon name="ion:logo-instagram" />
              </div>
              <span> nails.by.sissi85 </span>
            </div>

            <div class="flex gap-4 items-center">
              <div
                class="p-2 bg-neutral-white text-neutral shadow flex justify-center items-center text-xl w-fit">
                <Icon name="ion:logo-tiktok" />
              </div>
              <span> nails.by.sissi85 </span>
            </div>
          </div>
        </div>

        <div class="text-center">
          <p class="text-xl font-semibold max-lg:text-center">Links</p>
          <ul class="flex-1 gap-9 mt-8 flex flex-col">
            <li class="">
              <NuxtLink> Booking </NuxtLink>
            </li>
            <li class="">
              <NuxtLink> Service </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="text-center">
          <p class="text-xl font-semibold max-lg:text-center">Open</p>
          <ul class="flex-1 gap-9 mt-8 flex flex-col">
            <li class="">Monday - Friday</li>
            <li class="">Saturday</li>
            <li class="">Sunday & red days</li>
            <li class="">Location</li>
          </ul>
        </div>

        <div class="h-96 w-full lg:flex-1">
          <Map />
        </div>
      </div>
    </div>
  </footer>
</template>
