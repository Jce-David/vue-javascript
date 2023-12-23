import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/model/types.ts'
export const useProductsStore = defineStore('products', {
  state: () => ({ products: [
    {name: 'Agenda AG-0146 Color Negro',  price: 99 , id: 1 },
    {name: 'Agenda AG-0146 Color Negro',  price: 99 , id: 2 },
    {name: 'Agenda AG-0146 Color Negro',  price: 99 , id: 3 },
    {name: 'Agenda AG-0146 Color Negro',  price: 99 , id: 4 },
    {name: 'Agenda AG-0146 Color Negro',  price: 99 , id: 5 },
    {name: 'Agenda AG-0146 Color Negro',  price: 99 , id: 6 },
    {name: 'Agenda AG-0146 Color Negro',  price: 99 , id: 7 },
    {name: 'Agenda AG-0146 Color Negro',  price: 99 , id: 8 }
  ] as Product [] }),
  getters: {
  
  },
  actions: {
   
  },
})
