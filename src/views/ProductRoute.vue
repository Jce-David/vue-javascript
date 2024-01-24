
<script lang="ts" >
import  TopBarEjemplo from '@/components/TopBarEjemplo.vue';
import ShoppingSelect from '@/components/UniqueProduct/ShoppingSelect.vue';
import FooterMain from '@/components/FooterMain.vue'
export default {
    beforeRouteEnter(to, from, next) {
    // Antes de entrar en la nueva ruta, ajusta la posición del scroll al inicio
    window.scrollTo(0, 0);
    next();
  },
    components: {
        FooterMain,
    ShoppingSelect,
    TopBarEjemplo
}
}

</script>

<template>
    <TopBarEjemplo />
    <v-main id="#app" >
        <ShoppingSelect  />
    </v-main>
  <FooterMain/>
</template>

<style>
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: hidden; /* Oculta el desplazamiento vertical */
  overflow-x: auto;   /* Muestra el desplazamiento horizontal si es necesario */

}</style>