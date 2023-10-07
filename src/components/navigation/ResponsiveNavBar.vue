<template>
  <div class="transition-all duration-500 z-50">
    <div class="py-10 px-4 cursor-pointer" @click="open = true">
      <Icon name="icon-menu" class="fill-dark-grayish-blue cursor-pointer mt-[0.2rem]" />
    </div>
    <div
      class="fixed top-0 left-0 bg-black bg-opacity-50 transition-all duration-500 w-full h-full"
      :class="{ 'opacity-100': open, 'opacity-0 pointer-events-none': !open }"
      @click.self="open = false"
    >
      <div
        class="absolute top-0 left-0 bg-white h-full flex flex-col gap-10 text-left overflow-hidden transition-all duration-500 z-100"
        :class="{ 'w-[70%]': open, 'w-0': !open }"
      >
        <Icon
          name="icon-close"
          class="fill-dark-grayish-blue cursor-pointer transition-all duration-500 mt-10 ml-8"
          :class="{ 'opacity-0': !open }"
          width="20"
          height="20"
          @click="open = false"
        />

        <ul class="flex flex-col gap-4 ml-8">
          <li v-for="item in NAV_ITEMS" :key="item.to" class="text-xl font-semibold">
            <RouterLink :to="item.to" @click="open = false">{{ item.title }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Icon from '../shared/Icon.vue'
import { NAV_ITEMS } from './constants'

const open = ref(false)
watch(open, () => {
  document.body.style.overflow = open.value ? 'hidden' : 'auto'
})
</script>

<style lang="scss" scoped></style>
