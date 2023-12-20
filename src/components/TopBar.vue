<script lang="ts" >
import { mapActions } from 'pinia';
import { mapState } from 'pinia';
import { useScrollingStore } from '@/stores/scrolling'
export default {
    computed: {
        ...mapState(useScrollingStore, ['offSetTop', 'isHovering']),
        isHoveringColor() {
            // isHovering es true cuando el sistema de barras desaparece (offSetTop > 4)
            return this.offSetTop > 4
        },
    },
    methods: {
        ...mapActions(useScrollingStore, ['onScroll']),
        activateHover() {
      // Activa el hover cuando el mouse entra
      this.isHovering = true;
    },
    deactivateHover() {
      // Desactiva el hover cuando el mouse sale
      this.isHovering = false;
    },
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);

    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    },

}

</script>



<template>
    <v-hover v-slot:default="{ isHovering, props }" @mouseenter="activateHover" @mouseleave="deactivateHover" >
        <v-app-bar 
        v-bind="props" 
        :color="isHovering || isHoveringColor ?  'white' : '#FFFFFF00' " 
        :dark="isHovering " 
     
        text="white" 
        :elevation="1"
        height="70">
            <v-container>
                <v-row class=" text-h4 hidden-sm-and-down">
                    
                    <v-tabs>
                        <RouterLink custom v-slot="{ navigate }" to="/product">
                            <v-tab @click="navigate" :ripple="false" :style="{ color: isHovering || isHoveringColor ? 'black' : 'white' }">
                                <p> Productos </p>
                            </v-tab>
                        </RouterLink>
                        <RouterLink custom v-slot="{ navigate }" to="/account">
                            <v-tab @click="navigate" :ripple="false" :style="{ color: isHovering || isHoveringColor ? 'black' : 'white' }">
                                <p> Quienes Somos </p>
                                <v-icon class="hidden-md-and-up " icon="mdi-account" />
                            </v-tab>

                        </RouterLink>
                        <RouterLink custom v-slot="{ navigate }" to="/contact">
                            <v-tab @click="navigate" :ripple="false" :style="{ color: isHovering || isHoveringColor ? 'black' : 'white' }">
                                <p> Contacto </p>
                                <v-icon class="hidden-md-and-up " icon="mdi-account" />
                            </v-tab>

                        </RouterLink>


                    </v-tabs>

               
                    <v-spacer></v-spacer>
                    <p v-if="isHoveringColor" :style="{ color: isHovering || isHoveringColor ? 'black' : 'white' }" class=" text-center pt-4 ml-1">Logo</p>
                    <v-spacer></v-spacer>
                </v-row>
            </v-container>
        </v-app-bar>
    </v-hover>
</template>

