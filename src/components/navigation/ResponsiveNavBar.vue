<template>
  <div class="py-10">
    <Icon name="icon-menu" class="fill-dark-grayish-blue cursor-pointer mt-[0.2rem]" @click="open = true" />
  </div>
  <div
    class="fixed top-0 left-0 bg-black bg-opacity-50 transition-colors duration-500 w-full h-full"
    :class="{ 'opacity-100': open, 'opacity-0': !open }"
  >
    <div
      class="absolute top-0 left-0 bg-white h-full flex flex-col overflow-hidden transition-[width] duration-500"
      :class="{ 'w-[70%]': open, 'w-0': !open }"
    >
      <Icon
        name="icon-close"
        class="fill-dark-grayish-blue cursor-pointer transition-all duration-500 mt-10 ml-5"
        :class="{ 'opacity-0': !open }"
        width="20"
        height="20"
        @click="open = false"
      />

      <ul>
        <li>1</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Icon from '../shared/Icon.vue'

const open = ref(false)
watch(open, () => {
  document.body.style.overflow = open.value ? 'hidden' : 'auto'
})
</script>

<style lang="scss" scoped></style>
