<template>
  <section class="flex justify-center items-center w-full max-w-[1440px] p-4">
    <div class="flex py-10">
      <ProductShow />
      <ProductOverview />
    </div>
  </section>
</template>
<script setup>
import { ProductShow, ProductOverview } from '@/components/product'
</script>
