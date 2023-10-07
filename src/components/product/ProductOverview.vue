<template>
  <div class="flex justify-center grow flex-col text-left w-full">
    <div class="px-10 pb-10 md:pb-0 md:pl-14 md:pr-0 lg:px-20">
      <p class="font-bold uppercase text-sm text-orange mb-6">Sneaker Company</p>
      <p class="font-bold text-5xl mb-10">Fall Limited Edition Sneakers</p>
      <p class="text-dark-grayish-blue mb-10">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll
        withstand everything the weather can offer.
      </p>
      <p class="font-bold text-3xl mb-2">$125.00</p>
      <p class="text-grayish-blue line-through">$250.00</p>
      <div class="flex justify-between gap-8 md:gap-4 lg:gap-8 items-center text-center w-full mt-10">
        <div
          class="flex grow justify-evenly items-center bg-light-grayish-blue rounded-xl w-full min-w-[120px] max-w-[200px] py-4"
        >
          <button class="p-2 hover:opacity-50" @click="amount > 1 && amount--">
            <Icon name="icon-minus" class="h-1" />
          </button>
          <p class="font-bold">{{ amount }}</p>
          <button class="p-2 hover:opacity-50" @click="amount < 5 && amount++">
            <Icon name="icon-plus" />
          </button>
        </div>
        <button
          class="flex p-4 whitespace-nowrap shadow-lg shadow-orange items-center justify-center w-full bg-orange rounded-xl font-bold gap-6 text-sm hover:opacity-80"
          @click="handleProductAddition"
        >
          <Icon name="icon-cart" class="fill-light-grayish-blue" width="18" />
          <p class="text-base text-light-grayish-blue">Add to Cart</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Icon from '../shared/Icon.vue'
import { useCart, useSlideShow } from '@/composables'

const { thumbnailImage } = useSlideShow()
const { addProduct } = useCart()
const amount = ref(1)

const handleProductAddition = () => {
  addProduct({
    title: 'Fall Limited Edition Sneakers',
    price: 125.0,
    src: thumbnailImage,
    amount
  })
}
</script>
