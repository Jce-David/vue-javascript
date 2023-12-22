<script lang=ts >
import ProductList from '@/components/Products/ProductList.vue';
import  TopBarComplement from '@/components/TopBarComplement.vue';


export default {
    components: {
    ProductList,
    TopBarComplement
}
}
</script>

<template>
<TopBarComplement  />
<v-main style="background-color: #f2f2f2;" >
    <ProductList   />
</v-main>
  


</template>