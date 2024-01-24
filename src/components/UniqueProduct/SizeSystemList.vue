<script lang="ts" >
import SizeSystemCard from './SizeSystemCard.vue';
import { mapState } from 'pinia';

import {  useTallasStore } from '../../stores/talla'


export default {
    computed: {
        ...mapState(useTallasStore, ['medidas']),
 },
    methods: {
    },
    components: { SizeSystemCard },
}

</script>

<template>
   <p  class="mt-4   mb-n2 " style="font-family: Montserrat,sans-serif; 
            margin: 0; 
            font-weight: 400;
            font-size: 14px;
            font-style: normal;
            color:  #6a6a6a;
            letter-spacing: 0.2em;
            " >TALLA</p>
            <SizeSystemCard class="mb-3 mt-4 "
             :medida="medida" cols="2" v-for="medida in medidas" :key="medida.id" />

</template>