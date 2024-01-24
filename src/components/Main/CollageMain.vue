<script lang="ts" >
import CollageMainCard from '../../components/Main/CollageMainCard.vue'
import { useCollageStore } from '../../stores/collage';
import { mapState } from 'pinia';

export default {
    components: {
        CollageMainCard
    },
    computed: {
        ...mapState(useCollageStore, ['images'])
    }
}
</script>

<template>

        <v-row class="mx-2 mb-6 " >
        <v-col :cols="6" :sm="6" :md="4" :lg="4" :xl="4" v-for="image in images" :key="image.id">
            <CollageMainCard :image="image"   />
        </v-col>
    </v-row>    


 


</template>
