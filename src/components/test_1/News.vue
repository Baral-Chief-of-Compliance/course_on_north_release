<template>
     <v-container>

        <button-back label="на главную" @my-event="go_back"/>

        <title-component title="Новости" />

        <v-row>
            <v-col v-if="width >= 1280"></v-col>
            <v-col :cols="[width >= 1280 ? 8 : 12]">

                <template v-for="color_card in example_list">
                    <v-card
                        height="250"
                        class="mt-5 elevation-6"
                        v-if="color_card.page === page"
                        :color="color_card.color"
                    >
                        <v-card-text>
                            <v-row>
                                <v-col :cols="[width > 620 ? 4: 6]">
                                    <v-img
                                        :src="color_card.img"
                                        :height="[width >= 320 ? 220 : 120]"
                                        cover
                                    >
                                    </v-img>
                                </v-col>

                                <v-col :cols="[width > 620 ? 8: 6]">
                                    <div :class="[width > 1280 ? 'news_label mb-3': width > 620 ? 'news_label_mobile mb-3' : width > 320 ? 'news_label_mini mb-3' : 'news_label_mini mb-1']" :style="{color: mainColor}" >{{ color_card.label }}</div>
                                    <div :class="[width > 1280 ? 'news_date mb-3' : width > 620 ? 'news_date_mobile mb-3' : width > 320 ? 'news_date_mini mb-3' : 'news_date_mini mb-1']">{{ color_card.date }}</div>
                                    <div :class="[ width > 1280 ? 'news_desciption': width > 620 ? 'news_desciption_mobile' : 'news_desciption_mini']">{{ width > 750 ? color_card.description.substring(0, 200)+"..." : width > 670 ? color_card.description.substring(0, 150)+"..." : width > 381 ? color_card.description.substring(0, 100)+"..." : color_card.description.substring(0, 60)+"..."  }}</div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </template>

                <v-pagination
                    class="mt-5"
                    v-model="page"
                    :length="3"
                    rounded="circle"
                   :color="mainColor"
                >

                </v-pagination>
            </v-col>
            <v-col v-if="width >= 1280" ></v-col>
        </v-row>

     </v-container>
</template>

<script>
import ButtonBack from './details/ButtonBack.vue';
import AnketTitleVue from './details/ankets/AnketTitle.vue';
import TitleComponent from '@/components/test_1/details/TitleComponents.vue';
import { inject } from 'vue';


