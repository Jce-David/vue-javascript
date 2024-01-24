<script lang="ts" >

import { mapState } from 'pinia';
import { useScrollingStore } from '.././stores/scrolling'
import { defineComponent } from 'vue';
import { useCartStore } from '.././stores/cart';


export default defineComponent({
    emits: ['mouseenter', 'mouseleave'],
    data() {
        return {
            isHoveringTop: '',
            drawer: false,
            items: [
        { title: 'PRODUCTOS', routerLink: '/product'},
        { title: 'NOSOTROS', routerLink: '/account', },
        { title: 'CONTACTO', routerLink: '/contact', }
      ],
        }
    }, 
    computed: {
        ...mapState(useScrollingStore, ['offSetTop', 'isHovering']),
        isHoveringColor() {
            // isHovering es true cuando el sistema de barras desaparece (offSetTop > 4)
            return this.offSetTop > 4
        },
        itemsCount() {
            const cartStore = useCartStore();
            return cartStore.cartItemsCount
        },
    },
    methods: {
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
})

</script>
<template>
   


<v-app-bar 
            text="white" :elevation="0" height="80" class="transitional-app-bar">  
            <v-container>   
                <v-row class="text-h5   justify-between align-center " >
                    <button class=" hidden-md-and-up  ml-4 ">
                    <v-icon @click="drawer = !drawer"
                        size="small" icon="mdi-menu"></v-icon>
                </button>
                    <RouterLink custom v-slot="{ navigate }" to="/product">
                        <button style=" 
                                padding: 0;
                                margin:  10px;
                                align-items: center;" class=" hidden-sm-and-down" @click="navigate"
                            :class="{ 'bottom-border': isHoveringTop === 'PRODUCTOS' }"
                            @mouseover="setHoveredButton('PRODUCTOS')" @mouseleave="clearHoveredButton">
                            <p
                            class="p-bar-alternative">PRODUCTOS</p>
                        </button>
                    </RouterLink>

                    <RouterLink custom v-slot="{ navigate }" to="/account">
                        <button style=" 
                                padding: 0;
                                margin:  10px;
                                align-items: center;" class=" hidden-sm-and-down" @click="navigate"
                             :class="{ 'bottom-border': isHoveringTop === 'NOSOTROS' }"
                            @mouseover="setHoveredButton('NOSOTROS')" @mouseleave="clearHoveredButton">
                            <p  class="p-bar-alternative">NOSOTROS</p>
                        </button>
                    </RouterLink>

                    <RouterLink custom v-slot="{ navigate }" to="/contact">
                        <button style=" 
                                padding: 0;
                                margin:  10px;
                                align-items: center;" class=" hidden-sm-and-down" @click="navigate"
                             :class="{ 'bottom-border': isHoveringTop === 'CONTACTO' }"
                            @mouseover="setHoveredButton('CONTACTO')" @mouseleave="clearHoveredButton">
                            <p  class="p-bar-alternative">CONTACTO</p>
                        </button>
                    </RouterLink>    
                            
                   <v-spacer class=" hidden-sm-and-down mr-n15  " > </v-spacer>
                   <RouterLink custom v-slot="{ navigate }" to="/">
                        <button @click="navigate" class=" hidden-md-and-up   mx-auto text-center ">
                            <p 
                            class="mt-2"
                                style="font-family: 'Montserrat', sans-serif; 
                                    font-weight: 500;
                                    font-style: normal;
                                    font-size: 1.4em;
                                    letter-spacing: -0.1rem;
                                    ">Alpaca</p>
                            <p 
                            class="mt-n2 ml-5 "
                                style="font-family: 'Montserrat', sans-serif; 
                                    font-weight: 400;
                                    font-style: normal;
                                    font-size: 0.8em;
                                    ">Hugs</p>
                        </button>
                    </RouterLink>
                    <RouterLink custom v-slot="{ navigate }" to="/">
                        <button @click="navigate" class=" hidden-sm-and-down mr-16 text-center ">
                            <p 
                            class="mt-2"
                                style="font-family: 'Montserrat', sans-serif; 
                                    font-weight: 500;
                                    font-style: normal;
                                    font-size: 1.4em;
                                    letter-spacing: -0.1rem;
                                    ">Alpaca</p>
                            <p 
                            class="mt-n2 ml-5 "
                                style="font-family: 'Montserrat', sans-serif; 
                                    font-weight: 400;
                                    font-style: normal;
                                    font-size: 0.8em;                    
                                    ">Hugs</p>
                        </button>
                    </RouterLink>

                    <v-spacer class=" hidden-sm-and-down ml-16 " > </v-spacer>
                    
                    <RouterLink  custom v-slot="{ navigate }" to="/cart">
                        <v-badge size="x-small" class=" hidden-sm-and-down ml-16 " :model-value="itemsCount > 0" :content="itemsCount"
                        color="#facb0b">
                        <button @click="navigate" class=" hidden-sm-and-down">
                            <v-icon
            
                                size="small" icon="mdi-briefcase-outline"></v-icon>
                        </button>
                    </v-badge>
                    </RouterLink>
        <RouterLink custom v-slot="{ navigate }" to="/cart">
            <v-badge size="x-small" class=" hidden-md-and-up mr-5 " :model-value="itemsCount > 0 " :content="itemsCount" color="#facb0b"> 
                    <button  @click="navigate" class=" hidden-md-and-up " >
                       <v-icon  size="small" icon="mdi-briefcase-outline" ></v-icon>
                    </button>
                </v-badge>
                </RouterLink>      
                </v-row> 
            </v-container>   
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
        temporary
        color = "#1c1b1b"
        class="transitional-app-drawer"
        >
        <div class="mt-6"  >
            <v-expansion-panels>
            <v-expansion-panel
            :elevation="0"
      style="
       background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: white;"
            >
        <v-expansion-panel-title
        :elevation="0"        
        >    
            <p class="button-layout" > Productos </p>  
        </v-expansion-panel-title>
        <v-divider class="mt-4" color="transparent" ></v-divider>
        <v-expansion-panel-text
        >
            <RouterLink custom v-slot="{navigate}" to="/product" >
                <button           
               style="
                width: 210px;
                align-items: center;
                justify-content: center; 
                height: 30px;
                text-align: left;
                " class="button-layout-text  " @click="navigate" block >    
            Todos
            </button>
        </RouterLink>
        <v-divider class="mt-2" color="white" ></v-divider>
        </v-expansion-panel-text>
      </v-expansion-panel>         
            <v-expansion-panel
            :elevation="0"
      style="
       background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: white;"
            >
        <v-expansion-panel-title
        :elevation="0"        
        >    
            <p class="button-layout  " > Nosotros </p>  
        </v-expansion-panel-title>

        <v-divider class="mt-5" color="transparent" ></v-divider>

        <v-expansion-panel-text  >
            <RouterLink custom v-slot="{navigate}" to="/account" >
                <button style="
                width: 210px;
                align-items: center;
                justify-content: center; 
                height: 30px;
                text-align: left;
                " class="button-layout-text  " @click="navigate" block >    
             ¿Qué nos diferencia?
            </button>
        </RouterLink>
        <v-divider class="mt-2" color="white" ></v-divider>
        </v-expansion-panel-text>

        <v-expansion-panel-text>
            <RouterLink custom v-slot="{navigate}" to="/account" >
                <button style="
                width: 210px;
                align-items: center;
                justify-content: center; 
                height: 30px;
                text-align: left;
                " class="button-layout-text  " @click="navigate" block >    
             Garantía
            </button>
        </RouterLink>
        <v-divider class="mt-2" color="white" ></v-divider>
        </v-expansion-panel-text>
        
        <v-expansion-panel-text  >
            <RouterLink custom v-slot="{navigate}" to="/account" >
                <button style="
                width: 210px;
                align-items: center;
                justify-content: center; 
                height: 30px;
                text-align: left;
                " class="button-layout-text  " @click="navigate" block >    
             Artesanía
            </button>
        </RouterLink>
        <v-divider class="mt-2" color="white" ></v-divider>
        </v-expansion-panel-text>
        <v-expansion-panel-text>
            <RouterLink custom v-slot="{navigate}" to="/account" >
                <button style="
                width: 210px;
                align-items: center;
                justify-content: center; 
                height: 30px;
                text-align: left;
                " class="button-layout-text  " @click="navigate" block >    
             Blog
            </button>
        </RouterLink>
        <v-divider class="mt-2" color="white" ></v-divider>
        </v-expansion-panel-text>
            </v-expansion-panel>
        <v-expansion-panel
            :elevation="0"
      style="
       background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: white;"
            >
        <v-expansion-panel-title
        :elevation="0"        
        >    
            <p class="button-layout  " > Contacto </p>  
        </v-expansion-panel-title>

        <v-divider class="mt-5" color="transparent" ></v-divider>

        <v-expansion-panel-text  >
            <RouterLink custom v-slot="{navigate}" to="/contact" >
                <button style="
                width: 210px;
                align-items: center;
                justify-content: center; 
                height: 30px;
                text-align: left;
                " class="button-layout-text  " @click="navigate" block >    
             Sobre mi compra
            </button>
        </RouterLink>
        <v-divider class="mt-2" color="white" ></v-divider>
        </v-expansion-panel-text>
        <v-expansion-panel-text  >
            <RouterLink custom v-slot="{navigate}" to="/contact" >
                <button style="
                width: 210px;
                align-items: center;
                justify-content: center; 
                height: 30px;
                text-align: left;
                " class="button-layout-text  " @click="navigate" block >    
             Envíos
            </button>
        </RouterLink>
        <v-divider class="mt-2" color="white" ></v-divider>
        </v-expansion-panel-text>
      </v-expansion-panel>         
    </v-expansion-panels>             

</div>

        </v-navigation-drawer>

      
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');
.transitional-app-bar {
  transition: background-color 0.4s ease-in-out;
  border-bottom: 1px solid #E0E0E0;
}

.p-layout {
    text-align: left;
}

.transitional-app-drawer {
    transition: transform 0.4s ease-in-out
}

.button-layout {
    color: white;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 0.8em;
    text-transform: uppercase;
    margin: 0;
}

.button-layout-text {
    color: white;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 0.8em;

    text-transform: uppercase;
    margin: 0;
}
.p-bar-alternative {
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 0.4em;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin: 0;
}

.bottom-border::after {
  content: '';
  display: block;
  height: 1px;
  background-color: #1c1b1b;
  ;
}

.bottom-border {
  position: relative;
}

/* Ajusta el tiempo y el efecto de transición según tus preferencias */
</style>