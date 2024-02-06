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

            <v-btn :elevation="0" color="rgb(255, 30, 0)"  :href="whatsAppLink"     target="blank" 
            class=" mt-6 border-card  justify-center"  >
               
              <p class=" text-resumen1  button-hover  my-2 " color="white" >Comprar</p>
    
           </v-btn>
  
</template>


<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');


 .hoverable-btn:hover {
  background-color: rgb(80, 80, 80);
  color: rgb(80, 80, 80);
}

.button { 
  color:  rgb(80, 80, 80);
  position: relative;
  display: inline-block;
  line-height: normal;
  text-transform: uppercase;
  font-size: 0.9em;
  text-align: left;
  font-family: Montserrat,sans-serif;
  font-weight: 500;
  font-style: normal;
}


.border-card {
   width: 100vw;
   height: 60px;
    border: 1px solid rgb(255, 30, 0);
    background-color:rgb(255, 30, 0) ;
}

.text-resumen {
    color: rgb(80, 80, 80);
    position: relative;
  display: inline-block;

  line-height: normal;

  border-radius: 0;
  text-transform: uppercase;
  font-size: 0.8em;
  text-align: center;

  font-family: Montserrat,sans-serif;
  font-weight: 500;
  font-style: normal;
}
.text-resumen1 {
    color: white;
    position: relative;
  display: inline-block;

  line-height: normal;

  border-radius: 0;
  text-transform: uppercase;
  font-size: 1em;
  text-align: center;

  font-family: Montserrat,sans-serif;
  font-weight: 500;
  font-style: normal;
}


</style>