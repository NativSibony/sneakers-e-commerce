<template>
  <header class="flex flex-col justify-center items-center h-full max-h-[100px]">
    <div class="flex px-4 md:px-0 justify-between items-center h-full w-full max-w-[1440px]">
      <div class="flex items-center justify-center text-center gap-8 md:gap-16">
        <ResponsiveNavBar class="md:hidden" />
        <RouterLink to="/">
          <Icon name="logo" />
        </RouterLink>
        <NavBar class="hidden md:flex" />
      </div>
      <div class="flex items-center text-center gap-10">
        <Icon class="cursor-pointer fill-[#69707D]" name="icon-cart" />
        <img :src="Avatar" class="w-8 h-8 md:w-12 md:h-12" />
      </div>
    </div>
    <div class="hidden md:flex border-b-[1px] w-full max-w-[1440px]" />
  </header>
</template>

<script setup>
import Icon from '@/components/shared/Icon.vue'
import NavBar from '@/components/navigation/NavBar.vue'
import Avatar from '@/assets/images/image-avatar.png'
import ResponsiveNavBar from '../navigation/ResponsiveNavBar.vue'
</script>
