<script lang="ts" >
import type { Product } from '@/model/types.ts';
import type { PropType } from 'vue';
import { useProductsStore } from '@/stores/products';
import { mapState } from 'pinia';

export default {
    props: {
        product: {
            type: Object as PropType<Product>,
            require: true
        }
    },
    computed:  {
        ...mapState(useProductsStore, ['products'])
    }
}
</script>

<template>
    <v-card :elevation="0" style="border-bottom: 1px solid #E0E0E0;" >
        <v-img
        src="https://i.blogs.es/6a2f39/pedro-miralles/450_1000.jpeg"
        cover
        />
        <v-card-title>
            <h6>{{ product.name }}</h6>
            <h6>{{ product.price }}</h6>
        </v-card-title>
        
        <v-card-actions>
            <RouterLink to="/"  custom  v-slot="{navigate}" > 
                <v-btn  :elevation="0" color="red" @click="navigate" block >
                    Agregar al Carrito
                </v-btn>
            </RouterLink>
        </v-card-actions>
    </v-card>
</template>