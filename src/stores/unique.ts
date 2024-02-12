import { defineStore } from 'pinia'
import type { CartDetail, Product } from '@/model/types'

export const useUniqueStore = defineStore('unique', {
  state: () => ({
    detailsProduct: [] as CartDetail[],      // Lista de productos en el carrito
    selectedColorIndex: 0,

  }),
  actions: {
    setSelectedColorIndex(index: number) {
      this.selectedColorIndex = index;
    },
    // Acción para agregar un producto al carrito
    addProduct(product: Product) {
      // Elimina todos los elementos actuales del carrito
      this.detailsProduct.splice(0, this.detailsProduct.length);
      // Busca si ya existe un producto con el mismo ID en el carrito
      this.detailsProduct.find((d) => d.product.id === product.id);
      // Crea un nuevo objeto CartDetail con la información del producto y lo añade al carrito
      const newCartItem: CartDetail = {
        images: product.images[this.selectedColorIndex] ,
        product,                            
        quantity: 1,
        totalPriceProduct: 0, // Este valor debe ser calculado según la lógica de tu aplicación
      } as CartDetail ;
      this.detailsProduct.push(newCartItem);
    }   
  }
})
