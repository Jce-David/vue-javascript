
<script lang="ts" >
import  TopBarComplement from '@/components/TopBarComplement.vue';
import ShoppingSelect from '@/components/UniqueProduct/ShoppingSelect.vue';

export default {
    components: {
    ShoppingSelect,
    TopBarComplement
}
}

</script>

<template>
    <TopBarComplement />
    <v-main>
        <ShoppingSelect />
    </v-main>

</template>