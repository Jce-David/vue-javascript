<script lang=ts >

import TopBarEjemplo from '@/components/TopBarEjemplo.vue';
import FooterMain from '@/components/FooterMain.vue'
import NosotrosMain from '@/components/Nosotros/NosotrosMain.vue'
import ContactUs from '@/components/Contact/ContactUs.vue';


export default {
    beforeRouteEnter(to, from, next) {
    // Antes de entrar en la nueva ruta, ajusta la posición del scroll al inicio
    window.scrollTo(0, 0);
    next();
  },
    components: {
    FooterMain,
    TopBarEjemplo,
    ContactUs
}
}
</script>

<template>
<TopBarEjemplo  />
<v-main>
  <ContactUs/>


</v-main>

  <FooterMain/>

  

</template>