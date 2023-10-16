<template>
    <v-col>
        <v-btn @click="$emit('go-to')"><span class="nav-options"  :style="{color: navOptionColor, fontSize: [(width >= 1555) ? '18px': (width >= 1365) ? '15px' : (width >= 1306) ? '14px' : (width >= 1249)? '13px': (width >= 1191)? '12px':  (width >= 1134)? '11px' : '10px' ] }">{{ label }}</span></v-btn>
    </v-col>
</template>

<style>
    .nav-options{
        margin-left: auto;
        margin-right: auto;
        font-family: "MontserratMedium";
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