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
        <v-system-bar  height="22" class="justify-center text-align: center;" color="#facb0b" app hide-on-scroll v-if="offSetTop > 4 ? 0 : 2">
           <v-img src="" > </v-img>
            <p class="font-weight-medium" > ORDERS PLACED AFTER THE 28th OF NOVEMBER WILL NOT BE DISPATCHED UNTIL EARLY JANUARY </p> 
        </v-system-bar> 
</template>
