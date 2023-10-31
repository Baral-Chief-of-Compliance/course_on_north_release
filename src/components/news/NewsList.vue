<template>
    <v-row>
        <v-col v-if="width >= 1280"></v-col>
            
            <v-col :cols="[width >= 1280 ? 8 : 12]">

                <template v-for="(n, index) in News.news" >
                    <v-hover v-if="width > 659">
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

                                        <v-col class="mt-3" :cols="[width > 620 ? 8: 6]">
                                            <v-row>
                                                <div :class="[width > 620 ? 'news_label_mobile mb-3' : width > 320 ? 'news_label_mini mb-3' : 'news_label_mini mb-1']" :style="{color: mainColor}" >{{ n.title }}</div>
                                            </v-row>

                                            <v-row>
                                                <div :class="[width > 1280 ? 'news_date mb-3' : width > 620 ? 'news_date_mobile mb-3' : width > 320 ? 'news_date_mini mb-3' : 'news_date_mini mb-1']">{{ n.datePublished }}</div>
                                            </v-row>
                                            
                                            <v-row>
                                                <div :class="[ width > 1280 ? 'news_desciption': width > 620 ? 'news_desciption_mobile' : 'news_desciption_mini']">{{ width > 750 ? n.shortDescription.substring(0, 200)+"..." : width > 670 ? n.shortDescription.substring(0, 150)+"..." : width > 381 ? n.shortDescription.substring(0, 100)+"..." : n.shortDescription.substring(0, 60)+"..."  }}</div>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-card-text>

                            </v-card>
                        </template>
                    </v-hover>


                    
                    <!-- для мобильных версий -->
                            <v-card
                                class="mx-auto mb-5"
                                max-width="344"
                                v-if="width <= 659"
                            >
                                <v-img
                                :src="n.photo_preview_news"
                                height="200px"
                                cover
                                ></v-img>

                                <v-card-text>
                                    <span :style="{color: mainColor}" class="news_label_mini">{{ n.title }}</span>
                                </v-card-text>

                                <v-card-subtitle>
                                    <div :class="[width > 1280 ? 'news_date mb-3' : width > 620 ? 'news_date_mobile mb-3' : width > 320 ? 'news_date_mini mb-3' : 'news_date_mini mb-1']">{{ n.datePublished }}</div>
                                </v-card-subtitle>
                                
                                    <v-card-actions>

                                        <v-btn
                                            :color="addColor"
                                            variant="text"
                                            @click="this.$router.push({name: 'NewsInf', params: {id: n.id}})"
                                        >
                                            <span class="news_title_btn">Подробнее</span>
                                        </v-btn>

                                        <v-spacer></v-spacer>
                                    
                                
                                        <v-btn
                                            :icon="selected_btn === index ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                                            @click="shortDescription(index)"
                                        ></v-btn>
                                    </v-card-actions>
                                    
                                    <v-expand-transition>
                                        <div v-show="this.selected_btn === index">
                                            <v-divider></v-divider>

                                            <v-card-text>
                                                <div class="news_short_description">{{ n.shortDescription }}</div>
                                            </v-card-text>
                                        </div>
                                    </v-expand-transition>

                            </v-card>
                </template>

                <v-pagination
                    class="mt-5"
                    v-model="page"
                    :length="News.pages_county"
                    rounded="circle"
                   :color="mainColor"
                >

                </v-pagination>
            </v-col>
        <v-col v-if="width >= 1280" ></v-col>
    </v-row>
</template>

<script>
import axios from "axios";
import { useRoute } from 'vue-router';
import { ref } from 'vue';


const getListNews = async () => {
    return new Promise((resolve) => {
        const News_API = import.meta.env.VITE_ADDRESS_NEWS;
        const route = useRoute()
        axios.get(`${News_API}news`)
        .then(response => {
            resolve ({
                news: response.data.news,
                pages_county: response.data.pages_county
                
            })
        })


    })
}

export default{

    data(){
        return{
            page: 1,
            selected_btn: "not_show",
        }
    },


    methods: {
        shortDescription(index){
            if (this.selected_btn != index){
                this.selected_btn = index;
            }

            else {
                this.selected_btn = "not_show";
            }

        }
    },
    props: {
        width: Number,
        mainColor: String,
        addColor: String
    },

    async setup(){
        const News = ref(await getListNews());

        return {
            News
        }
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

.news_title_btn{
    font-family: "MontserratMedium";
    font-weight: bold;
}

.news_short_description{
    font-family: "MontserratMedium";
}
</style>