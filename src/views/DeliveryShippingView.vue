<script lang="ts" >
import DeliveryShipping from '@/components/Pages/DeliveryShipping.vue'
import TopBarEjemplo from '@/components/TopBarEjemplo.vue';
import FooterMain from '@/components/FooterMain.vue'
export default { 
    components: {
    DeliveryShipping,
    TopBarEjemplo,
    FooterMain
}
}
</script>

<template>
    <TopBarEjemplo/>
    <v-main>
        <DeliveryShipping />
    </v-main>
<FooterMain />
</template>