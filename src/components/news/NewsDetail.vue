<template>
    <v-row>
        <v-col v-if="width > 1280" cols="1"></v-col>
            <v-col>
                <div :class="[ width > 1280 ? 'news_title' : width > 600 ? 'news_title_mobile' : 'news_title_mini']" :style="{color: mainColor}">{{ newsDetail.title }}</div>
            </v-col>
        <v-col v-if="width > 1280" cols="1"></v-col>

    </v-row>

        <div class="news_date_published mt-3">
            Дата публикации: {{ newsDetail.datePublished}}
        </div>

        <v-divider class="border-opacity-75 mb-5 mt-2" ></v-divider>

        <div v-html="newsDetail.textNews"></div>

        <v-row class="my-5"></v-row>

</template>

<script>
import axios from 'axios'; 
import { useRoute } from 'vue-router';
import TitleComponent from '@/components/test_1/details/TitleComponents.vue';
import { inject, ref} from 'vue';
import { onMounted } from '@vue/runtime-core';


const getNewsDetail = async () => {
    return new Promise((resolve) => {
        const News_API = import.meta.env.VITE_ADDRESS_NEWS;
        const route = useRoute()
        const news_id = route.params.id
        axios.get(`${News_API}news/${news_id}`)
        .then(response => {
            resolve({
                title:  response.data.news_detail.title,
                datePublished: response.data.news_detail.datePublished,
                textNews: response.data.news_detail.textNews
            })
        })
    })
}

export default{
    props: {
        width: Number,
        mainColor: String
    },
    components: {
        TitleComponent, 
    },

    async setup(){
        const newsDetail = ref(await getNewsDetail());


        return {
            newsDetail,
        }
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

    .news_date_published{
        font-family: "MontserratMedium";  
    }
</style>