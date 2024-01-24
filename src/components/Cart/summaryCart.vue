<script lang="ts" >
import { mapState } from 'pinia';
import { useCartStore } from '@/stores/cart'

export default {
    computed: {
        ...mapState(useCartStore, {
            totalPrice: 'totalPrice',
            whatsAppLink:'whatsAppLink'
        }),
    },

}
</script>

<template>
    <div class="border-card mb-6 mt-2 ">
        <v-container>
            <p style="
                color: #1c1b1b;
                font-family: 'Montserrat', sans-serif;
                margin: 0;
                font-weight: 500;
                font-style: normal;
                font-size: 1.4em;
                line-height: 1em;
            "> Resumen de la compra </p>
             <div class="mt-4" style="display: flex; justify-content: space-between; align-items: center;">
                <p class="text-resumen">Precio Delivery:</p>
                <p> GRATIS </p>
            </div>
            <div  style="display: flex; justify-content: space-between; align-items: center;">
                <p class="text-resumen">Precio Total:</p>
                <p> S/. {{ totalPrice }}</p>
            </div>
           
            <v-btn :href="whatsAppLink" target="_blank"  class=" mt-4   d-flex align-center text-center justify-center"  style="background-color: red   ;"   >
              <p class="  button-hover  my-2 " style="font-family: Montserrat,sans-serif; 
            margin: 0;
            padding: 0;
            font-weight: 500;
   
            font-size: 1.2em ;
            font-style: normal;  
            color: white  ;
          ">Comprar</p>
            </v-btn>

        </v-container>
    </div>
</template>


<style scoped>


 .hoverable-btn:hover {
  background-color: white;
  color: #1b0c0c;
}

.button { 
  color: white;
  position: relative;
  display: inline-block;
  padding: 14px 22px;
  line-height: normal;
  border: 1px solid #E2122F;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 0.8em;
  text-align: center;
  letter-spacing: .2em;
  font-family: Montserrat,sans-serif;
  font-weight: 500;
  font-style: normal;
  background-color: #E2122F;
}


.border-card {
    border: 1px solid #1c1b1b;
}

.text-resumen {
    color: #1c1b1b;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    font-weight: 500;
    font-style: normal;
    font-size: 1.1em;
    line-height: 1em;
}
</style>