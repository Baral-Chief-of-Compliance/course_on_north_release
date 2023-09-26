<template>
    <div id="health_worker_info" :style="componentColor">
        <v-container  class="py-10">
            <TitleComponent :typeStyle="typeStyle" title="меры поддержки для медецинских работников" />
            <!-- <TextForInfBlock :textContent="text" :textStyle="textComponent" /> -->

            <!-- <v-row v-for="(card, index) in cards_info" >
                <v-col v-if="width > 1280" :cols="index === 3 ? 3:1"></v-col>

                <v-col :cols="index === 3 ? (( width > 1280) ? 6: 12)  : (( width > 1280) ? 5: 12)" v-for="inf in card">
                    <HealthInfoCard 
                        :title="inf.title"
                        :path="inf.path"
                    />
                </v-col>

                <v-col v-if="width > 1280" :cols="index === 3 ? 3:1"></v-col>
            </v-row> -->

            <v-container v-if="width > 960" >
                <v-row  v-for="card in new_cards">
                    <v-col ></v-col>

                    <v-col>
                        <InfImg :path="card" />
                    </v-col>

                    <v-col></v-col>
                </v-row>            
            </v-container>

            <div class="my-5" v-for="card in new_cards" v-if="width <= 960">
                <InfImg :path="card" />
            </div>
        </v-container>
    </div>
</template>

<script>
import TitleComponent from './../test_1/details/TitleComponents.vue';
import TextForInfBlock from './../test_1/details/TextForInfBlock.vue';
import HealthInfoCard from './../test_1/details/HealthInfo/HealthInfoCard.vue';
import InfImg from './details/HealthInfo/InfImg.vue';
import { get_start } from '@/tools/start.js';
import { inject } from 'vue';

export default{

    data(){
        return{
            text: 'Товарищи! постоянный количественный рост и сфера нашей активности требуют определения и уточнения дальнейших направлений развития. Равным образом постоянный количественный рост и сфера нашей активности требуют определения и уточнения соответствующий условий активизации. Равным образом сложившаяся структура организации влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Разнообразный и богатый опыт консультация с широким активом в значительной степени обуславливает создание систем массового участия. Идейные соображения высшего порядка, а также сложившаяся структура организации требуют от нас анализа форм развития. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке систем массового участия.',

            cards_info: [
                [
                    {
                        title: 'ПОТРЕБНОСТЬ В МЕДИЦИНСКИХ КАДРАХ',
                        path: '1.jpg'
                    },
                    {
                        title: 'ФЕДЕРАЛЬНЫЕ И РЕГИОНАЛЬНЫЕ ВЫПЛАТЫ',
                        path: '2.jpg'
                    }
                ],
                [
                    {
                        title: 'ОБЕСПЕЧЕНИЕ ЖИЛЬЕМ',
                        path: '3.jpg'
                    },
                    {
                        title: 'ЗАРАБОТНАЯ ПЛАТА И ВЫПЛАТЫ',
                        path: '4.jpg'
                    }
                ],
                [
                    {
                        title: 'ПОМОЩЬ ПРЕДПРИЯТИЙ И МУНИЦИПАЛЬНЫХ ОБРАЗОВАНИЙ',
                        path: '5.jpg'
                    },
                    {
                        title: 'ПОДДЕРЖКА БУДУЩИХ МЕДИЦИНСКИХ РАБОТНИКОВ',
                        path: '6.jpg'
                    }
                ],
                [
                    {
                        title: 'СОЦИАЛЬНАЯ ПОДДЕРЖКА',
                        path: '7.jpg'
                    }
                ]
            ],

            new_cards: [
                'health_worker/new_1.png',
                'health_worker/new_2.png',
                'health_worker/new_3.png',
                'health_worker/new_4.png'
            ]
        }
    },

    components: {
        TitleComponent,
        TextForInfBlock,
        HealthInfoCard,
        InfImg
    },

    mounted(){
        get_start();
    },

    props: {
        typeStyle: String
    },

    setup(props){
        const mainColor = inject('mainColor')
        const width = inject('width')
        const height = inject('height')

        const componentColor = {
            backgroundColor: 'white'
        }

        const textComponent = {
            color: 'black'
        }


        if (props.typeStyle === 'reverse'){
            componentColor.backgroundColor = mainColor
            textComponent.color = 'white'
        }

        return { mainColor, componentColor, textComponent,  width, height }
    }
}
</script>