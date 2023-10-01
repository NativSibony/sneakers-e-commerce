import { ref, computed } from 'vue'

export function useSlideShow() {
  const index = ref(1)
  const productImage = computed(() => new URL(`../assets/images/image-product-${index.value}.jpg`, import.meta.url).href)
  const thumbnailImage = computed(
    () => new URL(`../assets/images/image-product-${index.value}-thumbnail.jpg`, import.meta.url).href
  )
  const thumbnailImages = computed(() =>
    Array.from(Array(4).keys(), (n) => n + 1).map((n) => {
      const path = `../assets/images/image-product-${n}-thumbnail.jpg`
      return new URL(path, import.meta.url).href
    })
  )

  function next() {
    index.value++
    if (index.value > 4) {
      index.value = 1
    }
  }

  function prev() {
    index.value--
    if (index.value < 1) {
      index.value = 4
    }
  }

  function selectImage(i) {
    index.value = i
  }

  return {
    index,
    selectImage,
    productImage,
    thumbnailImage,
    thumbnailImages,
    next,
    prev
  }
}
