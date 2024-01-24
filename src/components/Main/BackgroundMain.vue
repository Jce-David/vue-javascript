<script lang="ts" >

export default {
  data() {
    return {
      URL_DEL_VIDEO: "/tu-video.mp4",
    }
  }
};
</script>

<template>
  <v-container>
   
    <v-row class="my-4" >
      <v-col :cols="12" :sm="12" :md="6" :lg="6" :xl="6">
        <v-card style="  height: 30vh; text-align: center; display: flex; align-items: center; justify-content: center;"
          class=" mt-4  text-center" color="#FFFFFF00" :elevation="0">
          <div style="max-width: 100vw;">
            <p style="  color: #1c1b1b; 
            font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            font-weight: 500;
            font-style: normal;
            font-size: 0.8em;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            line-height: 1.2em;
            " class="mb-2 text-center">MADE LOCALLY IN SOUTH AFRICA
            </p>
            <p style="  color: #1c1b1b; 
            font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            font-weight: 500;
            font-style: normal;
            font-size: 1.6em;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            line-height: 1.2em;
            " class="mb-2 text-center">HOW ITS MADE
            </p>
            <p style="color: rgb(80, 80, 80); 
            font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            font-weight: 400;
            font-style: normal;
            font-size: 0.8em;
            letter-spacing: .1em;" class=" text-center">Jim Green is not only hand crafted in South Africa, but
              all components are also locally sourced. With an ever-climbing unemployment rate,
              it is important to us to support our local people and economy.
            </p>
          </div>
        </v-card>
      </v-col>

      <v-col class="d-flex align-center justify-center" :cols="12" :sm="12" :md="6" :lg="6" :xl="6">
  <v-col>
    <video  cover width="100%" height="100%" controls>
      <source :src="URL_DEL_VIDEO" type="video/mp4">
      Tu navegador no soporta el elemento de video.
    </video>
  </v-col>
</v-col>







    </v-row>
  </v-container>
  
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');

.transitional-app{
    transition: transform 0.6s ease-in-out
}


</style>