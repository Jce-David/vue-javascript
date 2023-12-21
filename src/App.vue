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
      >

    <TopBar />
    <CartelMain   style="position: relative; width: 100%; height: 100vh; text-align: center; display: flex; align-items: center; justify-content: center;"/>
    </v-img>
  <RouterView />
  </v-app>
</template>

