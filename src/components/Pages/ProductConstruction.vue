
<script lang="ts" >

export default {
    data(){
        return {
            content: [ 
                { title: 'Detrás de cada Producto', image: '/Pages/cortado.jpg' , id: 1,  text: ' Cada artículo de Alpaca Hugs es cuidadosamente confeccionado por nuestros talentosos artesanos, quienes emplean técnicas tradicionales y materiales de la más alta calidad para garantizar que cada producto sea verdaderamente único y especial. Nos esforzamos por brindarte no solo un par de pantuflas, sino una obra maestra artesanal que elevará tu experiencia de comodidad y estilo a un nivel superior. Con Alpaca Hugs, puedes confiar en que estás recibiendo lo mejor de lo mejor: productos que no solo abrazan tus pies con suavidad y calidez, sino que también reflejan el compromiso de nuestra marca con la excelencia y la autenticidad.'  },
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
