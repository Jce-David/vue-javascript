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
    <v-system-bar height="32" class="justify-center text-align: center;" color="#facb0b" app hide-on-scroll
        v-if="offSetTop > 4 ? 0 : 2">
        <p style="font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            font-weight: 600;
            font-size: x-small;
            font-style: normal;
            color: #1c1b1b;
            letter-spacing: .2em;
            text-transform: uppercase;"> 
            delivery gratis hasta el 6 de agosto
        </p>
    </v-system-bar>
</template>
