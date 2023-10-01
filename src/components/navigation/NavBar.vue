<template>
  <nav class="flex items-center justify-center gap-8 text-dark-grayish-blue">
    <RouterLink
      v-for="item in navItems"
      :key="`nav-item-${item.title}`"
      :to="item.to"
      class="h-[100px] py-10 text-center hover:border-b-orange hover:border-b-[3px] hover:text-very-dark-blue"
      :active-class="'border-b-orange border-b-[3px] text-very-dark-blue'"
    >
      {{ item.title }}
    </RouterLink>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { NAV_ITEMS } from './constants'

const navItems = ref(NAV_ITEMS)
</script>
