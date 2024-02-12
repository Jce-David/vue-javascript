
<script lang="ts" >

export default {
    data(){
        return {
            content: [ 
                { title: 'Política de Devolución Sin Problemas', image: 'https://i.pinimg.com/564x/71/e6/a9/71e6a94a9351c0a28a2c07a36e7cf04c.jpg' , id: 1,  text: 'En [Nombre de la Empresa], nos esforzamos por garantizar la completa satisfacción de nuestros clientes. Si por alguna razón no estás satisfecho con tu compra, estamos aquí para ayudarte con nuestra política de devolución sin problemas. Nuestro compromiso es hacer que el proceso de devolución sea lo más conveniente posible para ti. Si necesitas devolver un artículo, simplemente contáctanos dentro de [número de días] días posteriores a la recepción de tu pedido y te proporcionaremos instrucciones detalladas sobre cómo proceder. Queremos que te sientas seguro y cómodo al realizar compras con nosotros, por lo que estamos aquí para resolver cualquier problema que puedas tener.'  },

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