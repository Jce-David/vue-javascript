import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/model/types.ts'
export const useProductsStore = defineStore('products', {
  state: () => ({ products: [
    {name: 'Agenda AG-0146 Color Negro',  price: 15, id: 1 },
    {name: 'Agenda AG-0146 Color Negro',  price: 15, id: 2 },
    {name: 'Agenda AG-0146 Color Negro',  price: 15, id: 3 },
    {name: 'Agenda AG-0146 Color Negro',  price: 15, id: 4 },
    {name: 'Agenda AG-0146 Color Negro',  price: 15, id: 5 },
    {name: 'Agenda AG-0146 Color Negro',  price: 15, id: 6 }
  ] as Product [] }),
  getters: {
  
  },
  actions: {
   
  },
})
