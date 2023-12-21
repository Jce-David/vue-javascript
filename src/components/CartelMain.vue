
<script lang="ts" >

export default {
}
</script>

<template>

  <v-container >
    <div  style="position: relative; height: 100vh; text-align: center; display: flex; align-items: center; justify-content: center;" >
      <v-card class=" mt-10  text-center" color="#FFFFFF00" :elevation="0" >
      <div style="max-width: 70vh;"  >
      <p style="  color: white; 
            font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            font-weight: 500;
            font-style: normal;
            font-size: 2em;
            letter-spacing: .1em;
            text-transform: uppercase;
            line-height: 1.2;
            " class="mb-2  text-center"
            
            >Producto 100% Peruano
      </p>
      <p style="color: white; 
            font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            font-weight: 400;
            font-style: normal;
            font-size: 0.8em;
            letter-spacing: .1em;" class=" text-center">Lorem Ipsum is simply dummy text
        of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley
      </p>

    </div>
  
      <v-card-actions class="mt-2  justify-center">
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
    </v-card>
   


                                

    </div>
     
        
  </v-container>
</template>
<style scoped>
.hoverable-btn:hover {
  background-color: white;
  color: black;
}
</style>