<script lang="ts" >
import SocialCompliance from '@/components/Pages/SocialCompliance.vue'
import TopBarEjemplo from '@/components/TopBarEjemplo.vue';
import FooterMain from '@/components/FooterMain.vue'
export default { 
    components: {
    TopBarEjemplo,
    SocialCompliance,
    FooterMain
}
}
</script>

<template>
    <TopBarEjemplo/>
    <v-main>
        <SocialCompliance />
    </v-main>
<FooterMain/>
</template>