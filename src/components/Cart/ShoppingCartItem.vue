
<script lang="ts">
import type { CartDetail } from '../../model/types';
import type { PropType } from 'vue';
import { mapActions } from 'pinia';
import { useCartStore } from '../../stores/cart';
import { useImageIndexStore } from '@/stores/Image';
export default {
    props: {
        detail: {
            type: Object as PropType<CartDetail>,
            required: true
        },
    },
    methods: {
        ...mapActions(useCartStore, {
            incrementQuantity: 'increment',
            decrementQuantity: 'decrement',
            deleteProduct: 'deleteProduct',
        }),
        ...mapActions( useImageIndexStore, ['setProductColor'] )
    },
    computed: {
        selectedColorIndex() {
      return useImageIndexStore().setProductColor;
    },
        imageShopCart() {
            console.log(this.detail.product.images);
const selectedProductId = this.detail.product.id; // Obtener el ID del producto seleccionado
const selectedColorIndex = this.selectedColorIndex[selectedProductId] ?? 0; // Obtener el índice de color seleccionado para el producto, o 0 si es null o undefined

return this.detail.product.images[selectedColorIndex];
        },
        productImageUrl() {
            return this.detail.product.images ?? "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        },
        subtotal() {
            return this.detail.product.price * this.detail.quantity
        },
    },
}

</script>                           
    
<template  >
    <div class="mt-6 " >
 <div class=" ml-3 " style="display: flex; justify-content: space-between; align-items: center;">

</div>
    <v-row>  
        <v-col  :cols="5" :xs="5" :sm="5" :md="5" :xl="5">
         
                <v-img   :src="imageShopCart" height="100px" />
      
        </v-col>
        <v-col  :cols="7" :xs="7" :sm="7" :md="7" :xl="7">
            <div  >
                <p  class="  text-resumen my-2  "> {{ detail.product.name }}</p>
           
            <p class=" text-resumen "> Talla: {{ detail.product.talla }}</p>
              <p class="  text-resumen ">Precio: S/. {{ detail.product.price }}</p>
       
                    <p class=" text-resumen ">Cantidad: </p>
          
                <div class=" mt-2 quantity-control">
                    <button class="quantity-control__less" :elevation="0"
                        @click="decrementQuantity(detail.product.id,  detail.product.talla)">-</button>
                    <p class="quantity-control__quantity mx-a">{{ detail.quantity }}</p>
                    <button class="quantity-control__plus" :elevation="0"
                        @click="incrementQuantity(detail.product.id,  detail.product.talla)">+</button>
                </div>     
              
                    <button  
                    class=" mt-4 text-resumen"
                     @click="deleteProduct(detail.product.id , detail.product.talla)"> 
                     Eliminar </button>
       
            </div> 
        </v-col>
        <v-divider height="15" color="transparent" > </v-divider>
    </v-row>
</div>
</template>


<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');

.border-div {
    border: 1px solid #1c1b1b;
}
.border-image{ 
    border: 1px solid  #1c1b1b
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
  font-family: Montserrat,sans-serif;
  letter-spacing: 0.08em;
  font-weight: 500;
  font-style: normal;

}

.border-class {
    border: 1px solid #1c1b1b
}





.quantity-control {
    width: 100vw;
    height: 35px;
    display: flex;
   
}

.quantity-control__less,
.quantity-control__plus {
    width: 35px;
    height: 35px;
    border-radius: inherit;
    border: 1px solid #1c1b1b;
    background-color: transparent;
    color: #000;
    font-size: 1em;
    text-align: center;
    line-height: 35px;
}

.quantity-control__quantity {
    width: 30px;
    height: 35px;
    border-radius: inherit;
    border-top: 1px solid #1c1b1b;
    border-bottom: 1px solid #1c1b1b;
    background-color: transparent;
    color: #000;
    font-size: 1em;
    text-align: center;
    line-height: 35px;
}
</style>