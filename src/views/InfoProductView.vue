<script lang="ts" >
import InfoProduct from '@/components/Pages/InfoProduct.vue'
import TopBarEjemplo from '@/components/TopBarEjemplo.vue';
import FooterMain from '@/components/FooterMain.vue'
export default { 
    components: {
    InfoProduct,
    TopBarEjemplo,
    FooterMain 
}
}
</script>

<template>
    <TopBarEjemplo/>
    <v-main>
        <InfoProduct />
    </v-main>
<FooterMain />
</template>