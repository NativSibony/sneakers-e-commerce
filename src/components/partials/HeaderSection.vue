<template>
  <header class="flex flex-col justify-center items-center h-full max-h-[100px]">
    <div class="flex px-4 md:px-0 justify-between items-center h-full w-full max-w-[1440px]">
      <div class="flex items-center justify-center text-center gap-5 md:gap-16">
        <ResponsiveNavBar class="md:hidden" />
        <RouterLink to="/">
          <Icon name="logo" />
        </RouterLink>
        <NavBar class="hidden md:flex" />
      </div>
      <div class="w-full flex justify-end items-center text-center gap-6 md:gap-10">
        <Icon
          class="cursor-pointer fill-[#69707D] hover:fill-orange transition-all"
          name="icon-cart"
          @click="showCart = !showCart"
        />
        <Cart :show="showCart" />
        <img
          :src="Avatar"
          class="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 transition-all cursor-pointer duration-500 hover:border-orange"
        />
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
import Cart from '@/components/cart/Cart.vue'
import { ref } from 'vue'

const showCart = ref(false)
</script>
