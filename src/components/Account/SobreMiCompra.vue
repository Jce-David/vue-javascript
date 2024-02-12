
<script lang="ts" >

export default {
    data(){
        return {
            content: [ 
                { title: 'Política de Devolución Sin Problemas', image: 'https://i.pinimg.com/564x/71/e6/a9/71e6a94a9351c0a28a2c07a36e7cf04c.jpg' , id: 1,  text: 'En Alpaca Hugs, nos esforzamos por ofrecer un servicio de envío y entrega excepcional que satisfaga tus necesidades y expectativas. Nuestra política se centra en garantizar que recibas tus pedidos de manera rápida y eficiente, junto con la comodidad de nuestro exclusivo servicio de Pedido Express de 3 Tallas, sin costos adicionales.'  },
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