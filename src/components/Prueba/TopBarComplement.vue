<script lang="ts" >

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
        text="white" :elevation="0" height="60" class="transitional-app-bar"
            >
            <v-container>
              
                <v-row >
                  <RouterLink custom v-slot="{ navigate }" to="/cart">
          <button  style="       width: 6%;
                                padding: 0;
                                margin:  4px;
                                align-items: center;" class=" ml-2 hidden-sm-and-down" @click="navigate"
            @mouseover="setHoveredButton('CART')" @mouseleave="clearHoveredButton">
            <p style="       color: #1c1b1b;
                                font-family: 'Montserrat', sans-serif;
                                font-weight: 500;
                                font-style: normal;
                                font-size: 12px;
                                letter-spacing: 0.2em;
                                text-transform: uppercase;
                                margin: 0;">CART(0)</p>
          </button>
        </RouterLink>
        <v-spacer></v-spacer>
                    <RouterLink custom v-slot="{ navigate }" to="/">
                    <button   :class="{ 'bottom-border': isHovering === 'SHEEP' }" @mouseover="setHoveredButton('SHEEP')" @mouseleave="clearHoveredButton" @click="navigate" class=" ml-7 " >
                        <p     
                        style="font-family: 'Montserrat', sans-serif; 
                                    font-weight: 500;
                                    font-style: normal;
                                    font-size: 0.6em;
                                    letter-spacing: 0.5em;
                                    text-transform: uppercase;"> SHEEP </p>
                    </button>
                </RouterLink>
                                     
                      
                        <RouterLink custom v-slot="{ navigate }" to="/">
                            <button style="
                                padding: 0;
                                margin: 10px;
                                align-items: center;"
                                class=" hidden-sm-and-down" @click="navigate"
                                :class="{ 'bottom-border': isHovering === 'INICIO' }" @mouseover="setHoveredButton('INICIO')" @mouseleave="clearHoveredButton"
                              >
                                <p  class="p-bar-alternative">INICIO</p>
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
                                <p  class="p-bar-alternative" >PRODUCTOS</p>
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
                                <p  class="p-bar-alternative" >NOSOTROS</p>
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
                                <p class="p-bar-alternative"
                                       >CONTACTO</p>
                            </button>
                        </RouterLink>

                        
                    <button  >
                        <v-icon class=" hidden-md-and-up mb-1    " size="small" icon="mdi-menu" />
                    </button>
                </v-row>
            </v-container>
        </v-app-bar>

</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');
.transitional-app-bar {
  transition: background-color 0.4s ease-in-out;
  border-bottom: 1px solid #E0E0E0; 
}
.bottom-border::after {
  content: '';
  display: block;
  height: 2px;
  background-color:  #1c1b1b;;
}

.bottom-border {
  position: relative;
}
.p-bar-alternative {
  font-family: Montserrat,sans-serif; 
            margin: 0; 
            font-weight: 500;
            font-size: 0.6em;
            font-style: normal;
            color: #1c1b1b;
            letter-spacing: 0.2em;
            text-transform: uppercase;
}
.p-bar{
  color: #1c1b1b;
                                font-family: Montserrat, sans-serif;
                                font-weight: 500;
                                font-style: normal;
                                font-size: 0.6em;
                                letter-spacing: 0.2em;
                                text-transform: uppercase;
                                margin: 0;
}

/* Ajusta el tiempo y el efecto de transición según tus preferencias */
</style>