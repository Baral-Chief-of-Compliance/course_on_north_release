<template>
     <v-container>

        <button-back label="на главную" @my-event="go_back"/>
        <title-component title="Новости" />

        <v-row>
            <v-col v-if="width >= 1280"></v-col>
            
            
            <v-col v-if="state.news.length != 0" :cols="[width >= 1280 ? 8 : 12]">

                <template v-for="n in state.news" >
                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-card
                                height="250"
                                class="mt-5 elevation-6"
                                v-if="n.page === page"
                                v-bind="props"
                                :color="isHovering ? '#66B9E8' : undefined"
                                @click="this.$router.push({name: 'NewsInf', params: {id: n.id}})"
                                
                            >
                                <v-card-text>
                                    <v-row>
                                        <v-col :cols="[width > 620 ? 4: 6]">
                                            <v-img
                                                :src="n.photo_preview_news"
                                                :height="[width >= 320 ? 220 : 120]"
                                                cover
                                            >
                                            </v-img>
                                        </v-col>

                                        <v-col :cols="[width > 620 ? 8: 6]">
                                            <div :class="[width > 1280 ? 'news_label mb-3': width > 620 ? 'news_label_mobile mb-3' : width > 320 ? 'news_label_mini mb-3' : 'news_label_mini mb-1']" :style="{color: mainColor}" >{{ n.title }}</div>
                                            <div :class="[width > 1280 ? 'news_date mb-3' : width > 620 ? 'news_date_mobile mb-3' : width > 320 ? 'news_date_mini mb-3' : 'news_date_mini mb-1']">{{ n.datePublished }}</div>
                                            <div :class="[ width > 1280 ? 'news_desciption': width > 620 ? 'news_desciption_mobile' : 'news_desciption_mini']">{{ width > 750 ? n.shortDescription.substring(0, 200)+"..." : width > 670 ? n.shortDescription.substring(0, 150)+"..." : width > 381 ? n.shortDescription.substring(0, 100)+"..." : n.shortDescription.substring(0, 60)+"..."  }}</div>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </template>
                    </v-hover>
                </template>

                <v-pagination
                    v-if="state.news.length != 0"
                    class="mt-5"
                    v-model="page"
                    :length="state.pages_county"
                    rounded="circle"
                   :color="mainColor"
                >

                </v-pagination>
            </v-col>

            <v-col :class="[width > 1280 ? 'news_isapsent' : 'news_isapsent_mobile' ]" v-else :cols="[width >= 1280 ? 8 : 12]">
                Новостей пока нет
            </v-col>
            <v-col v-if="width >= 1280" ></v-col>
        </v-row>
     </v-container>
</template>

<script>
import ButtonBack from './details/ButtonBack.vue';
import AnketTitleVue from './details/ankets/AnketTitle.vue';
import TitleComponent from '@/components/test_1/details/TitleComponents.vue';
import axios from 'axios';
import { set_part_of_navbar } from '@/localstorage/storage_of_location_site';
import { inject, reactive } from 'vue';


export default{

    setup(){
        const width = inject("width");
        const mainColor = inject("mainColor");
        const URL_NEWS = import.meta.env.VITE_ADDRESS_NEWS;

        const state = reactive({
            news: [],
            pages_county: 1
        })

        function getData(){
            axios.get(`${URL_NEWS}news`)
            .then((response) => {
                state.news = response.data.news;
                state.pages_county = response.data.pages_county
            })
        }

        getData()
        return {
            width, mainColor, URL_NEWS, state
        }
    },

    components: {
        ButtonBack,
        AnketTitleVue,
        TitleComponent
    },

    data(){
        return{
                page: 1
        }
    },
    methods: {
        go_back(){
            this.$router.push({name: 'TestHome_1'});
        },

        get_start(){
            window.scrollTo({ top: 0, behavior: 'smooth'});
        }
    },

    mounted(){
        this.get_start();
        set_part_of_navbar(this.$route.name)
    }
}
</script>

<style scoped>
#text-show-button{
    color: white
}

.news_date{
    font-family: "MontserratMedium";
    font-size: 18px;
}

.news_date_mobile{
    font-family: "MontserratMedium";
    font-size: 16px;
}

.news_date_mini{
    font-family: "MontserratMedium";
    font-size: 14px;
}

.news_label{
    font-weight: bold;
    font-size: 25px;
    font-family: "MontserratMedium";
    line-height: 30px;
}

.news_label_mobile{
    font-weight: bold;
    font-size: 20px;
    font-family: "MontserratMedium";
}

.news_label_mini{
    font-weight: bold;
    font-size: 15px;
    font-family: "MontserratMedium";
}


.news_desciption{
    font-size: 16px;
    color: gray;
    font-family: "MontserratMedium";
}

.news_desciption_mobile{
    font-size: 14px;
    color: gray;
    font-family: "MontserratMedium";
}

.news_desciption_mini{
    font-size: 13px;
    color: gray;
    font-family: "MontserratMedium";
}

.news_isapsent{
    font-family: "MontserratMedium";
    font-size: 30px; 
    text-align: center;
}

.news_isapsent_mobile{
    font-family: "MontserratMedium";
    font-size: 18px; 
    text-align: center; 
}

</style>



