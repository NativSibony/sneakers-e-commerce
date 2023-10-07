<template>
  <div class="flex grow flex-col justify-center items-center w-full gap-10">
    <div class="flex flex-col justify-center items-center gap-10 w-full md:max-w-[500px]">
      <button
        class="absolute md:hidden left-2 mb-10 flex justify-center items-center rounded-full stroke-[#1D2026] hover:stroke-orange bg-pale-orange w-full h-full max-w-[2.5rem] max-h-[2.5rem]"
        @click="prev"
      >
        <Icon name="icon-previous" width="16" height="16" />
      </button>
      <img :src="productImage" class="md:rounded-3xl md:cursor-pointer md:hover:opacity-80 md:w-auto" @click="showModal" />
      <button
        class="absolute md:hidden right-2 mb-10 flex justify-center items-center rounded-full stroke-[#1D2026] hover:stroke-orange bg-pale-orange w-full h-full max-w-[2.5rem] max-h-[2.5rem]"
        @click="next"
      >
        <Icon class="ml-1" name="icon-next" width="16" height="16" />
      </button>
      <div class="hidden md:flex justify-between w-full">
        <img
          v-for="(thumbnail, i) in thumbnailImages"
          :key="thumbnail"
          :src="thumbnail"
          class="cursor-pointer hover:opacity-50 max-w-[100px] rounded-3xl"
          :class="thumbnailImage === thumbnail ? 'border-2 border-orange opacity-50 border-opacity-100' : ''"
          @click="selectImage(i + 1)"
        />
      </div>
    </div>
  </div>
  <LightBox v-if="show" :show="show" :parent-index="index" @close="close" />
</template>

<script setup>
import { ref } from 'vue'
import { useSlideShow } from '@/composables/useSlideShow'
import LightBox from './LightBox.vue'
import Icon from '../shared/Icon.vue'

const show = ref(false)
const { index, productImage, selectImage, thumbnailImage, thumbnailImages, prev, next } = useSlideShow()

defineEmits(['set-thumbnail-image'])

const close = () => (show.value = false)
const showModal = () => {
  if (window.innerWidth > 767) show.value = true
}
</script>
