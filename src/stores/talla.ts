
import { defineStore } from 'pinia'
import type { Talla } from '@/model/types.ts'

export const useTallasStore = defineStore('tallas', {
  state: () => ({  medidas: [
    { talla: 36, id: 1, seleccionada: false },
    { talla: 37, id: 2, seleccionada: false },
    { talla: 38, id: 3, seleccionada: false },
    { talla: 39, id: 4, seleccionada: false },
    { talla: 40, id: 5, seleccionada: false },
    { talla: 41, id: 6, seleccionada: false },
] as Talla [] ,
selectedState: null as null | Talla,
}),
  getters: {

  },
  actions: {
    tallaSeleccionada: function(this: any, talla: Talla) {
      // Desmarcar todas las tallas y marcar solo la seleccionada
      this.state.medidas.forEach((t: Talla) => {
        t.seleccionada = false;
      });
      talla.seleccionada = true;

      // Actualizar la talla seleccionada en el store
      this.state.tallaSeleccionada = talla;
    },
  },
  })
