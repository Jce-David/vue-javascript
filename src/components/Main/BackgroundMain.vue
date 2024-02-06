<script lang="ts" >

export default {
  data() {
    return {
      URL_DEL_VIDEO: "/tu-video-1.mp4",
      URL_DEL_VIDEO_MOVIL: "/tu-video.mp4",
    }
  }
};
</script>

<template>
  <v-sheet height="400" class="d-flex flex-column align-center justify-center " color="#1c1b1b">
   
  <div class="text-center">
    <p style="font-family: Montserrat, sans-serif;
              margin: 0;
              width: 60vw;
              font-weight: 500;
              font-size: 14px;
              font-style: normal;
              color: white;
              letter-spacing: 0.2em;
              text-transform: uppercase;">
      Envíanos un Whatsapp
    </p>
    <v-chip  variant="plain">
      <a 
      href="https://wa.link/s1smqg"
      target="_blank"
      style="font-family: Montserrat, sans-serif;
              margin: 0;
              width: 60vw;
              font-weight: 500;
              font-size: 14px;
              font-style: normal;
              color: white;
            " >click aquí...</a>
    </v-chip>
  </div>
</v-sheet>
  <v-container>
   
    <v-row class="my-4" >
      <v-col :cols="12" :sm="12" :md="6" :lg="6" :xl="6">
        <v-card style="  ;  height: 30vh; text-align: center; display: flex; align-items: center; justify-content: center;"
          class="   text-center" color="#FFFFFF00" :elevation="0">
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
            " class="mb-2 text-center">HECHO LOCALMENTE EN PERÚ
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
            " class="mb-2 text-center">¿CÓMO SE FABRICA?
            </p>
            <p style="color: rgb(80, 80, 80); 
            font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            font-weight: 400;
            font-style: normal;
            font-size: 0.8em;
            letter-spacing: .1em;" class=" text-center">Alpaca Hugs no solo se fabrica a mano en Perú,
             sino que todos sus componentes también se obtienen localmente. Para nosotros es importante apoyar a nuestra gente y economía local.
            </p>
          </div>
        </v-card>
      </v-col>

      <v-col class=" d-flex  justify-center" :cols="12" :sm="12" :md="6" :lg="6" :xl="6">
        
        <video
        class="hidden-sm-and-down"
        style=" width: 40vw ; height: 30vh; "
      
      v-bind:src="URL_DEL_VIDEO"
      v-bind:autoplay="true"
      v-bind:loop="true"
      v-bind:muted="true"
    ></video>
    <video
        class="hidden-md-and-up"
        style=" width: 80vw ; height: 50vh; "
      
      v-bind:src="URL_DEL_VIDEO_MOVIL"
      v-bind:autoplay="true"
      v-bind:loop="true"
      v-bind:muted="true"
    ></video>
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