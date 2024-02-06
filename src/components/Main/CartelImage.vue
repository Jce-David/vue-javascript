
<script lang="ts">

export default {

}


</script>


<template>
     <v-sheet height="400" class="d-flex flex-column align-center justify-center " color="#ffcd03">
  <div class="text-center">
    <p style="font-family: Montserrat, sans-serif;
              margin: 0;
              width: 60vw;
              font-weight: 500;
              font-size: 14px;
              font-style: normal;
              color: #1c1b1b;
              letter-spacing: 0.2em;
              text-transform: uppercase;">
      ¿Por qué es importante utilizar pantuflas de ovino en verano? 
    </p>
    <v-chip variant="plain">
      <router-link custom v-slot="{navigate}" to="/info-product" >
      <button @click="navigate"  style="font-family: Montserrat, sans-serif;
              margin: 0;
              width: 60vw;
              font-weight: 500;
              font-size: 14px;
              font-style: normal;
              color: #1c1b1b;
            " >click aquí...</button>
            </router-link>
    </v-chip>
  </div>
</v-sheet>




</template>