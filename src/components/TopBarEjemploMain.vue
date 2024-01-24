<script lang="ts" >
import { mapActions } from 'pinia';
import { mapState } from 'pinia';
import { useScrollingStore } from '@/stores/scrolling'
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/cart';



export default defineComponent({
    emits: ['mouseenter', 'mouseleave'],
    data() {
        return {
            isHoveringTop: '',
            drawer: false,
        }
    },
    computed: {

        ...mapState(useScrollingStore, ['offSetTop', 'isHovering']),
        isHoveringColor() {
            // isHovering es true cuando el sistema de barras desaparece (offSetTop > 4)
            return this.offSetTop > 10
        },
        itemsCount() {
            const cartStore = useCartStore();
            return cartStore.cartItemsCount
        }
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
    <v-hover v-slot:default="{ isHovering, props }">
        <v-app-bar v-bind="props" :style="{ background: isHovering || isHoveringColor ? 'white' : '#FFFFFF00' }"
            :dark="isHovering" height="80" text="white" :elevation="0" class="transitional-app-bar">
            <v-container>
                <v-row class="text-h5  justify-between align-center ">
                    <button class=" hidden-md-and-up  ml-4 ">
                        <v-icon @click="drawer = !drawer"
                            :style="{ color: isHovering || isHoveringColor ? '#1c1b1b' : 'white', flex: '1', textAlign: 'center' }"
                            size="small" icon="mdi-menu"></v-icon>
                    </button>
                    <RouterLink custom v-slot="{ navigate }" to="/product">
                        <button style=" 
                                padding: 0;
                                margin:  10px;
                                align-items: center;" class=" hidden-sm-and-down" @click="navigate"
                            :class="{ 'bottom-border': isHoveringTop === 'PRODUCTOS' }"
                            @mouseover="setHoveredButton('PRODUCTOS')" @mouseleave="clearHoveredButton">
                            <p :style="{ color: isHovering || isHoveringColor ? '#1c1b1b' : 'white', flex: '1', textAlign: 'center' }"
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
                            <p :style="{ color: isHovering || isHoveringColor ? '#1c1b1b' : 'white', flex: '1', textAlign: 'center' }"
                                class="p-bar-alternative">NOSOTROS</p>
                        </button>
                    </RouterLink>

                    <RouterLink custom v-slot="{ navigate }" to="/contact">
                        <button style=" 
                                padding: 0;
                                margin:  10px;
                                align-items: center;" class=" hidden-sm-and-down" @click="navigate"
                            :class="{ 'bottom-border': isHoveringTop === 'CONTACTO' }"
                            @mouseover="setHoveredButton('CONTACTO')" @mouseleave="clearHoveredButton">
                            <p :style="{ color: isHovering || isHoveringColor ? '#1c1b1b' : 'white', flex: '1', textAlign: 'center' }"
                                class="p-bar-alternative">CONTACTO</p>
                        </button>
                    </RouterLink>

                    <v-spacer class=" hidden-sm-and-down mr-n15 "> </v-spacer>
                    <RouterLink custom v-slot="{ navigate }" to="/">
                        <button @click="navigate" class=" hidden-md-and-up   mx-auto text-center ">
                            <p 
                            class="mt-2"
                            :style="{ color: isHovering || isHoveringColor ? '#1c1b1b' : 'white', flex: '1', textAlign: 'center' }"
                                style="font-family: 'Montserrat', sans-serif; 
                                    font-weight: 500;
                                    font-style: normal;
                                    font-size: 1.4em;
                                    letter-spacing: -0.1rem;
                                    ">Alpaca</p>
                            <p 
                            class="mt-n2 ml-5 "
                            :style="{ color: isHovering || isHoveringColor ? '#1c1b1b' : 'white', flex: '1', textAlign: 'center' }"
                                style="font-family: 'Montserrat', sans-serif; 
                                    font-weight: 400;
                                    font-style: normal;
                                    font-size: 0.8em;                    
                                    ">Hugs</p>
                        </button>
                    </RouterLink>
                    <RouterLink custom v-slot="{ navigate }" to="/">
                        <button @click="navigate" class=" hidden-sm-and-down   mr-16 text-center ">
                            <p 
                            class="mt-2"
                            :style="{ color: isHovering || isHoveringColor ? '#1c1b1b' : 'white', flex: '1', textAlign: 'center' }"
                                style="font-family: 'Montserrat', sans-serif; 
                                    font-weight: 500;
                                    font-style: normal;
                                    font-size: 1.4em;
                                    letter-spacing: -0.1rem;
                                    ">Alpaca</p>
                            <p 
                            class="mt-n2 ml-5 "
                            :style="{ color: isHovering || isHoveringColor ? '#1c1b1b' : 'white', flex: '1', textAlign: 'center' }"
                                style="font-family: 'Montserrat', sans-serif; 
                                    font-weight: 400;
                                    font-style: normal;
                                    font-size: 0.8em;                    
                                    ">Hugs</p>
                        </button>
                    </RouterLink>

                 
                    <v-spacer class=" hidden-sm-and-down ml-16 "> </v-spacer>

                    <RouterLink custom v-slot="{ navigate }" to="/cart">
                        <v-badge size="x-small" class=" hidden-sm-and-down ml-16 " :model-value="itemsCount > 0"
                            :content="itemsCount" color="#facb0b">
                            <button @click="navigate" class=" hidden-sm-and-down ">
                                <v-icon
                                    :style="{ color: isHovering || isHoveringColor ? '#1c1b1b' : 'white', flex: '1', textAlign: 'center' }"
                                    size="small" icon="mdi-briefcase-outline"></v-icon>
                            </button>
                        </v-badge>
                    </RouterLink>
                    <RouterLink custom v-slot="{ navigate }" to="/cart">
                        <v-badge size="x-small" class=" hidden-md-and-up mr-5 " :model-value="itemsCount > 0"
                            :content="itemsCount" color="#facb0b">
                            <button @click="navigate" class=" hidden-md-and-up ">
                                <v-icon
                                    :style="{ color: isHovering || isHoveringColor ? '#1c1b1b' : 'white', flex: '1', textAlign: 'center' }"
                                    size="small" icon="mdi-briefcase-outline"></v-icon>
                            </button>
                        </v-badge>
                    </RouterLink>
                </v-row>
            </v-container>
        </v-app-bar>
        <v-navigation-drawer class="transitional-app-drawer" v-model="drawer" temporary color="#1c1b1b">

            <div class="mt-6">

                <v-expansion-panels  >
                    <v-expansion-panel :elevation="0" style="
background-color: transparent;
font-family: 'Montserrat', sans-serif;
font-weight: 400;
font-style: normal;
font-size: 14px;
color: white;">
                        <v-expansion-panel-title :elevation="0">
                            <p class="button-layout"> Productos </p>
                        </v-expansion-panel-title>
                        <v-divider class="mt-5" color="transparent"></v-divider>
                        <v-expansion-panel-text>
                            <RouterLink custom v-slot="{ navigate }" to="/product">
                                <button style="
    width: 210px;
    align-items: center;
    justify-content: center; 
    height: 30px;
    text-align: left;
    " class="button-layout-text  " @click="navigate" block>
                                    Todos
                                </button>
                            </RouterLink>
                            <v-divider class="mt-2" color="white"></v-divider>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                
                    <v-expansion-panel :elevation="0" style="
background-color: transparent;
font-family: 'Montserrat', sans-serif;
font-weight: 400;
font-style: normal;
font-size: 14px;
color: white;">
                        <v-expansion-panel-title :elevation="0">
                            <p class="button-layout  "> Nosotros </p>
                        </v-expansion-panel-title>

                        <v-divider class="mt-5" color="transparent"></v-divider>

                        <v-expansion-panel-text>
                            <RouterLink custom v-slot="{ navigate }" to="/account">
                                <button style="
    width: 210px;
    align-items: center;
    justify-content: center; 
    height: 30px;
    text-align: left;
    " class="button-layout-text  " @click="navigate" block>
                                    ¿Qué nos diferencia?
                                </button>
                            </RouterLink>
                            <v-divider class="mt-2" color="white"></v-divider>
                        </v-expansion-panel-text>

                        <v-expansion-panel-text>
                            <RouterLink custom v-slot="{ navigate }" to="/account">
                                <button style="
    width: 210px;
    align-items: center;
    justify-content: center; 
    height: 30px;
    text-align: left;
    " class="button-layout-text  " @click="navigate" block>
                                    Garantía
                                </button>
                            </RouterLink>
                            <v-divider class="mt-2" color="white"></v-divider>
                        </v-expansion-panel-text>

                        <v-expansion-panel-text>
                            <RouterLink custom v-slot="{ navigate }" to="/account">
                                <button style="
    width: 210px;
    align-items: center;
    justify-content: center; 
    height: 30px;
    text-align: left;
    " class="button-layout-text  " @click="navigate" block>
                                    Artesanía
                                </button>
                            </RouterLink>
                            <v-divider class="mt-2" color="white"></v-divider>
                        </v-expansion-panel-text>
                        <v-expansion-panel-text>
                            <RouterLink custom v-slot="{ navigate }" to="/account">
                                <button style="
    width: 210px;
    align-items: center;
    justify-content: center; 
    height: 30px;
    text-align: left;
    " class="button-layout-text  " @click="navigate" block>
                                    Blog
                                </button>
                            </RouterLink>
                            <v-divider class="mt-2" color="white"></v-divider>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel :elevation="0" style="
background-color: transparent;
font-family: 'Montserrat', sans-serif;
font-weight: 400;
font-style: normal;
font-size: 14px;
color: white;">
                        <v-expansion-panel-title :elevation="0">
                            <p class="button-layout  "> Contacto </p>
                        </v-expansion-panel-title>

                        <v-divider class="mt-5" color="transparent"></v-divider>

                        <v-expansion-panel-text>
                            <RouterLink custom v-slot="{ navigate }" to="/contact">
                                <button style="
    width: 210px;
    align-items: center;
    justify-content: center; 
    height: 30px;
    text-align: left;
    " class="button-layout-text  " @click="navigate" block>
                                    Sobre mi compra
                                </button>
                            </RouterLink>
                            <v-divider class="mt-2" color="white"></v-divider>
                        </v-expansion-panel-text>
                        <v-expansion-panel-text>
                            <RouterLink custom v-slot="{ navigate }" to="/contact">
                                <button style="
    width: 210px;
    align-items: center;
    justify-content: center; 
    height: 30px;
    text-align: left;
    " class="button-layout-text  " @click="navigate" block>
                                    Envíos
                                </button>
                            </RouterLink>
                            <v-divider class="mt-2" color="white"></v-divider>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>

            </div>
        </v-navigation-drawer>

    </v-hover>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');


.justify-center {
    justify-content: center;
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

.transitional-app-bar {
    transition: background-color 0.4s ease-in-out;
}
.transitional-app-drawer {
    transition: transform 0.4s ease-in-out
}
.transitional-app{
    transition: transform 0.4s ease-in-out
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
    height: 2px;
    background-color: #1c1b1b;
}

.bottom-border {
    position: relative;
}

/*

/* Ajusta el tiempo y el efecto de transición según tus preferencias */
</style>