<script lang="ts" >
import { useProductsStore } from '@/stores/products';
import { mapState } from 'pinia';
import ProductCard from './ProductCard.vue';


export default {
    components: {
        ProductCard
    },
    computed: {
        ...mapState(useProductsStore, ['products','loading']),
   
    },
    methods: {
        clearCategory(){
            this.$router.push({
                name: 'product',

            })
        },


    }
}
</script>

<template>


<v-container>
    <v-row  >      
            <v-col :cols="6" :sm="6" :md="4" :lg="4" :xl="4" v-for="product in products" :key="product.id">
                <ProductCard  :product="product" />
            </v-col>
        </v-row>   
</v-container>


  

  

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');

.div-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}



.Heading {
    font-size: 20px;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #1c1b1b;
    letter-spacing: -0.06em;
    text-transform: uppercase;
}

.text {
    color: #1c1b1b;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    font-weight: 400;
    font-style: normal;
    font-size: 11px;
    letter-spacing: .1em;
}</style>