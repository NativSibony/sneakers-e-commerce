<template>
  <section class="flex justify-center items-center w-full max-w-[1440px] md:p-4">
    <div class="flex md:py-10 gap-y-10 flex-wrap md:flex-nowrap">
      <ProductShow />
      <ProductOverview />
    </div>
  </section>
</template>
<script setup>
import { ProductShow, ProductOverview } from '@/components/product'
</script>
