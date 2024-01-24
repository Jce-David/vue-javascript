import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/model/types.ts'


export const useProductsStore = defineStore('products', {
  state: () => ({ 
    products: [] as Product [],
    loading: true
}),
getters: {

}, 
  actions: {
    fetchProducts(){
      fetch('/data/products.json')
      .then( response => response.json() )
      .then( (data) => {
        this.products = data;
        this.loading = false;
      } )
    },
    },
})
