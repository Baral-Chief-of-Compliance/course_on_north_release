<template>
     <v-container>

        <button-back label="на главную" @my-event="go_back"/>
        <title-component title="Новости" />

        <Suspense>
            <template #default>
                <news-list :width="width" :main-color="mainColor" :add-color="addColor" />
            </template>

            <template #fallback>
                <news-list-skeleton :width="width" :mainColor="mainColor" :addColor="addColor" />
            </template>
        </Suspense>
     </v-container>
</template>

<script>
import ButtonBack from './details/ButtonBack.vue';
import AnketTitleVue from './details/ankets/AnketTitle.vue';
import TitleComponent from '@/components/test_1/details/TitleComponents.vue';
import axios from 'axios';
import { set_part_of_navbar } from '@/localstorage/storage_of_location_site';
import { inject, reactive, ref } from 'vue';
import NewsListSkeleton from '@/components/news/NewsListSkeleton.vue';
import NewsList from '@/components/news/NewsList.vue';


export default{



    setup(){
        const width = inject("width");
        const mainColor = inject("mainColor");
        const addColor = inject("addColor")
        const URL_NEWS = import.meta.env.VITE_ADDRESS_NEWS;

        const state = reactive({
            news: [],
            pages_county: 1
        })

        return {
            width, mainColor, URL_NEWS, state, addColor
        }
    },

    components: {
        ButtonBack,
        AnketTitleVue,
        TitleComponent,
        NewsListSkeleton,
        NewsList
    },

    data(){
        return{
                page: 1,
                selected_btn: "not_show",
                loading: true
        }
    },
    methods: {
        go_back(){
            this.$router.push({name: 'TestHome_1'});
        },

        get_start(){
            window.scrollTo({ top: 0, behavior: 'smooth'});
        },

        shortDescription(index){
            if (this.selected_btn != index){
                this.selected_btn = index;
            }

            else {
                this.selected_btn = "not_show";
            }

        }
    },

    mounted(){
        this.get_start();
        set_part_of_navbar(this.$route.name)
    }
}
</script>