<script lang="ts" >
import { useProductsStore } from '@/stores/products';
import { mapState } from 'pinia';
import ProductCard from './ProductCard.vue';

export default {
    components: {
        ProductCard
    },
    computed: {
        ...mapState(useProductsStore, ['products'])
    }
}
</script>

<template>
    <v-container>
    <div class="mb-8" style="display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;">
     <div style="max-width: 60vh;" class="div-center">
            <h1 class="u-h1 Heading  mb-3">BEST SELLERS</h1>
            <p  class=" text text-center">Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley
            </p>
        </div>

    </div>
       
 
        <v-row>
            <v-col :cols="12" :sm="4" :md="4" :lg="3" :xl="3" v-for="product in products" :key="product.id">
                <ProductCard :product="product" />
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

.u-h1 {
    font-size: 20px;
}

.Heading {
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-style: normal;
    color: #1c1b1b;
    transition: color .2s ease-in-out;
    letter-spacing: .2em;
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