

<script lang="ts" >

export default {
  data() {
    return {
      URL_DEL_VIDEO: "/tu-video.mp4",
    }
  }
}



</script>
<template>
  <v-container>
    <v-carousel cycle :interval="1500" hide-delimiters show-arrows="hover" height="340px"
      style=" width: 100%;  background-color: transparent;">
      <v-carousel-item cover
        src="https://images.unsplash.com/photo-1569617084133-26942bb441f2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      </v-carousel-item>
      <v-carousel-item cover
        src="https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGdydXBvJTIwZGUlMjBhbWlnb3N8ZW58MHx8MHx8fDA%3D">
      </v-carousel-item>
      <v-carousel-item cover
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D">
      </v-carousel-item>
    </v-carousel>

    <v-row class="mt-4">
      <v-col :cols="12" :sm="12" :md="6" :lg="6" :xl="6">
        <v-card style="  height: 30vh; text-align: center; display: flex; align-items: center; justify-content: center;"
          class=" text-center" color="#FFFFFF00" :elevation="0">
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
    <video cover width="100%" height="100%" controls>
      <source :src="URL_DEL_VIDEO" type="video/mp4">
      Tu navegador no soporta el elemento de video.
    </video>
  </v-col>
</v-col>







    </v-row>

  </v-container>
</template>
<style></style>