<script lang="ts" >
import ProductConstruction from '@/components/Pages/ProductConstruction.vue'
import TopBarEjemplo from '@/components/TopBarEjemplo.vue';
import FooterMain from '@/components/FooterMain.vue'
export default { 
    components: {
    TopBarEjemplo,
    ProductConstruction,
    FooterMain
}
}
</script>

<template>
    <TopBarEjemplo/>
    <v-main>
        <ProductConstruction />
    </v-main>
    <FooterMain />
</template>