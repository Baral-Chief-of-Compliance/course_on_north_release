<template>
    <v-container>
        <button-back label="к новостям" @my-event="go_to_news"/>

        <Suspense>
            <template #default>
                <NewsDetail :width=width :mainColor=mainColor />
            </template>

            <template #fallback>
                <NewsDetailSkeleton />
            </template>
        </Suspense>
        
        <!-- <v-row>
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

        <div v-html="textNews" class="mb-5"></div> -->


    </v-container>
</template>

<script>
import ButtonBack from './details/ButtonBack.vue';
import axios from 'axios';
import TitleComponent from '@/components/test_1/details/TitleComponents.vue';
import { inject } from 'vue';
import NewsDetailSkeleton from '@/components/news/NewsDetailSkeleton.vue';
import NewsDetail from '@/components/news/NewsDetail.vue';


export default{
    components: {
        ButtonBack,
        TitleComponent,
        NewsDetailSkeleton,
        NewsDetail
    },

    setup(){
        const width = inject("width");
        const mainColor = inject("mainColor");

        return{
            width,
            mainColor
        }
    },

    methods: {
        get_start(){
            window.scrollTo({ top: 0, behavior: 'smooth'})
        },

        go_to_news(){
            this.$router.push({name: 'News'})
        }
    },

    mounted(){
        this.get_start();
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