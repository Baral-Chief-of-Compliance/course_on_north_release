<template>
    <v-container>
        <button-back label="на главную" @my-event="go_back" />

        <TitleComponent title="наша местоположение" />
        
        <v-row justify="center" class="mt-5 mb-5">
            <yandex-map
                :coords="[68.959745, 33.100978]"
                :zoom="17"
            >
                <ymap-marker
                    market-id="1"
                    :icon="{ color: 'red' }"
                    :coords="[68.959745, 33.100978]" 
                />

            </yandex-map>
        </v-row >

    </v-container>
</template>

<script>
import { inject } from 'vue';
import ButtonBack from '@/components/test_1/details/ButtonBack.vue';
import TitleComponent from './../test_1/details/TitleComponents.vue';

export default{

    components: {
        ButtonBack,
        TitleComponent
    },
    setup(){
        const width = inject("width");
        const height = inject("height")

        return { width, height }
    },

    data: () => ({
        scrolllevel: 0,

        widthMap: 1200,
        heightMap: 550
    }),
    methods:{
        go_back(){
            this.$router.push({name: 'TestHome_1'})
        },

        get_start(){
            window.scrollTo({ top: 0, behavior: 'smooth'})
        }
    },

    mounted(){
        this.get_start()
    }
}
</script>
<style scoped>

.ymap-container {
        width: 1200px;
        height: 550px;
}


@media (max-width: 1700px){
    .ymap-container {
        width: 1330;
        height: 610px;
    } 
}


@media (max-width: 1500px){
    .ymap-container {
        width: 1200px;
        height: 550px;
    }
}


@media (max-width: 1300px){
    .ymap-container {
        width: 1015px;
        height: 465px;
    }
}


@media (max-width: 1200px){
    .ymap-container {
        width: 935px;
        height: 430px;
    }
}

@media (max-width: 1000px){
    .ymap-container {
        width: 780px;
        height: 358px;
    }
}


@media (max-width: 800px){
    .ymap-container {
        width: 625px;
        height: 287px;
    }
}

@media (max-width: 650px){
    .ymap-container {
        width: 500px;
        height: 230px;
    }
}

@media (max-width: 600px){
    .ymap-container {
        width: 421x;
        height: 194px;
    }
}

@media (max-width: 550px){
    .ymap-container {
        width: 380x;
        height: 180px;
    }
}


@media (max-width: 440px){
    .ymap-container {
        width: 300px;
        height: 170px;
    }
}


</style>