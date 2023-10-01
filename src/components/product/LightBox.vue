<template>
  <div
    v-show="show"
    class="fixed top-0 left-0 flex flex-col justify-center items-center bg-black bg-opacity-75 w-screen h-screen z-10"
    :class="{ 'animate-out fade-out-50': !show, 'animate-in fade-in-50': show }"
  >
    <div class="flex flex-col justify-center items-center gap-8 w-full h-full max-w-[800px]">
      <button class="self-end mr-24 fill-white font-bold text-xl hover:fill-orange" @click="$emit('close')">
        <Icon name="icon-close" width="20" height="20" />
      </button>
      <div class="flex justify-center items-center w-full">
        <button
          class="relative left-6 flex justify-center items-center rounded-full stroke-[#1D2026] hover:stroke-orange bg-pale-orange w-full h-full max-w-[3rem] max-h-[3rem]"
          @click="prev"
        >
          <Prev class="mr-1" />
        </button>
        <img class="rounded-3xl w-[400px] sm:w-[500px] md:w-[600px] max-w-[700px]" :src="productImage" alt="product" />
        <button
          class="relative right-6 flex justify-center items-center rounded-full stroke-[#1D2026] hover:stroke-orange bg-pale-orange w-full h-full max-w-[3rem] max-h-[3rem]"
          @click="next"
        >
          <Next class="ml-1" />
        </button>
      </div>
      <div class="flex justify-center items-center gap-4 sm:gap-8 md:gap-12 w-full">
        <img
          v-for="(thumbnail, i) in thumbnailImages"
          :key="thumbnail"
          class="w-[80px] sm:w-[90px] md:w-full max-w-[90px] rounded-3xl cursor-pointer"
          :class="thumbnailImage === thumbnail ? 'border-2 border-orange opacity-50 border-opacity-100' : ''"
          :src="thumbnail"
          @click="selectImage(i + 1)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Next from '@/assets/images/icon-next.svg'
import Prev from '@/assets/images/icon-previous.svg'

import { useSlideShow } from '@/composables/useSlideShow'
import Icon from '../shared/Icon.vue'
const { productImage, selectImage, thumbnailImage, thumbnailImages, prev, next } = useSlideShow()
selectImage(parentIndex)

const { parentIndex } = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  parentIndex: {
    type: Number,
    required: true
  }
})
defineEmits(['close'])
</script>
