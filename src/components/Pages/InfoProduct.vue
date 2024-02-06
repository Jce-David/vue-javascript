
<script lang="ts" >

export default {
    data(){
        return {
            content: [ 
                { title: 'Comodidad todo el año ', id: 1,  text: ' Las pantuflas de carnero están diseñadas para proporcionar comodidad y calidez en los pies, pero eso no significa que deban guardarse durante el verano. La suavidad del material y el acolchado brindan una sensación reconfortante sin importar la temporada'  },
                { title: 'Regulación de temperatura', id: 2,  text: 'Aunque asociamos las pantuflas de carnero con el calor, en realidad son bastante versátiles en términos de temperatura. El pelaje de carnero tiene propiedades naturales de regulación térmica, lo que significa que puede mantener tus pies frescos en climas cálidos al absorber la humedad y permitir la circulación de aire.'  },
                { title: 'Protección para pies sensibles', id: 3,  text: ' En verano, nuestros pies pueden estar expuestos a superficies calientes como el pavimento o la arena de la playa. Las pantuflas de carnero proporcionan una capa de protección suave y acolchada, lo que las hace ideales para proteger los pies sensibles del calor excesivo y posibles quemaduras.'  },
                { title: ' Estilo relajado', id: 4, text: '¿Quién dijo que el verano solo se trata de sandalias y chanclas? Las pantuflas de carnero pueden añadir un toque de estilo relajado y acogedor a tus outfits veraniegos en interiores. Son perfectas para relajarte en casa, en la cabaña o en una tarde fresca en el jardín.'  },
            ]
        }
    }

}
</script>

<template>     
 <div>
  <v-container>
    <div  v-for="item in content" :key="item.id">
      <p class="my-6" style="font-family: Montserrat, sans-serif;
              margin: 0;
              width: 60vw;
              font-weight: 500;
              font-size: 14px;
              font-style: normal;
              color: #1c1b1b;
              letter-spacing: 0.2em;
              text-transform: uppercase;" >{{ item.title }}</p>
      <p style="color: rgb(80, 80, 80); 
            font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            font-weight: 400;
            font-style: normal;
            font-size: 0.8em;
            letter-spacing: .1em;" >{{ item.text }}</p>
    </div>
  </v-container>

  </div>       

</template>                                                                                                                     