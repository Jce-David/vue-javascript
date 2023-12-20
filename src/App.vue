<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import SystemBar from './components/SystemBar.vue'
import  TopBar from './components/TopBar.vue';
import TopBarLogo from './components/TopBarLogo.vue';
</script>

<template>
  <v-app>
    <SystemBar />
    <v-img cover src="/calzado.png">
      <TopBarLogo />
    <TopBar />

    </v-img>
    
  <RouterView />
  </v-app>
</template>

