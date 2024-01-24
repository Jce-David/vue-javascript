<script lang="ts">
import ShoppingCart from '.././components/Cart/ShoppingCart.vue';
import TopBarEjemplo from '.././components/TopBarEjemplo.vue';
import summaryCart from '.././components/Cart/summaryCart.vue';
import FooterMain from '../components/FooterMain.vue';

export default {
  beforeRouteEnter(to, from, next) {
    // Antes de entrar en la nueva ruta, ajusta la posición del scroll al inicio
    window.scrollTo(0, 0);
    next();
  },
  components: { FooterMain, summaryCart, ShoppingCart, TopBarEjemplo }
}
</script>

<template>
  <TopBarEjemplo />

    <v-main>
        <v-row class="mx-8 mt-6 " >
        <v-col :cols="12" :sm="12" :md="12" :lg="7" :xl="7" >
          <ShoppingCart />
        </v-col>
        <v-col  :lg="1" :xl="1"  >
        </v-col>
        <v-col :cols="12" :sm="12" :md="12" :lg="4" :xl="4" >
          <summaryCart />
        </v-col>
      </v-row>
      <CarrouselProduct />
  </v-main>
  <FooterMain/>
</template>


