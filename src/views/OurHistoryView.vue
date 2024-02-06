<script lang="ts" >
import OurHistory from '@/components/Pages/OurHistory.vue'
import TopBarEjemplo from '@/components/TopBarEjemplo.vue';
import FooterMain from '@/components/FooterMain.vue'
export default { 
    components: {
    OurHistory,
    TopBarEjemplo,
    FooterMain
}
}
</script>

<template>
    <TopBarEjemplo/>
    <v-main>
        <OurHistory />
    </v-main>
    <FooterMain />

</template>