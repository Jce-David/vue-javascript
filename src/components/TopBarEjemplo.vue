<script lang="ts" >
import { mapActions } from 'pinia';
import { mapState } from 'pinia';
import { useScrollingStore } from '@/stores/scrolling'
export default {
    data() {
    return {
      isHovering: '',
    };
  },
  methods: {
    setHoveredButton(buttonName: string ) {
      this.isHovering = buttonName;
    },
    clearHoveredButton() {
      this.isHovering = '';
    },
  },
}

</script>



<template>
        <v-app-bar 
        text="white" :elevation="0" height="50" class="transitional-app-bar"
            >
            <v-container>
                <v-row class=" text-h5 mr-1 ">
                    <RouterLink custom v-slot="{ navigate }" to="/">
                    <button   :class="{ 'bottom-border': isHovering === 'SHEEP' }" @mouseover="setHoveredButton('SHEEP')" @mouseleave="clearHoveredButton" @click="navigate" class=" ml-5 " >
                        <p
                        
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
                                align-items: center;"
                                class=" hidden-sm-and-down" @click="navigate"
                                :class="{ 'bottom-border': isHovering === 'INICIO' }" @mouseover="setHoveredButton('INICIO')" @mouseleave="clearHoveredButton"
                              >
                                <p style="
                                font-family: 'Montserrat', sans-serif;
                                font-weight: 400;
                                font-style: normal;
                                font-size: 10px;
                                letter-spacing: 0.2em;
                                text-transform: uppercase;
                                margin: 0;">INICIO</p>
                            </button>
                        </RouterLink>
                        <RouterLink custom v-slot="{ navigate }" to="/product">
                            <button style="
                                padding: 0;
                                margin: 10px;
                                align-items: center;"
                                class=" hidden-sm-and-down" @click="navigate"
                                :class="{ 'bottom-border': isHovering === 'PRODUCTOS' }" @mouseover="setHoveredButton('PRODUCTOS')" @mouseleave="clearHoveredButton"
                              >
                                <p style="
                                font-family: 'Montserrat', sans-serif;
                                font-weight: 400;
                                font-style: normal;
                                font-size: 10px;
                                letter-spacing: 0.2em;
                                text-transform: uppercase;
                                margin: 0;">PRODUCTOS</p>
                            </button>
                        </RouterLink>
                        <RouterLink custom v-slot="{ navigate }" to="/account">
                            <button style="
                                padding: 0;
                                margin: 10px;
                                align-items: center;"
                                class=" hidden-sm-and-down" @click="navigate"
                                :class="{ 'bottom-border': isHovering === 'NOSOTROS' }" @mouseover="setHoveredButton('NOSOTROS')" @mouseleave="clearHoveredButton"
                              >
                                <p style="
                                font-family: 'Montserrat', sans-serif;
                                font-weight: 400;
                                font-style: normal;
                                font-size: 10px;
                                letter-spacing: 0.2em;
                                text-transform: uppercase;
                                margin: 0;">NOSOTROS</p>
                            </button>
                        </RouterLink>
                        <RouterLink custom v-slot="{ navigate }" to="/contact">
                            <button style="
                                padding: 0;
                                margin: 10px;
                                align-items: center;"
                                class=" hidden-sm-and-down" @click="navigate"
                                :class="{ 'bottom-border': isHovering === 'CONTACTO' }" @mouseover="setHoveredButton('CONTACTO')" @mouseleave="clearHoveredButton"
                              >
                                <p style="
                                font-family: 'Montserrat', sans-serif;
                                font-weight: 400;
                                font-style: normal;
                                font-size: 10px;
                                letter-spacing: 0.2em;
                                text-transform: uppercase;
                                margin: 0;">CONTACTO</p>
                            </button>
                        </RouterLink>
           





















                 
                      
    <v-menu
    class=" hidden-md-and-up mb-1"
    size="small" icon="mdi-menu"
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Slide Y Transition
        </v-btn>
      </template>
      <v-list>
        <RouterLink custom v-slot="{ navigate }" to="/">
                    <button   :class="{ 'bottom-border': isHovering === 'SHEEP' }" @mouseover="setHoveredButton('SHEEP')" @mouseleave="clearHoveredButton" @click="navigate" class=" ml-5 " >
                        <p
                        
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
                                align-items: center;"
                                class=" hidden-sm-and-down" @click="navigate"
                                :class="{ 'bottom-border': isHovering === 'INICIO' }" @mouseover="setHoveredButton('INICIO')" @mouseleave="clearHoveredButton"
                              >
                                <p style="
                                font-family: 'Montserrat', sans-serif;
                                font-weight: 400;
                                font-style: normal;
                                font-size: 10px;
                                letter-spacing: 0.2em;
                                text-transform: uppercase;
                                margin: 0;">INICIO</p>
                            </button>
                        </RouterLink>
                        <RouterLink custom v-slot="{ navigate }" to="/product">
                            <button style="
                                padding: 0;
                                margin: 10px;
                                align-items: center;"
                                class=" hidden-sm-and-down" @click="navigate"
                                :class="{ 'bottom-border': isHovering === 'PRODUCTOS' }" @mouseover="setHoveredButton('PRODUCTOS')" @mouseleave="clearHoveredButton"
                              >
                                <p style="
                                font-family: 'Montserrat', sans-serif;
                                font-weight: 400;
                                font-style: normal;
                                font-size: 10px;
                                letter-spacing: 0.2em;
                                text-transform: uppercase;
                                margin: 0;">PRODUCTOS</p>
                            </button>
                        </RouterLink>
                        <RouterLink custom v-slot="{ navigate }" to="/account">
                            <button style="
                                padding: 0;
                                margin: 10px;
                                align-items: center;"
                                class=" hidden-sm-and-down" @click="navigate"
                                :class="{ 'bottom-border': isHovering === 'NOSOTROS' }" @mouseover="setHoveredButton('NOSOTROS')" @mouseleave="clearHoveredButton"
                              >
                                <p style="
                                font-family: 'Montserrat', sans-serif;
                                font-weight: 400;
                                font-style: normal;
                                font-size: 10px;
                                letter-spacing: 0.2em;
                                text-transform: uppercase;
                                margin: 0;">NOSOTROS</p>
                            </button>
                        </RouterLink>
                        <RouterLink custom v-slot="{ navigate }" to="/contact">
                            <button style="
                                padding: 0;
                                margin: 10px;
                                align-items: center;"
                                class=" hidden-sm-and-down" @click="navigate"
                                :class="{ 'bottom-border': isHovering === 'CONTACTO' }" @mouseover="setHoveredButton('CONTACTO')" @mouseleave="clearHoveredButton"
                              >
                                <p style="
                                font-family: 'Montserrat', sans-serif;
                                font-weight: 400;
                                font-style: normal;
                                font-size: 10px;
                                letter-spacing: 0.2em;
                                text-transform: uppercase;
                                margin: 0;">CONTACTO</p>
                            </button>
                        </RouterLink>
           
      </v-list>
    </v-menu>
                      
          
                  
                </v-row>
            </v-container>
        </v-app-bar>

</template>

<style scoped>
.transitional-app-bar {
  transition: background-color 0.4s ease-in-out;
  border-bottom: 1px solid #E0E0E0; 
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
/* Ajusta el tiempo y el efecto de transición según tus preferencias */
</style>