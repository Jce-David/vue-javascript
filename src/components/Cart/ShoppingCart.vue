<script lang="ts">
import { useCartStore } from '../../stores/cart'
import { mapState } from 'pinia';

import ShoopingCartItem from './ShoppingCartItem.vue';
import { useProductsStore } from '../../stores/products';
export default {
  components: { ShoopingCartItem },

  computed: {
    ...mapState(useCartStore, ['detailsCart']),
    ...mapState(useProductsStore, ['products'])
  },
}
</script>
<template>

      <div class="static-table" v-if="detailsCart.length > 0">
          <ShoopingCartItem :detail="detail" v-for="detail in detailsCart" :key="detail.product.id" />
      </div>
      <p class="mt-4"  style=" color: #1c1b1b;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    font-weight: 400;
    font-style: normal;
    font-size: 1em;
    line-height: 1.2em;" v-else>
        Aún no has agregado productos a tu carrito de compras.
        Haz <RouterLink to="/product"> click aquí </RouterLink> para ver los productos disponibles
      </p>


 
                                  

</template>

<style>


</style>