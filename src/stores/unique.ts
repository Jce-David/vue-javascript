
import { defineStore } from 'pinia'
import type { CartDetail, Product } from '@/model/types'
import { useLocalStorage } from '@vueuse/core'

export const useUniqueStore = defineStore('unique', {
  state: () => ({
    detailsProduct: [] as CartDetail[],
  }),
  getters: {
    
  },
  actions: {
    addProduct(product: Product ){
      this.detailsProduct.splice(0, this.detailsProduct.length);
        this.detailsProduct.find((d) => d.product.id === product.id);
        const newCartItem: CartDetail = {
          product,
          quantity: 1,
          totalPriceProduct: 0, 
           // Asegúrate de proporcionar un valor adecuado aquí
        };
    
        this.detailsProduct.push(newCartItem);
    }
  },
  
})