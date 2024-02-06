<script lang=ts >
import TopBarEjemplo from '@/components/TopBarEjemplo.vue';
import FooterMain from '@/components/FooterMain.vue'
import SobreMiCompra from '@/components/Account/SobreMiCompra.vue';
export default {
    beforeRouteEnter(to, from, next) {
    // Antes de entrar en la nueva ruta, ajusta la posición del scroll al inicio
    window.scrollTo(0, 0);
    next();
  },
    components: {
    FooterMain,
    TopBarEjemplo,
    SobreMiCompra
}
}
</script>

<template>
    <TopBarEjemplo />
<v-main>
  <SobreMiCompra />
</v-main>

 

  <FooterMain/>

  
</template>