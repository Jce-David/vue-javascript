<script lang="ts">
import { useUniqueStore } from '../../stores/unique';
import type { CartDetail } from '../../model/types';
import type { PropType } from 'vue';
import { useCartStore } from '../../stores/cart'

import { mapState } from 'pinia';
import { useProductsStore } from '../../stores/products';
import ShoppingCart from '@/components/Cart/ShoppingCart.vue';
import summaryCart from '@/components/Cart/summaryCart.vue';


export default {

  props: {
    detail: {
      type: Object as PropType<CartDetail>,
      required: true
    }
  },
  data() {
    return {
      selectedTalla: [],
    };
  },
  computed: {
    ...mapState(useProductsStore, ['products']),

    detailsProduct() {
      const cartStore = useUniqueStore();
      return cartStore.detailsProduct;
    },
    imageShopCart() {
      return this.detail.product.imageProduct;
    },
    imageShopCart2() {
      return this.detail.product.imageProduct2;
    },
    imageShopCart3() {
      return this.detail.product.imageProduct3;
    },
    imageShopCart4() {
      return this.detail.product.imageDemostration;
    },
    imageShopCart5() {
      return this.detail.product.imageDemostration2;
    }
  },
  methods: {
    onAddButtonClick() {
    
      const cartStore = useCartStore();
      return cartStore.onAddProduct({
        ...this.detail.product,
        talla: this.selectedTalla[this.detail.product.id],
      });
    },
  },
}
</script>

<template  >
  <v-row class=" mx-4 my-8 ">
    <v-col :cols="12" :xs="12" :sm="12" :md="1" :lg="1" :xl="1"></v-col>
    <v-col :cols="12" :xs="12" :sm="12" :md="5" :lg="6" :xl="6">
      <v-img :src="imageShopCart"  class=" hidden-sm-and-down  mb-4" height="420px" />
   

      <div>

      </div>
      <v-img :src="imageShopCart"  style=" width: 100%;  background-color: transparent;"   class=" hidden-md-and-up  mb-4" height="280px" />
  

    </v-col>
    <v-col :cols="12" :xs="12" :sm="12" :md="6" :lg="3" :xl="3">
      <div class=" mt-6 mb-16  sticky-size-system  ">
        <p class="name-product">{{ detail.product.name }} </p>
        <p class=" mt-2 name-price"> S/.{{ detail.product.price }}</p>

        <v-select  class="mt-2"  v-model="selectedTalla[detail.product.id]" :items="detail.product.talla"
          label="Talla"></v-select>
                      
        <v-sheet height="60" class=" mb-6  d-flex align-center text-center justify-center"
          style="background-color:#1c1b1b ;">
          <p class="ma-2" style="font-family: Montserrat,sans-serif; 
            margin: 0; 
            font-weight: 500;
            font-size: 10px;
            font-style: normal;
            color: white;
            letter-spacing: 0.1em;
            text-transform: uppercase;">SUS CALZADOS SERÁN ENVIADOS DENTRO DE 3-5 DÍAS LABORABLES</p>

        </v-sheet>
      
        <v-btn :elevation="0" block height="46" class=" mt-n2 d-flex align-center text-center justify-center"
          style="background-color: #01bd00;" @click="onAddButtonClick">
          <p class=" button-hover mt-4  " style="font-family: Montserrat,sans-serif; 
            margin: 0;
            padding: 0;
            height: 30px ;                                                                                  
            font-size: 0.9em ;
            font-style: normal;  
            color: #fff;
            letter-spacing: 0.3em;
            text-transform: uppercase;">AGREGAR AL CARRITO - S/.{{ detail.product.price }}</p>
        </v-btn>
        <v-expansion-panels class="mt-4">
          <v-expansion-panel :elevation="0" style="
       background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 13px;
  color: #1c1b1b;
      background-color: rgb(242, 242, 242)"  >
      <v-expansion-panel-title
      >
        <p >Sobre las Tallas</p>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div>
          <p class="my-4" >Nuestras tallas  </p>
    <table>
      <thead>
        <tr
        style="
       background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 13px;
  color: #1c1b1b;
      background-color: rgb(242, 242, 242)" >
          <th
          >Talla</th>
          <th>Medida por dentro </th>

        </tr>
      </thead>
      <tbody>
        <tr >
                <td>36</td>
                <td>25.5 cm</td>
        </tr>
        <tr >
                <td>37</td>
                <td>26 cm</td>
        </tr>
        <tr >
                <td>38</td>
                <td>27 cm</td>
        </tr>
        <tr >
                <td>39</td>
                <td>27.5 cm</td>
        </tr>
        <tr >
                <td>40</td>
                <td>28.5 cm</td>
        </tr>
        <tr >
                <td>41</td>
                <td>29 cm</td>
        </tr>
        <tr >
                <td>41</td>
                <td>29.5 cm</td>
        </tr>
        <tr >
                <td>43</td>
                <td>30 cm</td>
        </tr>
        
      </tbody>
    </table>
  </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels class="mt-2">
          <v-expansion-panel :elevation="0" style="
       background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 13px;
  color: #1c1b1b;
      background-color: rgb(242, 242, 242)">
       <v-expansion-panel-title
      >
        <p >Materiales del Producto</p>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
       
          <p class="my-4 mr-10" >
            Nuestro compromiso con el cuero de la más alta calidad.
          </p>
          <p>
            Materiales: 
          </p>
         <p>
          - Cuero de Ovino (Capellada),
         </p>
         <p>
          - Cuero de lana de Ovino 100% ( Por dentro) ,
         </p>
         <p>
          - cuero de Alpaca 100% ( Bordes)
         </p>
         <p>
          - Suela de Res Antideslizante
         </p>
      </v-expansion-panel-text>
    
    </v-expansion-panel>
        </v-expansion-panels>
       
        <v-expansion-panels class="mt-2">
          <v-expansion-panel :elevation="0" style="
       background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 13px;
  color: #1c1b1b;
      background-color: rgb(242, 242, 242)">
      <v-expansion-panel-title
      >
        <p >Formas de envío</p>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
       
        <p
          
          style="
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
  font-style: normal;
  font-size: 15px;  " class="my-2 mr-10 " >
            Lima:
          </p>
          <p>
            Envíos gratis para Lima Metropolitana.
          </p>
          <p
          
          style="
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
  font-style: normal;
  font-size: 15px;  " class="my-2 mr-10 " >
            Provincia:
          </p>
          <p  >
            Envíos con un costo adicional de S./ 8.00
          </p>
      </v-expansion-panel-text>
      </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-col>
    <v-col    :cols="12" :xs="12" :sm="12" :md="6" :lg="3" :xl="3">

    </v-col>
  </v-row>
  

</template>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');

.name-price {
  background-color: transparent;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 0.2em;
  /* Centrar horizontalmente */
  line-height: 1.5;
  /* Centrar verticalmente */
  color: #6a6a6a;
}

.sticky-size-system {
  position: sticky;
  top: 110px;
  /* Ajusta la distancia desde la parte superior según sea necesario */
  inline-size: 100%;
  /* O ajusta al ancho deseado */
  z-index: 1;
}

.name-product {
  background-color: transparent;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #1c1b1b;
  /* Centrar horizontalmente */
  line-height: 1.5em;
  /* Centrar verticalmente */
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>