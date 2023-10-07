<template>
  <slot name="header">
    <p class="font-bold text-left text-md text-very-dark-blue w-full h-full p-5">
      {{ title }}
    </p>
  </slot>
  <slot name="separator">
    <div class="border-b-[1px] w-full" />
  </slot>

  <slot name="content"></slot>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
