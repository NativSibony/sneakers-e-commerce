import { ref } from 'vue'

const addedProduct = ref(null)

export const useCart = () => {
  function addProduct(product) {
    addedProduct.value = product
  }

  return {
    addProduct,
    addedProduct
  }
}
