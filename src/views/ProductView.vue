<script lang=ts >
import ProductList from '@/components/Products/ProductList.vue';
import FooterMain from '@/components/FooterMain.vue'
import TopBarEjemplo from '@/components/TopBarEjemplo.vue';
import { useProductsStore } from '@/stores/products';
import CategoryShop from '@/components/Categories/CategoryShop.vue'


function updateCategoryFromRouteParams(categoryIdParam: string | string[]) {
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


  beforeRouteUpdate(to) {
    console.log('beforeRouteUpdate', to.params);
    updateCategoryFromRouteParams(to.params.categoryId);
  },
  mounted() {
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
    <v-container>
      <div class="  mt-2" style="display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;">
        <div style="max-width: 100vh;" class="div-center">
          <h1 class=" Heading ">Nuestros Productos</h1>
        </div>                                                                          
      </div>
    </v-container>
    <v-container>
      <v-row> 
    <v-col :cols="12" :sm="12" :md="12" :lg="2" :xl="2" >
      <CategoryShop />
    </v-col>
    <v-col :cols="12" :sm="12" :md="12" :lg="10" :xl="10" >
      <ProductList />
    </v-col>
  </v-row>
    </v-container>
 
  </v-main>
  <FooterMain />
</template>