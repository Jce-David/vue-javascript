<script lang="ts" >
import FrequentQuestions from '@/components/Pages/FrequentQuestions.vue'
import TopBarEjemplo from '@/components/TopBarEjemplo.vue';
import FooterMain from '@/components/FooterMain.vue'
export default { 
    components: {
    FrequentQuestions,
    TopBarEjemplo,
    FooterMain
}
}
</script>

<template>
    <TopBarEjemplo/>
    <v-main>
        <FrequentQuestions />
    </v-main>
<FooterMain />
</template>