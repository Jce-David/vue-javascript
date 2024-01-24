
<script lang="ts" >

export default {

 

}
</script>

<template>

  <v-container class="mt-16" >
    <div  style="position: relative; height: 100vh; text-align: center; display: flex; align-items: center; justify-content: center;" >
      <v-card class=" mt-n16  text-center" color="#FFFFFF00" :elevation="0" >
      <div style="max-width: 70vh;"  >
      <p style="  color: white; 
            font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            font-weight: 500;
            font-style: normal;
            font-size: 2em;

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
            letter-spacing: .1em;" class="  mx-10 text-center">Lorem Ipsum is simply dummy text
        of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley
      </p>
    </div>
          <router-link v-slot="{ navigate }" custom to="/product">
              <button class=" hoverable-btn button  mt-5"  @click="navigate" variant="outlined">
            <a class=" text-center">
            Ver Productos
            </a>
          </button>
      </router-link> 

    </v-card>
  
    </div>
     
  
  </v-container>
</template>
<style >
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');


.hoverable-btn:hover {
  background-color: white;
  color: #1c1b1b;
}
.button { 
  color: white;
  position: relative;
  display: inline-block;
  padding: 14px 22px;
  line-height: normal;
  border: 1px solid white;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 0.8em;
  text-align: center;
  letter-spacing: .2em;
  font-family: Montserrat,sans-serif;
  font-weight: 500;
  font-style: normal;
  background-color: transparent;
}


</style>