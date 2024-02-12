import { defineStore } from 'pinia';
import type { ProductColorState } from '@/model/types'; 

export const useImageIndexStore = defineStore({
  id: 'ImageIndex',
  state: (): ProductColorState => ({
    selectedColorIndex: {},
  }),
  actions: {
    setSelectedColorIndex(productId: number, index: number) {
      // Asigna el índice de color seleccionado al producto correspondiente
      this.selectedColorIndex = { ...this.selectedColorIndex, [productId]: index };
    },
    setProductColor({ productId, colorIndex }: { productId: number, colorIndex: number }) {
      // Verifica si el producto ya tiene un color seleccionado y, si es así, no lo sobrescribe
      if (this.selectedColorIndex[productId] === undefined) {
        this.selectedColorIndex = { ...this.selectedColorIndex, [productId]: colorIndex };
      }
    }
  },
  getters: {
    getSelectedColorIndex: (state) => (productId: number): number => {
      // Devuelve el índice de color seleccionado para el producto dado
      return state.selectedColorIndex[productId] || 0; // Si el producto no tiene un índice seleccionado, devuelve 0
    },
  }
});