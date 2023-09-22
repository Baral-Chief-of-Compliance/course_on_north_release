<template>
    <v-parallax
        src="@/assets/notFound/for_page_not_found_overlay_50.jpg"
        :height="height"
        :width="width"
    >
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="mb-4 title_code_mistake"  :style="(width > 600) ? {fontSize: width * 0.0542 + 'px'} : {fontSize: width * 0.1042 + 'px'}"> 
                404 Страница не найдена
            </h1>
            <div :class="(width > 1200) ?  'subtitle_mistake' : 'subtitle_mistake_mobile' ">
                Возможно вы ошиблись в адресе или данного ресруса по этому адресу уже нет.
            </div>
        </div>
    </v-parallax>
</template>

<script setup>
import { inject } from 'vue';
import { set_part_of_navbar } from '@/localstorage/storage_of_location_site';

const width = inject('width');
const height = inject('height');
const mainColor = inject('mainColor');
const addColor = inject('addColor');

function MessageError(){
    console.error("Failed to load resource: the server responded with a status of 404 ()")
}

set_part_of_navbar("notFound")
MessageError()

</script>

<style scoped>
    .title_code_mistake{
        font-family: "CorkiRegular";
        text-transform: uppercase;
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        
    }

    .subtitle_mistake{
        font-family: "MontserratMedium";
        font-size: 20px;
        text-align: center;
    }

    .subtitle_mistake_mobile{
        font-family: "MontserratMedium";
        text-align: center;
        font-size: 14px;
    }
</style>