export default{

    setup(){
        const width = inject("width")
        const mainColor = inject("mainColor")

        return {
            width, mainColor
        }
    },

    components: {
        ButtonBack,
        AnketTitleVue,
        TitleComponent
    },

    data(){
        return{
            news_list: [
                {date: "10.07.2023", name: "Профессиональный горизонты", desciption: 'Специалисты Мончегорского кадрового центра провели тренинг "Твой выбор" для подростков, которые уже сейчас пробуют свои силы в труде', url: 'https://murman-zan.ru/image?file=/cms_data/usercontent/regionaleditor/%D0%BA%D0%BE%D0%BD%D0%B4%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%BA%D0%BE/%D0%B8%D1%8E%D0%BB%D1%8C/photo_2023-07-11_12-30-58.jpg&theme=default'},
                {date: '07.07.2023', name: 'ОБУЧЕНИЕ – НА РЕЗУЛЬТАТ', desciption: 'Бесплатное обучение, освоение востребованной профессии, помощь в трудоустройстве, Прием заявлений открыт по 143 программам', url: 'https://murman-zan.ru/image?file=%2fcms_data%2fusercontent%2fregionaleditor%2f%d0%b4%d0%bb%d1%8f+%d0%bd%d0%be%d0%b2%d0%be%d1%81%d1%82%d0%b5%d0%b9%2f23%2fpo_news.png&width=140&height=140&crop=True&theme=default'},
                {date: '07.07.2023', name: 'В Никеле состоялось открытие смены трудового отряда школьников Кольской ГМК', desciption: 'При содействии Печенгского кадрового центра трудоустроено 15 учащихся в возрасте от 14 до 18 лет.', url: 'https://murman-zan.ru/image?file=%2fcms_data%2fusercontent%2fregionaleditor%2f%d0%b4%d0%bb%d1%8f+%d0%bd%d0%be%d0%b2%d0%be%d1%81%d1%82%d0%b5%d0%b9%2f23%2f%d0%bf%d0%b5%d1%87.-%d0%b3%d0%bc%d0%ba+%d1%84%d0%be%d1%82%d0%be.jpg&width=140&height=140&crop=True&theme=default'}
            ],

            page: 1,

            example_list: [
                {
                    label: "Профессиональный горизонты",
                    color: "white",
                    img: "https://cs7.pikabu.ru/post_img/big/2019/01/08/11/1546973399180544975.jpg",
                    date: "21.10.2023",
                    description: "Задача организации, в особенности же рамки и место обучения кадров позволяет выполнять важные задания по разработке форм развития. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности требуют от нас анализа форм развития.",
                    id: 1,
                    page: 1
                },
                {
                    label: "ОБУЧЕНИЕ – НА РЕЗУЛЬТАТ",
                    color: "white",
                    img: "https://www.mvestnik.ru/images/cms/thumbs/c6c8df74a7ee69a5bd57925e8331adadea700d58/noch_750_auto_jpg_5_70.jpg",
                    date: "07.10.2023",
                    description: "Равным образом рамки и место обучения кадров требуют определения и уточнения модели развития. Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий позволяет выполнять важные задания по разработке соответствующий условий активизации. Товарищи! начало повседневной работы по формированию позиции требуют определения и уточнения форм развития. Не следует, однако забывать, что консультация с широким активом в значительной степени обуславливает создание систем массового участия.",
                    id: 2,
                    page: 1
                },
                {
                    label: "Текст-рыба",
                    color: "white",
                    img: "https://c8.staticflickr.com/8/7362/27769687251_9f2e6f129f_o.jpg",
                    date: "22.10.2023",
                    description: "С другой стороны новая модель организационной деятельности играет важную роль в формировании дальнейших направлений развития. С другой стороны реализация намеченных плановых заданий в значительной степени обуславливает создание существенных финансовых и административных условий. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности требуют определения и уточнения новых предложений. Товарищи! рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.",
                    id: 3,
                    page: 1
                },
                {
                    label: "О сайте",
                    color: "white",
                    img: "https://murmansk.travel/storage/images/medium.2b231c3292cb4407400e6393fbd764f6.png",
                    date: "01.10.2023",
                    description: "Таким образом консультация с широким активом влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании форм развития.",
                    id: 4,
                    page: 2
                },
                {
                    label: "Разнообразный и богатый опыт",
                    color: "white",
                    img: "https://cdn.fishki.net/upload/post/201601/10/1806723/2548887.jpg",
                    date: "30.10.2023",
                    description: "С другой стороны укрепление и развитие структуры требуют определения и уточнения модели развития. Товарищи! укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий. Повседневная практика показывает, что реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Идейные соображения высшего порядка, а также сложившаяся структура организации требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. Повседневная практика показывает, что начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям.",
                    id: 5,
                    page: 2
                },
                {
                    label: "Информационно-пропагандистское обеспечение",
                    color: "white",
                    img: "https://load-strapi-uploads.hb.bizmrg.com/obl_belye_nochi_9b7987544a.jpg",
                    date: "17.10.2023",
                    description: "Повседневная практика показывает, что консультация с широким активом позволяет оценить значение модели развития. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности требуют определения и уточнения форм развития. Равным образом постоянный количественный рост и сфера нашей активности требуют от нас анализа соответствующий условий активизации. Равным образом начало повседневной работы по формированию позиции играет важную роль в формировании существенных финансовых и административных условий.",
                    id: 6,
                    page: 2
                },
                {
                    label: "Задача организации",
                    color: "white",
                    img: "https://aif-s3.aif.ru/images/020/013/30fb80623409243159180633f39e77f2.jpg",
                    date: "08.10.2023",
                    description: "Не следует, однако забывать, что консультация с широким активом в значительной степени обуславливает создание дальнейших направлений развития. Разнообразный и богатый опыт начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке дальнейших направлений развития.",
                    id: 7,
                    page: 3
                },
            ],
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
</style>
