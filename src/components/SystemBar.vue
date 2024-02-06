<script lang="ts">
import { mapActions } from 'pinia';
import { mapState } from 'pinia';
import { useScrollingStore } from '.././stores/scrolling'

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
    <v-system-bar height="36" class="justify-center text-align: center;"   color="#ffcd03" app hide-on-scroll
        v-if="offSetTop > 2 ? 0 : 2">     
            <p style="font-family: Montserrat,sans-serif; 
            margin: 0; 
            color: #1c1b1b;
            font-weight: 500;
            font-size: 11px;
            font-style: normal;       
            letter-spacing: 0.1em;
            text-transform: uppercase
            ;" >  delivery gratis hasta el 16 de febrero </p>
           
    </v-system-bar>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');

</style>