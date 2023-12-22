
import { defineStore } from 'pinia'

export const useScrollingStore = defineStore('scrolling', {
    state: () => ({
        offSetTop: 0 ,
        isHovering: false,
    }),
    getters: {

    },
    actions: {
        onScroll() {
            this.offSetTop = window.scrollY; 
            this.isHovering = this.offSetTop > 2 ? false: true;
          },
        },
        
},
)
