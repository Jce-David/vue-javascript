<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import SystemBar from './components/SystemBar.vue'
import  TopBar from './components/TopBar.vue';
import TopBarLogo from './components/TopBarLogo.vue';
import CartelMain from './components/CartelMain.vue';
</script>

<template>
  <v-app>
    <SystemBar />
    <v-img cover  src="/calzado.png"
      class="d-flex align-center justify-center"
      style="position: relative;" >

    <TopBar />
    <CartelMain style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" />
    </v-img>
  <RouterView />
  </v-app>
</template>

