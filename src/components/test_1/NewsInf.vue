<template>
    <v-container>
        <button-back label="к новостям" @my-event="go_to_news"/>
        <!-- <title-component :title="this.title"/> -->

        <v-row>
            <v-col v-if="width > 1280" cols="1"></v-col>
            <v-col>
                <div :class="[ width > 1280 ? 'news_title' : width > 600 ? 'news_title_mobile' : 'news_title_mini']" :style="{color: mainColor}">{{ this.title }}</div>
            </v-col>
            <v-col v-if="width > 1280" cols="1"></v-col>
        </v-row>

        <div class="mt-3">
            Дата публикации: {{ this.datePublished }}
        </div>

        <v-divider class="border-opacity-75 mb-5 mt-2" ></v-divider>

        <!-- <v-row>
            <v-col v-if="width >= 1280"></v-col>

            <v-col :cols="[width >= 1280 ? 8 : 12]">
                <div v-html="textNews"></div>

            </v-col>

            <v-col v-if="width >= 1280" ></v-col>
        </v-row> -->

        <div v-html="textNews" class="mb-5"></div>


    </v-container>
</template>

<script>
import ButtonBack from './details/ButtonBack.vue';
import axios from 'axios';
import TitleComponent from '@/components/test_1/details/TitleComponents.vue';
import { inject } from 'vue';


export default{
    components: {
        ButtonBack,
        TitleComponent
    },

    setup(){
        const News_API = import.meta.env.VITE_ADDRESS_NEWS;
        const width = inject("width");
        const mainColor = inject("mainColor");

        return{
            News_API,
            width,
            mainColor
        }
    },

    data(){
        return{
            title: "",
            photo_preview_news: "",
            shortDescription: "",
            datePublished: "",
            textNews: ""
        }
    },

    methods: {
        get_start(){
            window.scrollTo({ top: 0, behavior: 'smooth'})
        },

        go_to_news(){
            this.$router.push({name: 'News'})
        },

        get_data(news_id){
            axios.get(`${this.News_API}news/${news_id}`)
            .then(response => {
                this.title = response.data.news_detail.title,
                this.photo_preview_news = response.data.news_detail.photo_preview_news,
                this.shortDescription = response.data.news_detail.shortDescription,
                this.datePublished = response.data.news_detail.datePublished,
                this.textNews = response.data.news_detail.textNews
            })
        }
    },

    mounted(){
        this.get_start();
        this.get_data(this.$route.params.id)
    }
}
</script>

<style scoped>

    .news_title{
        text-align: center;
        font-family: "MontserratMedium";
        font-weight: bold;
        font-size: 25px;
    }

    .news_title_mobile{
        text-align: center;
        font-family: "MontserratMedium";
        font-weight: bold;
        font-size: 20px;
    }

    .news_title_mini{
        text-align: center;
        font-family: "MontserratMedium";
        font-weight: bold;
        font-size: 17px; 
    }
</style>