<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import SystemBar from './components/SystemBar.vue'
import  TopBar from './components/TopBar.vue';
import TopBarLogo from './components/TopBarLogo.vue';
import CartelMain from './components/CartelMain.vue';
</script>

<template>
  <v-app  >
    <SystemBar />
  <RouterView />
  </v-app>
</template>

