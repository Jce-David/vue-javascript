<script lang="ts">
import type { PropType } from 'vue';
import type { Talla } from '../../model/types';

export default {
  props: {
    medida: {
      type: Object as PropType<Talla>,
      required: true,
    },
  },
  methods: {
  },
};
</script>

<template>
  <div>
  </div>
  <button 
  class=" mr-2 custom-button"
 >
    <div>
      <p class="mx-3 my-3  text-medium " >{{ medida.talla }}</p>
    </div>
  </button>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');

.custom-button {
  background-color: transparent;
  color: #6a6a6a;
  border: 1px solid #BDBDBD;
  border-radius: 0px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  transition: background-color 0.2s ease, box-shadow 0.2s ease; /* Agrega transición para sombra al hacer clic */
}
.text-medium {
    background-color: transparent;
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 11px;
            letter-spacing: 0.1em;
           /* Centrar horizontalmente */
            line-height: 1.5 ; /* Centrar verticalmente */
            color : #1c1b1b ; 
}

.custom-button:hover {

  background-color:#E0E0E0;
}

.custom-button:focus {
  border: 1px solid #1c1b1b;

}

</style>
