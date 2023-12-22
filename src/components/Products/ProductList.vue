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
        <v-row>
            
            <v-col :cols="12" :sm="4" :md="4" :lg="3" :xl="3" v-for="product in products" :key="product.id">
                <ProductCard :product="product" />
            </v-col>
        </v-row>
    </v-container>
</template>