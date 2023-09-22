<template>
    <v-parallax
        src="@/assets/stumb/stumb_overlay_50.jpg"
        :height="height"
        :width="width"
    >
        <div class="d-flex flex-column fill-height justify-center align-center text-white" >
            <div class="mb-4 title_code_mistake"  :style="(width > 600) ? {fontSize: width * 0.0542 + 'px'} : {fontSize: width * 0.1042 + 'px'}"> 
                Сайт в разработке
            </div>
        </div>

    </v-parallax>
</template>

<script setup>
import { inject } from 'vue';

const width = inject('width');
const height = inject('height');

</script>

<style scoped>
    
    .title_code_mistake{
        font-family: "CorkiRegular";
        text-transform: uppercase;
        font-weight: 400;
        text-align: center;
        
    }
</style>