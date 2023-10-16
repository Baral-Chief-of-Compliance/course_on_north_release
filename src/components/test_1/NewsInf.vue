<template>
    <v-container>
        Информация о новостях
        {{ label }}
        {{ img }}
        {{ date }}
        {{ description }}
    </v-container>
</template>

<script>
import json from '@/data/news.json'

    export default{
        data(){
            return{
                list_of_news: json,
                label: "",
                img: "",
                date: "",
                description: "",
                id: this.$route.params.id,
            } 
        },

        methods: {
            get_int_of_news(){
                let news = this.list_of_news.find(item => item.id == this.id);
                this.label = news.label;
                this.img = news.img;
                this.date = news.date;
                this.description = news.description;

            }
        },

        mounted(){
            this.get_int_of_news()
        }
    }
</script>