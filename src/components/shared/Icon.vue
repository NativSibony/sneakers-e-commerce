<template>
  <component :is="icon" :width="svgWidth" />
</template>

<script setup>
import { computed, defineAsyncComponent, onMounted, ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  width: {
    type: [String, Number],
    default: null
  }
})

const svgWidth = ref(24)

const icon = computed(() => {
  return defineAsyncComponent(async () => {
    const svg = await import(`../../assets/images/${props.name}.svg`)
    const svgProps = svg.render().props
    if (!props.width) svgWidth.value = svgProps.width
    else svgWidth.value = props.width
    return svg
  })
})

onMounted(() => {
  console.log(props.width, svgWidth.value, props.name)
})
</script>
