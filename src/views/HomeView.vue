<script lang="ts">
import CartelMain from '@/components/CartelMain.vue';

import TopBarEjemploMain from '@/components/TopBarEjemploMain.vue';
import BackgroundMain from '@/components/Main/BackgroundMain.vue'
import FooterMain from '@/components/FooterMain.vue'
import CartelImage from '@/components/Main/CartelImage.vue'
import { useCollageStore } from '@/stores/collage'

export default {
  beforeRouteEnter(to, from, next) {
    // Antes de entrar en la nueva ruta, ajusta la posición del scroll al inicio
    window.scrollTo(0, 0);
    next();
  },
  mounted() {
    const collageStore = useCollageStore();
    collageStore.fetchCollage();
  },
  components: {
    FooterMain,
    CartelMain,
    TopBarEjemploMain,      
    BackgroundMain,
    CartelImage

  }
}

</script> 

<template>

    <TopBarEjemploMain />

  <v-parallax  cover  src="calzado.png" >
   
    <CartelMain />
  </v-parallax>
 
  <BackgroundMain />
  <CartelImage />


  <FooterMain />
</template>
