<script lang="ts" >
import { mapActions } from 'pinia';
import { mapState } from 'pinia';
import { useScrollingStore } from '@/stores/scrolling'
import { defineComponent } from 'vue';

export default defineComponent (  {
    emits: ['mouseenter', 'mouseleave'],
    data() {
        return {
            isHoveringTop: '',
        }
    },
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
            this.$emit('mouseenter');
        },
        deactivateHover() {
            // Desactiva el hover cuando el mouse sale
            this.$emit('mouseleave');
        },
        setHoveredButton(buttonName: string) {
            this.isHoveringTop = buttonName;
        },
        clearHoveredButton() {
            this.isHoveringTop = '';
        },
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);

    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    },

})

</script>



<template>
    <v-hover v-slot:default="{ isHovering, props }" >
            <v-app-bar v-bind="props" :style="{ background: isHovering || isHoveringColor ? 'white' : '#FFFFFF00' }"
            :dark="isHovering" text="white" :elevation="1" height="60" class="transitional-app-bar">
            <v-container>
                <v-row class=" text-h5">
                    <RouterLink custom v-slot="{ navigate }" to="/">
                        <button :class="{ 'bottom-border': isHoveringTop === 'SHEEP' }" @mouseover="setHoveredButton('SHEEP')" @mouseleave="clearHoveredButton"  @click="navigate" class=" ml-7 ">
                            <p :style="{ color: isHovering || isHoveringColor ? 'black' : 'white', flex: '1', textAlign: 'center' }"
                                style="font-family: 'Montserrat', sans-serif; 
                                    font-weight: 500;
                                    font-style: normal;
                                    font-size: 0.6em;
                                    letter-spacing: 0.5em;
                                    text-transform: uppercase;"> SHEEP </p>
                        </button>
                    </RouterLink>
                    <v-spacer></v-spacer>

                    <RouterLink custom v-slot="{ navigate }" to="/">
                        <button style="
                               
                                padding: 0;
                                margin: 10px;
                                
                                align-items: center;" class=" u-h6 hidden-sm-and-down" @click="navigate"
                            :style="{ color: isHovering || isHoveringColor ? '#1c1b1b' : 'white' }"
                            :class="{ 'bottom-border': isHoveringTop === 'INICIO' }" @mouseover="setHoveredButton('INICIO')" @mouseleave="clearHoveredButton"
                            >
                            <p style="
                                font-family: 'Montserrat', sans-serif;
                                font-weight: 400;
                                font-style: normal;
                                font-size: 10px;
                                letter-spacing: 0.1em;
                                text-transform: uppercase;
                                margin: 0;"> Inicio </p>
                        </button>
                    </RouterLink>
                    <RouterLink custom v-slot="{ navigate }" to="/product">
                        <button style="                         
                                padding: 0;
                                margin: 10px;
                                align-items: center;" class=" u-h6 hidden-sm-and-down" @click="navigate"
                            :style="{ color: isHovering || isHoveringColor ? '#1c1b1b' : 'white' }"
                            :class="{ 'bottom-border': isHoveringTop === 'PRODUCTOS' }" @mouseover="setHoveredButton('PRODUCTOS')" @mouseleave="clearHoveredButton"
                            >
                            <p style="
                                font-family: 'Montserrat', sans-serif;
                                font-weight: 400;
                                font-style: normal;
                                font-size: 10px;
                                letter-spacing: 0.1em;
                                text-transform: uppercase;
                                margin: 0;">PRODUCTOS</p>
                        </button>
                    </RouterLink>
                    <RouterLink custom v-slot="{ navigate }" to="/account">
                        <button style="                              
                                padding: 0;
                                margin: 10px;                                
                                align-items: center;" class=" u-h6 hidden-sm-and-down" @click="navigate"
                            :style="{ color: isHovering || isHoveringColor ? '#1c1b1b' : 'white' }"
                            :class="{ 'bottom-border': isHoveringTop === 'NOSOTROS' }" @mouseover="setHoveredButton('NOSOTROS')" @mouseleave="clearHoveredButton"
                            >
                            <p style="
                                font-family: 'Montserrat', sans-serif;
                                font-weight: 400;
                                font-style: normal;
                                font-size: 10px;
                                letter-spacing: 0.2em;
                                text-transform: uppercase;
                                margin: 0;"> NOSOTROS </p>
                        </button>
                    </RouterLink>
                    <RouterLink custom v-slot="{ navigate }" to="/contact">
                        <button style="                              
                                padding: 0;
                                margin: 10px;                                
                                align-items: center;" class=" u-h6 hidden-sm-and-down" @click="navigate"
                            :style="{ color: isHovering || isHoveringColor ? '#1c1b1b' : 'white' }"
                            :class="{ 'bottom-border': isHoveringTop === 'CONTACTO' }" @mouseover="setHoveredButton('CONTACTO')" @mouseleave="clearHoveredButton"
                            >
                            <p style="
                                font-family: 'Montserrat', sans-serif;
                                font-weight: 400;
                                font-style: normal;
                                font-size: 10px;
                                letter-spacing: 0.2em;
                                text-transform: uppercase;
                                margin: 0;"> Contacto </p>
                        </button>
                    </RouterLink>

                    <button>
                        <v-icon class=" hidden-md-and-up mr-10 " size="small"
                            :style="{ color: isHovering || isHoveringColor ? '#1c1b1b' : 'white' }" icon="mdi-menu"
                          
                            />
                    </button>
                </v-row>
            </v-container>
        </v-app-bar>
 
    </v-hover>
</template>

<style scoped>
.transitional-app-bar {
    transition: background-color 0.4s ease-in-out;
}
.bottom-border::after {
  content: '';
  display: block;
  height: 2px;
  background-color: black;
}

.bottom-border {
  position: relative;
}
/*

/* Ajusta el tiempo y el efecto de transición según tus preferencias */
</style>