<template>
  <component :is="icon" :width="svgWidth" :height="svgHeight" />
</template>

<script setup>
import { computed, defineAsyncComponent, ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  width: {
    type: [String, Number],
    default: null
  },
  height: {
    type: [String, Number],
    default: null
  }
})

const svgWidth = ref(null)
const svgHeight = ref(null)

const icon = computed(() => {
  return defineAsyncComponent(async () => {
    const svg = await import(`../../assets/images/${props.name}.svg`)
    const svgProps = svg.render().props

    if (!props.width) svgWidth.value = svgProps.width
    else svgWidth.value = props.width

    if (!props.height) svgHeight.value = svgProps.height
    else svgHeight.value = props.height

    return svg
  })
})
</script>
