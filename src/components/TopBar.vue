<script lang="ts" >
import { mapActions } from 'pinia';
import { mapState } from 'pinia';
import { useScrollingStore } from '@/stores/scrolling'
export default {
    computed: {
        ...mapState(useScrollingStore, ['offSetTop', 'isHovering']),
        isHoveringColor() {
            // isHovering es true cuando el sistema de barras desaparece (offSetTop > 4)
            return this.offSetTop > 6
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
    <v-hover v-slot:default="{ isHovering, props }" @mouseenter="activateHover" @mouseleave="deactivateHover">
        <v-app-bar v-bind="props" :style="{ background: isHovering || isHoveringColor ? 'white' : '#FFFFFF00' }"
            :dark="isHovering" text="white" :elevation="1" height="50" class="transitional-app-bar" >
            <v-container>
                <v-row class=" text-h5">
                    <p class="pt-2 "
                        :style="{ color: isHovering || isHoveringColor ? 'black' : 'white', flex: '1', textAlign: 'center' }"
                        style="font-family: 'Montserrat', sans-serif; 
                                    font-weight: 500;
                                    font-style: normal;
                                    font-size: 0.6em;
                                    letter-spacing: 0.5em;
                                    text-transform: uppercase;"> SHEEP </p>
                                     <v-spacer></v-spacer>
                         <v-tabs   class="transitional-tabs" >
                        <RouterLink custom v-slot="{ navigate }" to="/">
                            <v-tab  class=" hidden-sm-and-down"  @click="navigate" :ripple="false"
                                :style="{ color: isHovering || isHoveringColor ? 'black' : 'white' }">
                                <p style="font-family: 'Montserrat', sans-serif; 
                                    margin: 0; 
                                    font-weight: 500;
                                    font-style: normal;
                                    font-size: 0.8em;
                                    letter-spacing: .0.5em;
                                    text-transform: uppercase;"> Inicio </p>
                            </v-tab>
                        </RouterLink>
                        <RouterLink custom v-slot="{ navigate }" to="/product">
                            <v-tab class=" hidden-sm-and-down"  @click="navigate" :ripple="false"
                                :style="{ color: isHovering || isHoveringColor ? 'black' : 'white' }">
                                <p  style="font-family: 'Montserrat', sans-serif; 
                                    margin: 0; 
                                    font-weight: 500;
                                    font-style: normal;
                                    font-size: 0.8em;
                                    letter-spacing: .0.5em;
                                    text-transform: uppercase;"> Productos </p>
                            </v-tab>
                        </RouterLink>
                        <RouterLink custom v-slot="{ navigate }" to="/account">
                            <v-tab  class=" hidden-sm-and-down" @click="navigate" :ripple="false"
                                :style="{ color: isHovering || isHoveringColor ? 'black' : 'white' }">
                                <p style="font-family: 'Montserrat', sans-serif; 
                                    margin: 0; 
                                    font-weight: 500;
                                    font-style: normal;
                                    font-size: 0.8em;
                                    letter-spacing: .0.5em;
                                    text-transform: uppercase;"> Quienes Somos </p>
                            </v-tab>
                        </RouterLink>
                        <RouterLink custom v-slot="{ navigate }" to="/contact">
                            <v-tab class="hidden-sm-and-down" @click="navigate" :ripple="false"
                                :style="{ color: isHovering || isHoveringColor ? 'black' : 'white' }">
                                <p  style="font-family: 'Montserrat', sans-serif; 
                                    margin: 0; 
                                    font-weight: 500;
                                    font-style: normal;
                                    font-size: 0.8em;
                                    letter-spacing: .0.5em;
                                    text-transform: uppercase;"> Contacto </p>
                            </v-tab>
                        </RouterLink>
                    </v-tabs>
                    
                    <v-icon class=" hidden-md-and-up mt-2 mr-10 " size="small" :style="{ color: isHovering || isHoveringColor ? 'black' : 'white' }" icon="mdi-menu" />
                </v-row>
            </v-container>
        </v-app-bar>
    </v-hover>
</template>

<style scoped>
.transitional-app-bar {
  transition: background-color 0.4s ease-in-out;
}
/* Ajusta el tiempo y el efecto de transición según tus preferencias */
</style>