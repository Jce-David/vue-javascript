<script lang="ts" >
import type { Product } from '../../model/types';
import type { PropType } from 'vue';
import { useUniqueStore } from '../../stores/unique';
import { useProductsStore } from '../../stores/products';
import { mapState } from 'pinia';
export default {
    props: {
    product: {
      type: Object as PropType<Product>,
      required: true 
    }
  },
  computed:{
    ...mapState(useProductsStore, [ 'products','loading']),
    imageShopCart(){
      return this.product.imageProduct
    },
    imageLoading(){
      return this.product.imageProduct
    }

  },
  methods : {
    onAddButtonClick(){
      const cartStore = useUniqueStore();
      return cartStore.addProduct(this.product)
    },
  },
}
</script>

<template  >

<div  >
  <RouterLink  :to="{ name: 'product-details', params: { id: product.id } }" >
    
    <div 

    style= " border: 1px solid #aaaaaa; background-color:whitesmoke; 
    ; max-height: 56vh; "
    @click="onAddButtonClick">  

          <v-img
          style=" transition: transform 0.3s ease-in-out; "
      aspect-ratio="1"
      :src="imageShopCart"
      class="enlarge-on-hover  mt-16  "

     
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular

            indeterminate
            color="black"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>


     </div>
 
  </RouterLink>

  <div
  class="ml-2"
  style="
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Alinear a la izquierda verticalmente */
    justify-content: flex-start; /* Alinear a la izquierda horizontalmente */
    "
  :elevation="0"
>
  <RouterLink  style="text-decoration: none; color: inherit; "  :to="{ name: 'product-details', params: { id: product.id } }">
    <button @click="onAddButtonClick">
      <p class="mt-3">{{ product.name }}</p>
    </button>
  </RouterLink>
  <RouterLink style="text-decoration: none; color: inherit; " :to="{ name: 'product-details', params: { id: product.id } }">
    <button @click="onAddButtonClick" style="
      background: none;
      border: none;
      padding: 0;
      margin: 0;    
    " >
      <p class="mt-1">s/. {{ product.price }}.00</p>
    </button>
  </RouterLink>
</div>

</div>

   

</template>

<style>
.enlarge-on-hover:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}
</style>