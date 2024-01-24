<script lang="ts">
import { useUniqueStore } from '.././stores/unique';
import type { CartDetail } from '.././model/types';
import type { PropType } from 'vue';
import { useCartStore } from '.././stores/cart'
import { mapState } from 'pinia';
import { useProductsStore } from '.././stores/products';

export default {
  props: {
    detail: {
      type: Object as PropType<CartDetail>,
      required: true 
    }
  },
  data() {
  return {
    selectedTalla: []
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
    imageShopCart4(){
      return this.detail.product.imageDemostration;
    },
    imageShopCart5(){
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

<template>
  <v-row class=" mx-4 my-8 ">
    <v-col :cols="12" :xs="12" :sm="12" :md="6" :lg="7" :xl="7"  >
      <v-carousel :elevation="0" class="hidden-sm-and-down" hide-delimiters show-arrows="hover"  height="500px" style="background-color: transparent;"   >
  <v-carousel-item
    :src="imageShopCart"
  ></v-carousel-item>
  <v-carousel-item
    :src="imageShopCart2"
  ></v-carousel-item>
  <v-carousel-item
 :src="imageShopCart3"
  ></v-carousel-item>
 
</v-carousel>
<div>
 
    <v-img :src="imageShopCart4" cover  class=" hidden-sm-and-down  mb-4" height="800px" 
   />
 
 
    <v-img :src="imageShopCart5" cover  class=" hidden-sm-and-down my-4" height="800px"
   />
  </div>
      <v-carousel hide-delimiters show-arrows="hover"  height="340px" style="background-color: transparent;"  class="hidden-md-and-up  "  >
  <v-carousel-item
    :src="imageShopCart" 
  ></v-carousel-item>
  <v-carousel-item
    :src="imageShopCart2"
  ></v-carousel-item>
  <v-carousel-item
 :src="imageShopCart3"
  ></v-carousel-item>
</v-carousel>
    </v-col>
    <v-col :cols="12" :xs="12" :sm="12" :md="6" :lg="4" :xl="4">
      <div class=" mt-6 mb-16 mr-10 sticky-size-system  ">
        <p class="name-product">{{ detail.product.name }} </p>
        <p class=" mt-2 name-price"> S/. {{ detail.product.price }}</p>
      <v-select
      class="mt-2"
      v-model="selectedTalla[detail.product.id]"
      :items="detail.product.talla"
      label="Talla"
></v-select>

        <v-sheet height="60" class=" mb-6  d-flex align-center text-center justify-center"
          style="background-color:#FDD835 ;">
          <p class="ma-2" style="font-family: Montserrat,sans-serif; 
            margin: 0; 
            font-weight: 400;
            font-size: 10px;
            font-style: normal;
            color: #1c1b1b;
            letter-spacing: 0.2em;
            text-transform: uppercase;">SUS ZAPATOS SERÁN FABRICADOS Y ENVIADOS DENTRO DE 20-25 DÍAS LABORABLES</p>
        </v-sheet>

        <v-sheet class=" mt-n2 d-flex align-center text-center justify-center" style="background-color: #01bd00;">
          <RouterLink to="/cart">
            <button  block @click="onAddButtonClick">
              <p class=" button-hover mt-4 mb-2 " style="font-family: Montserrat,sans-serif; 
            margin: 0;
            padding: 0;
            height: 30px ;
            width: 480px ; 
            font-weight: 500;
            font-size: 0.9em ;
            font-style: normal;  
            color: #fff;
            letter-spacing: 0.3em;
            text-transform: uppercase;">AGREGAR AL CARRITO</p>
            </button>
          </RouterLink>
        </v-sheet>
       

    <v-expansion-panels class="mt-2"  >
      <v-expansion-panel
      :elevation="0"
      style="
       background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 13px;
  color: #1c1b1b;
      background-color: rgb(242, 242, 242)"
        title="Materiales del Producto "
        text="UPPER - Horween Chromexcel leather full grain 1.6-1.8mm / Full Grain Irish Shearling 1.3mm
OUTSOLE - TPS 70 Shore A
INSOCK - Full Grain Irish Shearling 1.3mm / Compressed Wool 0.8mm
LINING - Full Grain Irish Shearling 1.3mm
LACES - 100% Cotton
LAST - G1"
      ></v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels class="mt-2"  >
      <v-expansion-panel
      :elevation="0"
      style="
       background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 13px;
  color: #1c1b1b;
      background-color: rgb(242, 242, 242)"
        title="Forma de envíos"
        text="UPPER - Horween Chromexcel leather full grain 1.6-1.8mm / Full Grain Irish Shearling 1.3mm
OUTSOLE - TPS 70 Shore A
INSOCK - Full Grain Irish Shearling 1.3mm / Compressed Wool 0.8mm
LINING - Full Grain Irish Shearling 1.3mm
LACES - 100% Cotton
LAST - G1"
      ></v-expansion-panel>
    </v-expansion-panels>

      </div>
    </v-col>
    
  </v-row>
  <v-img src="https://milanobagsstore.com/assets/imagenes/silvana-diez.png" >

  </v-img>
  
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');

.sticky-size-system {
  position: sticky;
  top: 100px;
  /* Ajusta la distancia desde la parte superior según sea necesario */
  inline-size: 100%;
  /* O ajusta al ancho deseado */
  z-index: 0;
}

.name-price {
  background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 0.2em;
  /* Centrar horizontalmente */
  line-height: 1.5;
  /* Centrar verticalmente */
  color: #6a6a6a;
}

.name-product {
  background-color: transparent;
  font-family: 'Montserrat', sans-serif;
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
.v-carousel .v-btn--round {
    width: 20px;
    height: 20px;
  }

  .v-carousel  {
    font-size: 16px;
  }

</style>