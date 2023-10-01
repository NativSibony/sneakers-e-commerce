<template>
  <div class="flex grow flex-col justify-center items-center w-full gap-10">
    <div class="flex flex-col justify-center items-center gap-10 w-full max-w-[500px]">
      <img :src="productImage" class="rounded-3xl cursor-pointer hover:opacity-80" @click="show = true" />
      <div class="flex justify-between w-full">
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

const show = ref(false)
const { index, productImage, selectImage, thumbnailImage, thumbnailImages } = useSlideShow()

defineEmits(['set-thumbnail-image'])

const close = () => (show.value = false)
</script>
