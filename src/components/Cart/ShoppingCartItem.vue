
<script lang="ts">
import type { CartDetail } from '../../model/types';
import type { PropType } from 'vue';
import { mapActions } from 'pinia';
import { useCartStore } from '../../stores/cart';

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
            deleteProduct: 'deleteProduct'
        }),
    },
    computed: {

        productImageUrl() {
            return this.detail.product.imageProduct ?? "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        },
        subtotal() {
            return this.detail.product.price * this.detail.quantity
        },
    },
}

</script>                           
    
<template  >
    <div class="my-6  " >
 <div class=" ml-2  " style="display: flex; justify-content: space-between; align-items: center;">
  <span></span>
  <v-icon class="mb-1 " color="#1c1b1b"  size="large" style="border-radius: 0%; background-color: transparent;" icon="mdi-close-box-outline" :elevation="0" @click="deleteProduct(detail.product.id,  detail.product.talla)"/>
</div>
    <v-row>
        <v-col :cols="12" :xs="12" :sm="4" :md="4" :xl="4">
            <div class="my-a  ">
                <v-img  cover :src="productImageUrl" height="200px" />
            </div>
        </v-col>
        <v-col :cols="12" :xs="12" :sm="4" :md="4" :xl="4">
            <p class="text-negrita  "> {{ detail.product.name }}</p>
            <p class="mt-4"> TALLA: {{ detail.product.talla }}</p>
        </v-col>
        <v-col :cols="12" :xs="12" :sm="2" :md="2" :xl="2">
            <p class=" text-negrita2 ">Precio</p>
            <p class=" mt-1 text-negrita2"> S/. {{ detail.product.price }} </p>
        </v-col>
        <v-col :cols="12" :xs="12" :sm="2" :md="2" :xl="2">
            <p class=" text-negrita2 ">Cantidad</p>
            <div class=" mt-2  mr-10 ">
                <div class="quantity-control">
                    <button class="quantity-control__less" :elevation="0"
                        @click="decrementQuantity(detail.product.id,  detail.product.talla)">-</button>
                    <p class="quantity-control__quantity mx-a">{{ detail.quantity }}</p>
                    <button class="quantity-control__plus" :elevation="0"
                        @click="incrementQuantity(detail.product.id,  detail.product.talla)">+</button>
                </div>         
            </div> 
        </v-col>
        <v-divider height="12" color="#1c1b1b" > </v-divider>
    </v-row>
</div>
</template>

<style>
.border-div {
    border: 1px solid #1c1b1b;
}

.border-class {
    border: 1px solid #1c1b1b
}

.text-negrita {
    color: #1c1b1b;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    font-weight: 500;
    font-style: normal;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    line-height: 1.2em;

}

.text-negrita2 {
    color: #1c1b1b;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    font-weight: 500;
    font-style: normal;
    font-size: 1.em;

    line-height: 1.2em;

}

.border-image {
    border: 1px solid #BDBDBD;
}

.quantity-control {
    width: 84px;
    height: 35px;
    display: flex;
    justify-content: space-between;
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