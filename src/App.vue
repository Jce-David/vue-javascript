<script  lang="ts">
import { RouterView } from 'vue-router'

import SystemBar from './components/SystemBar.vue'


export default { 
  components: {
    SystemBar,
    RouterView
  }, 
  emits: ['mouseenter', 'mouseleave'],

}
</script>

<template>
  <v-app  >
    <SystemBar />
  <RouterView />
  </v-app>
</template>

