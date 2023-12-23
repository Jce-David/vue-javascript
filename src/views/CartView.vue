<script lang="ts">
import ShoppingCart from '@/components/Cart/ShoppingCart.vue';
import TopBarComplement from '@/components/TopBarComplement.vue';
export default {
    ShoppingCart,
    components: { ShoppingCart, TopBarComplement }
}
</script>

<template>
    <TopBarComplement />
    <v-main>
  <ShoppingCart />
</v-main>
</template>
