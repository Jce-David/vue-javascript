<script lang="ts" >
import type { PropType } from 'vue';
import type { Image } from '../../model/types';

export default {
    props: {
        image: {
            type: Object as PropType<Image>,
            required: true
        }
    },
    computed: {
        imageCollageOnAdd() {
            return this.image.imageCollage ?? "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        }
    }
}

</script>

<template>
    <div class="silhouette-container " >
        <v-img   :src="imageCollageOnAdd" cover height="500px" class="silhouette-image  " />
        <div class="text-overlay">
      <RouterLink to="/product" custom v-slot="{ navigate }">
        <button @click="navigate">
          <p class="text-medium"> {{ image.title }} </p>
        </button>
      </RouterLink>
    </div>

    </div>
        
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');

.silhouette-container {
  position: relative;
}

.silhouette-image {
  filter: brightness(60%); /* Ajusta este valor para controlar la oscuridad */
  width: 100%;
  height: auto;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2; /* Texto por encima de la imagen */
}

.text-medium {
  color: white;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  font-weight: 500;
  font-style: normal;
  font-size: 22px;
  letter-spacing: .2em;
  text-transform: uppercase;
  line-height: 1.2;
}


</style>