<script lang="ts">
import ShoppingCart from '@/components/Cart/ShoppingCart.vue';
import summaryCart from '@/components/Cart/summaryCart.vue';

export default {
    components: { summaryCart, ShoppingCart, }
}
</script>

<template>
    <v-navigation-drawer>
        <v-main>
            <ShoppingCart />
        </v-main>
        <v-footer>
            <summaryCart />
        </v-footer>
    </v-navigation-drawer>
</template>


