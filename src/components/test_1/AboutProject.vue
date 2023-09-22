<template >
    <div id="about_project" :style="componentColor">
        <v-container  class="py-10">
            <TitleComponent :typeStyle="typeStyle" title="о проекте" />
            <TextForInfBlock :textContent="text_1" :textStyle="textComponent" />
            <TextForInfBlock :textContent="text_2" :textStyle="textComponent" />



        <v-container>
            <v-row :class="[ width > 1280 ? 'text_style_phone_number' : 'text_style_phone_number_mobile' ]" :style="textComponent" no-gutters justify="center">
                <v-col :cols="[ width > 1280 ? 0 : 2]"></v-col>
                <v-col :cols="[ width > 1280 ? 6 : 8 ]">Телефон «горячей линии» Cлужбы сопровождения</v-col>
                <v-col :cols="[ width > 1280 ? 0 : 2]"></v-col>
            </v-row>

            <v-row :class="[ width > 1280 ? 'text_style_phone_number' : 'text_style_phone_number_mobile' ]" :style="textComponent" no-gutters justify="center">
                <v-col :cols="[ width > 1280 ? 0 : 2]"></v-col>
                <v-col :cols="[ width > 1280 ? 6 : 8 ]">«Курс на Север»: 8 (8152) 56-67-07</v-col>
                <v-col :cols="[ width > 1280 ? 0 : 2]"></v-col>
            </v-row>
        </v-container>

        <TextForInfBlock :textContent="text_3" :textStyle="textComponent" />
        <TextForInfBlock :textContent="text_4" :textStyle="textComponent" />

        <v-container>
            <v-row :class="[ width > 1280 ? 'text_style_phone_number' : 'text_style_phone_number_mobile' ]" :style="textComponent" no-gutters justify="center">
                <v-col :cols="[ width > 1280 ? 0 : 2]"></v-col>
                <v-col :cols="[ width > 1280 ? 6 : 8 ]">Добро пожаловать в Мурманскую область!</v-col>
                <v-col :cols="[ width > 1280 ? 0 : 2]"></v-col>
            </v-row>
        </v-container>

        </v-container>
    </div>
</template>

<script>
import TitleComponent from './../test_1/details/TitleComponents.vue';
import TextForInfBlock from './../test_1/details/TextForInfBlock.vue';
import { inject } from 'vue';

export default{

    data(){
        return{
            text_1: 'Помощь на новом месте соискателю, принявшему решение переехать в Мурманскую область с целью трудоустройства, окажет Служба сопровождения «Курс на Север».',
            text_2: 'Персональный консультант разработает индивидуальный план мероприятий по трудоустройству и переезду, осуществит подбор вариантов подходящей работы, организует проведение видео-собеседования с работодателем, осуществит подбор агентства недвижимости, организует трансфер от места прибытия к месту проживания и поможет в решении жизненных ситуаций.',
            text_3: 'Получение актуальной и своевременной консультации по вопросам трудоустройства для граждан, желающих переехать в Мурманскую область.',
            text_4: 'Время работы «горячей линии» Службы сопровождения «Курс на Север» ежедневно (с понедельника по пятницу) с 08.45 до 17.00, время московское.'
        }
    },

    props: {
        typeStyle: String
    },

    components:{
        TitleComponent,
        TextForInfBlock
    },

    setup(props){
        const mainColor = inject('mainColor');

        const width = inject("width");
        const height = inject("height");

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

        return { mainColor, componentColor, textComponent, width, height }
    }
}
</script>

<style scoped>
    .text_style_phone_number{
        font-family: "MontserratMedium";
        font-size: 24px;
        line-height: 2;
        text-align: center;
        font-weight: bold;
    }

    .text_style_phone_number_mobile{
        font-family: "MontserratMedium";
        font-size: 20px;
        line-height: 2;
        text-align: center;
        font-weight: bold;
    }
</style>
