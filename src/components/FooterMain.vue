
<script lang="ts" >
 export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<template>
     <v-footer
     class="text-center d-flex flex-column"
     color="#1c1b1b"
     >
<div class="my-2" > 
 <div class="my-1 " >
       <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="my-2 text-footer ">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum.
    </div>

    <div class="my-2" 

    >
    <strong variant="plain"  style="color: white; 
            font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            font-weight: 500;
            font-style: normal;
            font-size: 1em;
            " > 2024 — Alpaca Hugs Company</strong>
    </div>

    </div>
    </v-footer>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@300;400&display=swap');

.text-footer{
  color: white; 
            font-family: 'Montserrat', sans-serif; 
            margin: 0; 
            font-weight: 400;
            font-style: normal;
            font-size: 0.8em;
            letter-spacing: .1em;
}

</style>