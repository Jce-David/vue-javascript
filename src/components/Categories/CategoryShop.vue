<script lang="ts">
import { useProductsStore } from '@/stores/products';
import { mapActions } from 'pinia';
import { mapState } from 'pinia';
export default {
  data() {
    return {
      categories: [
      { name: 'Babuchas classic', id: 1, description: 'productos para u' },
      { name: 'Babuchas botin ', id: 2, description: 'productos para Oficina' },
      { name: 'slippers classic', id: 3, description: 'productos para computadora' },
      { name: 'slippers classic border', id: 4, description: 'productos para w' },
      ],
      expandedCategory:  null as number | null,
    }
  },
  methods: {

    
    goToCategory(categoryId: number) {
      this.$router.push({ name: 'category', params: { categoryId } })
      this.expandedCategory = categoryId;
    },

    clearCategory() {
      this.expandedCategory = null;
      this.$router.push({
        name: 'product',
      })
    },
    ...mapActions(useProductsStore, ['orderByPrice', 'orderByPriceDesc'])
  },
  computed: {
    ...mapState(useProductsStore, ['order']),
  }
}

</script>

<template>
 
  <div style="border: 1px solid black; color: #1c1b1b;" >

    <p > Categorías </p>
      <div>
        <div @click="clearCategory"
           :class="{ 'active-category': $route.name === 'product' }" 
           class="category-item ">
            <button block> Ver Todos </button>    
          </div>
          <div link v-for="category in categories" :key="category.id" @click="goToCategory(category.id)"
            :class="{ 'active-category': $route.name === 'category' && Number($route.params.categoryId) === category.id }"
            class="category-item">
            {{ category.name }}
          </div>

        </div>

  </div>
</template>
  
<style >
.category-item {
  cursor: pointer;
  padding: 8px;
  transition: background-color 0.3s;
}

.category-item:hover {
  background-color: #e0e0e0;
}

.active-category {
  background-color: #e0e0e0;
  /* Otros estilos que desees aplicar */
}
</style>
  