<template>
  <header class="flex flex-col justify-center items-center">
    <div class="flex justify-between w-full max-w-[1440px]">
      <div class="flex items-center text-center gap-16">
        <RouterLink to="/">
          <Icon name="logo" />
        </RouterLink>
        <NavBar />
      </div>
      <div class="flex items-center text-center gap-10">
        <Icon class="cursor-pointer fill-[#69707D]" name="icon-cart" />
        <img :src="Avatar" class="w-12 h-12" />
      </div>
    </div>
    <div class="border-b-[1px] w-full max-w-[1440px]" />
  </header>
</template>

<script setup>
import Icon from '@/components/shared/Icon.vue'
import NavBar from '@/components/navigation/NavBar.vue'
import Avatar from '@/assets/images/image-avatar.png'
</script>
