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



    <RouterLink  :to="{ name: 'product-details', params: { id: product.id } }" >
    
      <div @click="onAddButtonClick">  

            <v-img

        aspect-ratio="1"
        :src="imageShopCart"
        class="enlarge-on-hover ml-3 "
        style=" height: 20vh; transition: transform 0.3s ease-in-out;"
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

    <div style="
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrar verticalmente */
    justify-content: center; /* Centrar horizontalmente */
" :elevation="0">
<RouterLink  style="text-decoration: none; color: inherit; "  :to="{ name: 'product-details', params: { id: product.id } }">
        <button @click="onAddButtonClick" >
            <p style="
        background-color: transparent;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        letter-spacing: 0.1em;
         /* Centrar horizontalmente */
        line-height: 1.5; /* Centrar verticalmente */
       " class="mt-3">{{ product.name }}</p>
        </button>
</RouterLink>
        <RouterLink style="text-decoration: none; color: inherit; " :to="{ name: 'product-details', params: { id: product.id } }">
            <button @click="onAddButtonClick" style="
        background: none;
        border: none;
        padding: 0;
        margin: 0;    
    " >
                <p style=" 
            background-color: transparent;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            font-style: normal;
            font-size: 11px;
            letter-spacing: 0.1em;
           /* Centrar horizontalmente */
            line-height: 1.5 ; /* Centrar verticalmente */
            color : #6a6a6a ; " class=" mt-3"> s/. {{ product.price }}.00 </p>
            </button>
        </RouterLink>
    </div>  

</template>

<style>
.enlarge-on-hover:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}
</style>