<template>
    <v-img
        :src="imgPath"
        class="my-10 elevation-15"
        :width="( width > 1200) ? 1000 : (width > 960) ? 700 : width"
        :height="( width> 1200) ? 1000: (width > 960) ? 700 : (width - 50)"
        max-height="1810"
    >
    </v-img>
</template>

<script>
import { inject } from 'vue';

export default{
    props:{
        path: String
    },

    setup(props){
        const imgPath = new URL(`../../../../assets/${props.path}`, import.meta.url).href
        const width = inject('width');
        
        return { imgPath, width }
    }
}
</script>

