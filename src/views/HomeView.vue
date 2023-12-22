<script lang="ts">
import  TopBar from '@/components/TopBar.vue';
import TopBarLogo from '@/components/TopBarLogo.vue';
import CartelMain from '@/components/CartelMain.vue';
export default {
components: {
    TopBar,
    CartelMain
}
}

</script>

<template>
    <v-parallax  cover  src="/calzado.png"
      >
    <TopBar />
    <CartelMain  />
    </v-parallax> 
</template>
