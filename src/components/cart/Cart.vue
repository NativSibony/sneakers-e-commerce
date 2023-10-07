<template>
  <!-- class="absolute top-[6.6rem] left-[1.5%] bg-white shadow-card rounded-xl z-50 w-[97%] md:top-20 md:right-32 md:max-w-[400px]" -->
  <div class="wrapper shadow-card md:!top-24 md:!right-20 md:!max-w-[400px]" :class="{ open: show }">
    <div class="flex flex-col">
      <Card title="Cart">
        <template #content>
          <div class="text-left p-5">
            <div v-if="addedProduct?.src" class="block">
              <div class="flex flex-col justify-center items-start gap-5">
                <div class="flex items-center gap-6">
                  <img class="rounded-xl w-16" :src="addedProduct.src" />
                  <div class="flex flex-col whitespace-nowrap text-dark-grayish-blue">
                    <p>{{ addedProduct.title }}</p>
                    <p class="[word-spacing:2px]">
                      ${{ addedProduct.price.toFixed(2) }}
                      <span>x {{ addedProduct.amount }}</span>
                      <span class="text-very-dark-blue font-bold"> ${{ calcTotal.toFixed(2) }}</span>
                    </p>
                  </div>
                  <Icon class="cursor-pointer" name="icon-delete" />
                </div>
                <button
                  class="flex p-4 whitespace-nowrap shadow-lg shadow-orange items-center justify-center w-full bg-orange rounded-xl text-light-grayish-blue text-base font-bold gap-6 hover:opacity-80"
                >
                  Checkout
                </button>
              </div>
            </div>
            <p v-else class="text-dark-grayish-blue text-center font-bold whitespace-nowrap py-12">Your cart is empty.</p>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import Card from '@/components/shared/Card.vue'
import { useCart } from '@/composables'
import Icon from '../shared/Icon.vue'
import { computed } from 'vue'
const { addedProduct } = useCart()

const calcTotal = computed(() => addedProduct.value?.amount * addedProduct.value?.price)

defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.wrapper {
  position: absolute;
  z-index: 5;
  top: 6.6rem;
  right: 1.5%;
  border-radius: 1rem;
  background-color: white;
  width: 97%;
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms;
}
.wrapper > * {
  overflow: hidden;
}

.wrapper.open {
  grid-template-rows: 1fr;
}
</style>
