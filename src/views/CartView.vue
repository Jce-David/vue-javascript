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

    <v-main  class="mb-16">
      <v-container>
        <v-row class="mx-8 mt-6 " >
        <v-col :cols="12" :sm="12" :md="12" :lg="12" :xl="12" >
          <ShoppingCart />
        </v-col>
        <v-col :cols="12" :sm="12" :md="12" :lg="12" :xl="12" >
          <summaryCart />
        </v-col>
      </v-row>
      </v-container>
   

  </v-main>
  <FooterMain/>
</template>


