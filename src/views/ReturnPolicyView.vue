<script lang="ts" >
import ReturnPolicy from '@/components/Pages/ReturnPolicy.vue'
import TopBarEjemplo from '@/components/TopBarEjemplo.vue';
import FooterMain from '@/components/FooterMain.vue'
export default { 
    components: {
    TopBarEjemplo,
    ReturnPolicy,
    FooterMain
}
}
</script>

<template>
    <TopBarEjemplo/>
    <v-main>
        <ReturnPolicy />
    </v-main>
<FooterMain />
</template>