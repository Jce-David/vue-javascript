<script lang="ts">
import { mapActions } from 'pinia';
import { mapState } from 'pinia';
import { useScrollingStore } from '@/stores/scrolling'

export default {

    computed: {
        ...mapState(useScrollingStore, ['offSetTop'])
    },
    methods: {
        ...mapActions(useScrollingStore, ['onScroll'])
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    },
};
</script>

<template>
        <v-app-bar color="white"  :elevation="0" height="70" app hide-on-scroll v-if="offSetTop > 8 ? 0 : 2">
    <v-row  class="fill-height align-center justify-center">
      <v-col>
        <p class=" text-h4  text-center  ml-1">Logo</p>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
