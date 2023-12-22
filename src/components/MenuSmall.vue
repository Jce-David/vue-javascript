<script lang="ts">
export default {
  data() {
    return {
      tops: [
        { name: 'home', id: 1 },
        { name: 'product', id: 2 },
        { name: 'about', id: 3 }, // Cambiado de 'account' a 'about' para que coincida con el enrutador
        { name: 'contact', id: 4 }
      ]
    };
  }
};
</script>
<template>
    <v-container class="mx-auto d-flex align-center justify-center pa-2" color="primary">
      <RouterLink v-for="top in tops" :key="top.id" :to="`/${top.name.toLowerCase()}`" custom v-slot="{ navigate }">
        <v-btn size="small" :active="$route.name === top.name" variant="text" @click="navigate">
          {{ top.name.charAt(0).toUpperCase() + top.name.slice(1) }}
        </v-btn>
      </RouterLink>
    </v-container>
  </template>
  