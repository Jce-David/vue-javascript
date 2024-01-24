<script lang=ts >
import ProductList from '@/components/Products/ProductList.vue';
import FooterMain from '@/components/FooterMain.vue'
import TopBarEjemplo from '@/components/TopBarEjemplo.vue';
import { useProductsStore } from '@/stores/products';
import  CategoryShop  from '@/components/categories/CategoryShop.vue'


function updateCategoryFromRouteParams (categoryIdParam: string | string []){
  const productsStore = useProductsStore();
  const categoryId = Number(categoryIdParam);
  productsStore.selectCategory(categoryId)
}

export default {
  beforeRouteEnter(to, from, next) {
    // Antes de entrar en la nueva ruta, ajusta la posición del scroll al inicio
   
    window.scrollTo(0, 0);
    next();
    updateCategoryFromRouteParams(to.params.categoryId);
  },


  beforeRouteUpdate(to){
    console.log('beforeRouteUpdate', to.params);
    updateCategoryFromRouteParams(to.params.categoryId); 
  },
  mounted(){
    const productsStore = useProductsStore();
    productsStore.fetchProducts();
  },
  components: {
    ProductList,
    FooterMain,
    TopBarEjemplo,
    CategoryShop
  },


}
</script>

<template>
  <TopBarEjemplo />
  <v-main class="mt-2" style="background-color: #f2f2f2;">
    <ProductList />
  </v-main>
  <FooterMain />
</template>