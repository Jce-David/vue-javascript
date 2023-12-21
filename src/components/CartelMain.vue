
<script lang="ts" >

export default {
}
</script>

<template>
  <v-container style="width: 600px">
    <div class="text-center">
      <p style="color: white; 
            font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            font-weight: 500;
            font-style: normal;
            font-size: 2em;
            letter-spacing: .1em;
            text-transform: uppercase;" class="text-center">Producto 100% Peruano
      </p>
      <p style="color: white; 
            font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            font-weight: 400;
            font-style: normal;
            font-size: 0.8em;
            letter-spacing: .1em;" class="text-center">Lorem Ipsum is simply dummy text
        of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley
      </p>

    </div>
    <v-hover>
      <v-card-actions class="mt-2 d-flex justify-center">
          <router-link v-slot="{ navigate }" custom to="/product">
              <v-btn :ripple="false" color="white" @click="navigate" variant="outlined">
          <p style="color: white; 
        font-family: 'Montserrat', sans-serif; 
        margin: 0; 
        font-weight: 400;
        font-style: normal;
        font-size: 0.8em;
        letter-spacing: .1em;" class="text-center">
            Ver Productos
          </p>
        </v-btn>
      </router-link> 
    </v-card-actions> 

    </v-hover>

    
        
  </v-container>
</template>
<style scoped>
.hoverable-btn:hover {
  background-color: white;
  color: black;
}
</style>