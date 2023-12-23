<script lang="ts" >
import type { Product } from '@/model/types.ts';
import type { PropType } from 'vue';
import { useProductsStore } from '@/stores/products';
import { mapState } from 'pinia';
import { useUniqueStore } from '@/stores/unique';
export default {

    props: {
    product: {
      type: Object as PropType<Product>,
      required: true 
    }
  },
  computed:{

  },
  methods : {
    onAddButtonClick(){
      const cartStore = useUniqueStore();
      return cartStore.addProduct(this.product)
    }

  }
}
</script>

<template>
    <RouterLink :to="{ name: 'product-details', params: { id: product.id } }" >
        <div @click="onAddButtonClick">
      <v-img src="https://www.goral-shoes.co.uk/cdn/shop/files/P1300233_400x.jpg?v=1698056481" cover
        height="220px"  class="enlarge-on-hover" style="transition: transform 0.3s ease-in-out;" />
    </div>
    </RouterLink>

    <div style="
    display: flex;
    flex-direction: column;
    align-items: center; /* Centrar verticalmente */
    justify-content: center; /* Centrar horizontalmente */
" :elevation="0">
<RouterLink  custom  :to="{ name: 'product-details', params: { id: product.id } }">
        <button @click="onAddButtonClick" >
            <p style="
        background-color: transparent;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: 11px;
        letter-spacing: 0.1em;
         /* Centrar horizontalmente */
        line-height: 1.5; /* Centrar verticalmente */
       " class="mt-2">{{ product.name }}</p>

        </button>
</RouterLink>
        <RouterLink  custom  :to="{ name: 'product-details', params: { id: product.id } }">
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
            color : #6a6a6a ; " class=" mt-2"> s/. {{ product.price }}.00 </p>
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