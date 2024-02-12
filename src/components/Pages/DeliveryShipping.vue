
<script lang="ts" >

export default {
    data(){
        return {
            content: [ 
                { title: 'Sobre los envíos', image: 'https://i.pinimg.com/564x/02/e7/98/02e798a9811c3744b72f4dbeba1ab752.jpg' , id: 1,  text: 'En Alpaca Hugs, nos esforzamos por ofrecer un servicio de envío y entrega excepcional que satisfaga tus necesidades y expectativas. Nuestra política se centra en garantizar que recibas tus pedidos de manera rápida y eficiente, junto con la comodidad de nuestro exclusivo servicio de Pedido Express de 3 Tallas, sin costos adicionales.'  },
                { title: 'Envíos Rápidos y Confiables', id: 2,  text: 'Nos comprometemos a procesar y enviar tu pedido en el menor tiempo posible. Trabajamos con los mejores servicios de mensajería para garantizar que tus productos lleguen a tu puerta de manera segura y puntual.'  },
                { title: 'Seguimiento en Tiempo Real' , id: 3,  text: 'Mantenemos informados a nuestros clientes durante todo el proceso de envío. Una vez que tu pedido ha sido despachado, recibirás un número de seguimiento para que puedas rastrear tu paquete en tiempo real y estar al tanto de su ubicación en todo momento.'  },
                { title: 'Entrega Garantizada',   id: 4,  text: 'Entendemos la importancia de recibir tu pedido en perfectas condiciones y en el plazo acordado. Por eso, nos esforzamos por garantizar la entrega de tus productos de manera rápida y sin contratiempos.'  },
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