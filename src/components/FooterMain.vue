
<script lang="ts" >
export default {
  data: () => ({
    icons: [
      {paint: 'mdi-facebook', link:'https://www.facebook.com/profile.php?id=61555261324119', id: 1  },
      {paint: 'mdi-instagram',  link:'https://www.instagram.com/alpacahugs.pe/', id: 2  },
      {paint: 'mdi-youtube',  link:'https://www.youtube.com/channel/UCghLEYZPGT8og2y4ixRkf_A', id: 3   }
    ],
  }),
}
</script>

<template>
  <div style="height: 70vh width: 80vw ; background-color: #fff ;" >
  
      
    <v-row class="mx-10 mt-16">
      <v-col :cols="12" :sm="12" :md="6" :lg="6" :xl="6">
        <p class="titulo">
          Alpaca Hugs
        </p>
        <div class="mt-4">
          <p class="texto">
            Calzados Hecho a mano en Perú por artesanos peruanos.
          </p>
          <p class="texto">
            Directamente desde nuestro taller en Lima, Perú.
          </p>
          <p class="texto">
            Artesanos productores del Perú.
          </p>
          <div class="mr-4">
            <div style="display: inline-block;" v-for="icon in icons" :key="icon.id">
              <a  custom class="mx-2" :href="icon.link" target="_blank" >
             
                  <v-icon class="icon-color" >
                  {{ icon.paint }}
                  </v-icon>
          
              </a>
            </div>
          </div>
        </div>
      </v-col>
   
      <v-col :cols="12" :sm="12" :md="3" :lg="3" :xl="3">
        <p class="titulo">
          Explorar
        </p>
        <div class="mt-4 botones">
          <button class="texto_1">
            Nuestra Historia
          </button>
          <button class="texto_1">
            Construcción de Producto
          </button>
          <button class="texto_1">
            Detrás de cada Producto
          </button>
        </div>
      </v-col>
      <v-col :cols="12" :sm="12" :md="3" :lg="3" :xl="3">
        <p class="titulo">
          Información
        </p>
        <div class="mt-4 botones">
          <button class="texto_1">
            Envío y entrega
          </button>
          <button class="texto_1">
            Política de devolución/cambio 
          </button>
          <button class="texto_1">
            Preguntas más frecuentes
          </button>
          <button class="texto_1">
            Cumplimiento Social
          </button>
          <button class="texto_1">
            contáctenos
          </button>
        </div>
      </v-col>
    </v-row>
      <div class=" text-center mt-12 "  >
        <button class="mb-2 texto_2" color="transparent" dark>
    @ Alpaca Hugs 2024
      </button>
      </div>
    
  </div>

</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');

.icon-color {
  color:  #6b6b6b; /* Cambia 'green' por el color que desees */
}
.titulo {
  font-family: Montserrat, sans-serif;
              margin: 0;
              width: 60vw;
              font-weight: 500;
              font-size: 14px;
              font-style: normal;
              color: #ffcd03;
              letter-spacing: 0.2em;
              text-transform: uppercase; 
}

.botones button {
  display: block; /* Hace que los botones se muestren como bloques */
  margin-bottom: 10px;
}


  .icon{
    color: #6b6b6b;
  }
  .icon:hover{
    color: #333;
    background-color: transparent;
  }
  
  .texto {
    color: #6b6b6b; 
            font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            line-height: 3em;
            font-weight: 400;
            font-style: normal;
            font-size: 0.8em;
            letter-spacing: .1em;
  }
  .texto_1 {
    color: #6b6b6b; 
            font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            line-height: 1.8em;
            font-weight: 400;
            font-style: normal;
            font-size: 0.8em;
            letter-spacing: .1em;
            transition: color 0.3s;
  }
  .texto_1:hover{
    color: #000000;

  }
  .texto_2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1em;

  transition: color 0.3s;
}

.texto_2:hover {
  color: #ffcd03;
}
</style>