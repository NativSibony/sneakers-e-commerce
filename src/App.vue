<template>
  <div class="flex flex-col md:px-10">
    <HeaderSection />

    <main class="flex items-center justify-center w-full h-full">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderSection from '@/components/partials/HeaderSection.vue'
</script>
