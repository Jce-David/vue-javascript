
import { defineStore } from 'pinia'
import type { Image } from '@/model/types.ts'


export const useCollageStore = defineStore('collage', {
  state: () => ({ images: []  as Image[] }),
  getters: {
  
  },
  actions: {
    fetchCollage(){
      fetch('/data/collage.json')
      .then(response => response.json())
      .then( (data) => {
         this.images = data
      } )
    }
  },
})
