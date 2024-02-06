
<script lang="ts" >

export default {
    data(){
        return {
            content: [ 
                { title: 'Nuestro Equipo', image: '/Pages/fotoproductos.png' , id: 1,  text: ' El equipo de Alpaca Hugs se esfuerza por brindar una experiencia de confort excepcional a través de nuestros productos. Nos dedicamos a crear pantuflas de ovino que no solo son visualmente atractivas, sino que también están diseñadas para abrazar tus pies con suavidad y calidez, proporcionando una sensación de comodidad incomparable.'  },
                { title: 'Compromisos', id: 2, image: '' , text: 'Nos comprometemos a ofrecer productos de alta calidad que garanticen la máxima satisfacción para nuestros clientes. Cada par de pantuflas de Alpaca Hugs está cuidadosamente confeccionado con materiales premium y técnicas artesanales, asegurando que cada paso que des sea una experiencia placentera y reconfortante.'  },
                { title: 'Nuestros Objetivos',  id: 3 , image: '' ,  text: 'Nuestro objetivo es que cada persona que use nuestras pantuflas sienta la calidez y el cariño con el que fueron creadas, transformando los momentos cotidianos en momentos de verdadero placer y bienestar. Con Alpaca Hugs, tus pies estarán siempre envueltos en una suave nube de confort, permitiéndote disfrutar de cada paso del camino.'  },
            ]
        }
    }

}
</script>

<template>     
 <div>
  <v-container>
    <div  v-for="item in content" :key="item.id">
      <p class="my-4" style="font-family: Montserrat, sans-serif;
              margin: 0;
              width: 60vw;
              font-weight: 500;
              font-size: 14px;
              font-style: normal;
              color: #1c1b1b;
              letter-spacing: 0.2em;
              text-transform: uppercase;" >{{ item.title }}</p>
      <p class="my-4"  style="color: rgb(80, 80, 80); 
            font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            font-weight: 400;
            font-style: normal;
            font-size: 0.8em;
            letter-spacing: .1em;" >{{ item.text }}</p>
            <v-img :src="item.image" >  </v-img>
    </div>
  </v-container>

  </div>       

</template>                                                                                                                     