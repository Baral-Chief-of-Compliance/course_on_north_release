<template>
    <v-col>
        <v-btn @click="$emit('go-to')"><span :class="[ width >= 1555 ? 'nav-options':'nav-options-small']" :style="{color: navOptionColor}">{{ label }}</span></v-btn>
    </v-col>
</template>

<style>
    .nav-options{
        margin-left: auto;
        margin-right: auto;
        font-family: "MontserratMedium";
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
    }

    .nav-options-small{
        margin-left: auto;
        margin-right: auto;
        font-family: "MontserratMedium";
        font-size: 15px;
        font-weight: 500;
        text-transform: uppercase;
    }
</style>

<script>
import { inject } from 'vue'


export default{
    props:{
        label: String
    },

    setup(){
        const navOptionColor = inject('navOptionColor')
        const width = inject('width')

        return { navOptionColor, width }
    }
}

</script>