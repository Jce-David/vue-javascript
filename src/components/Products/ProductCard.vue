<script lang="ts">
import type { Product } from '../../model/types';
import { useUniqueStore } from '../../stores/unique';
import { useImageIndexStore } from '@/stores/Image';
import { useProductsStore } from '../../stores/products';
import { mapState } from 'pinia';
import { mapStores} from 'pinia';
import { mapActions } from 'pinia';
export default {
  data(){
    return {
      // selectedColorIndex : 0 // Ya no necesitas mantener este dato en el componente
    }
  },
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  computed: {
    ...mapState( useImageIndexStore, ['getSelectedColorIndex'] ),
    colors(): string[] {
      return this.product.colors;
    },
    imageShopCart(): string {
      // Obtener el índice seleccionado del almacén de índices de imagen
      const selectedColorIndex = useImageIndexStore().getSelectedColorIndex(this.product.id);
      const images = this.product.images;
      return images[selectedColorIndex];
    },

  },
  methods: {
    ...mapActions( useImageIndexStore, ['setSelectedColorIndex'] ), 
    onAddButtonClick() {
      const cartStore = useUniqueStore();
      const selectedColorIndex = useImageIndexStore().getSelectedColorIndex(this.product.id);
      return cartStore.addProduct({
        ...this.product,
        colorIndex: selectedColorIndex,
      });
    },  
    changeImage(productId: number , index: number,) {
      console.log("estoy cambiando de imagen")
      this.setSelectedColorIndex(productId, index);
      // No es necesario mantener una copia local de selectedColorIndex en el componente
      // this.selectedColorIndex = index
    },
  
  },
};
</script>


<template>
  <div>
 

    <RouterLink :to="{ name: 'product-details', params: { id: product.id } }">
      <div
        style="
          border: 1px solid #aaaaaa;
          background-color: whitesmoke;
          max-width: 60vw ;
          max-height: 56vh;
        "
        @click="onAddButtonClick">
        <v-img
          :src="imageShopCart"
          alt="Product Image"
          class="enlarge-on-hover mt-16"
        />
      </div>
    </RouterLink>

    <div
      class="ml-2"
      style="
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      "
      :elevation="0"
    >
      <RouterLink
        style="text-decoration: none; 
        color: inherit;
        "
        :to="{ name: 'product-details', params: { id: product.id } }"
      >
        <button @click="onAddButtonClick">
          <p class=" text-resumen mt-3">{{ product.name }}</p>
        </button>
      </RouterLink>
    
      <RouterLink
        style="text-decoration: none; color: inherit;"
        :to="{ name: 'product-details', params: { id: product.id } }"
      >
        <button
          @click="onAddButtonClick"
          style="background: none; border: none; padding: 0; margin: 0;"
        >
          <p class=" text-resumen  mt-1">s/. {{ product.price }}.00</p>
        </button>
      </RouterLink>
      <div style="max-width: 40vw;" class="color-buttons mt-4">
      <v-row>
        <button
        v-for="(color, index) in product.colors"
          :key="index"
          @click="changeImage(product.id , index)"
          :style="{ backgroundColor: color }"
          :class="{ 'active': index === getSelectedColorIndex(product.id) }"
          class="color-button my-3 mx-2"
        ></button>
      </v-row>
    </div>
    </div>
  </div>
</template>



<style scoped >
.enlarge-on-hover:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}

.color-buttons {
  display: flex;  
  align-items: center;
}
.text-resumen {
  color: rgb(80, 80, 80);
    position: relative;
  display: inline-block;

  line-height: normal;

  border-radius: 0;
text-transform: uppercase;
  font-size: 0.7em;
  text-align: left;
  font-family: Montserrat;
  letter-spacing: 0.08em;
  font-weight: 500;
  font-style: normal;
}

.color-button {
  min-width : 20px;
  min-height: 20px;
  border-radius: 50%;
  border: none;
  margin-right: 10px;
  cursor: pointer;
  transition: border-width 0.3s ease;
  position: relative; /* Para que el borde se superponga al botón */
}
.color-button:active {
  transform: scale(1.2); /* Hacer que el botón se agrande cuando se presione */
}

.color-button.active::before {
  content: '';
  position: absolute;
  top: -4px; /* Ajusta la posición vertical del borde */
  left: -4px; /* Ajusta la posición horizontal del borde */
  width: calc(100% + 8px); /* Ajusta el ancho del borde */
  height: calc(100% + 8px); /* Ajusta el alto del borde */
  border-radius: 100%; /* Hace que el borde sea circular */
  border: 1px solid #4e4e4e; /* Estilo del borde */
}

</style>
