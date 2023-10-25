<template>
    <v-container>
        <button-back label="к новостям" @my-event="go_to_news"/>
        
        {{ this.title }}
        {{ this.shortDescription }}
        {{ this.datePublished }}

        {{ this.textNews }}

        <div v-html="textNews">
            
        </div>
    </v-container>
</template>

<script>
import { useWindowScroll } from '@vueuse/core';
import ButtonBack from './details/ButtonBack.vue';
import axios from 'axios';


export default{
    components: {
        ButtonBack
    },

    setup(){
        const News_API = import.meta.env.VITE_ADDRESS_NEWS

        return{
            News_API
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
                this.title = response.data.title,
                this.photo_preview_news = response.data.photo_preview_news,
                this.shortDescription = response.data.shortDescription,
                this.datePublished = response.data.datePublished,
                this.textNews = response.data.textNews
            })
        }
    },

    mounted(){
        this.get_data(this.$route.params.id)
    }
}
</script>