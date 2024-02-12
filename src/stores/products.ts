import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/model/types.ts'


export const useProductsStore = defineStore('products', {
  state: () => ({ 
    categoryId: null as number| null ,
    order : '' as string, 
    _products: [] as Product [],
    loading: true,
}),
getters: {
  products(state){
    let products = null;

        if(state.categoryId){
            products = state._products.filter(p => p.categoryId === state.categoryId)
        } else {
            products = state._products
        }
        if(state.order === ''){
            return products
        }
        if(state.order === 'price'){
          return products.sort((a, b) => a.price - b.price )
        }
        if(state.order === 'priceDesc'){
          return products.sort((a, b) => b.price - a.price )
        }
  }
},
  actions: {
    selectCategory(categoryId:number){
      this.categoryId =categoryId
  },
  orderByPrice(){
    this.order ='price' 
  },
  orderByPriceDesc(){
    this.order = 'priceDesc';

  },
    fetchProducts(){
      fetch('/data/products.json')
      .then( response => response.json() )
      .then( (data) => {
        this._products = data;
        this.loading = false;
      } )
    },
    },
})