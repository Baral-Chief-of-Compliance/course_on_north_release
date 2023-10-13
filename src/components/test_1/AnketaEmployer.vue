<template>
    <v-container>

        <button-back label="на главную" @my-event="go_back" />

        <!-- <anket-title title="Анкета работодателя" /> -->
        <!-- <anket-text 
            text="Заполните анкету работодателя."
        /> -->

        <v-row :class="[ width > 1280 ? 'text_style' : 'text_style_mobile' ]" :style="textStyle" no-gutters justify="center">
            <v-col v-if="width > 1280"></v-col>
            <v-col :cols="[ width > 1280 ? 8 : 12 ]">
                &nbsp;&nbsp;&nbsp;&nbsp;Мурманская область, относительно молодой регион, сегодня является   флагманом развития Арктики с крупнейшим в мире незамерзающим портом за полярным кругом и главным транспортным узлом у северных берегов нашей страны.<br>
                &nbsp;&nbsp;&nbsp;&nbsp;В регионе сегодня реализуется ряд ключевых проектов, в том числе строительство морского терминала «Тулома» и порта «Лавна», а также ведется масштабная работа по созданию комфортной городской среды, модернизации учреждений образования, культуры и спортивных объектов в рамках реализации федеральных программ и регионального плана «На Севере – жить!». Только в 2022-2023 годах открыты три новых детских сада и школа, начаты работ по строительству еще двух учреждений образования, завершены капитальные ремонты сразу на четырех объектах. В регионе модернизированы более 200 кабинетов, спортивных залов, столовых и общественных пространств в школах и садах, в том числе созданы отлично оснащенные площадки для углубленного изучения предметов и подготовки к олимпиадам.<br>
                &nbsp;&nbsp;&nbsp;&nbsp;В Мурманской области каждый второй житель регулярно занимается спортом и физической культурой. Этому способствует планомерная работа регионального правительства: за последние 4 года созданы и модернизированы более 60 спортивных объектов, в том числе крупные физкультурно-оздоровительные комплексы. В их числе – ФОК «Вертикаль» с одним из лучших скалодромов в СЗФО и современная инфраструктура Кировской спортивной школы олимпийского резерва с горнолыжным подъемником длиной 780 метров, системами оснежения и освещения. Кстати, покататься на горных лыжах или сноуборде в течение самого продолжительного в стране сезона можно не только в Кировске, обустроенные склоны есть в Мурманске, Мончегорске и Ковдоре. Также в разных муниципалитетах открыты лыжные трассы и катки, а с 2022 года открываются современные молодежные пространства «СОПКИ.СПОРТ», в которых северяне до 35 лет могут заниматься бесплатно. В 2023 году число залов достигнет 17.<br> 
                &nbsp;&nbsp;&nbsp;&nbsp;Регион является пионером национального проекта «Культура»: в Мурманске открыта первая в стране библиотека, модернизированная по модельному стандарту, а также впервые проведена капитальная реновация объекта культуры в рамках одноименной федеральной инициативы. В заполярной столице работают три профессиональных театров, в том числе старейший за полярным кругом – областной театр кукол. А всего в регионе 13 областных музеев, филармония, 138 общедоступных библиотек, 24 из которых модельные, 50 детских школ искусств, музыкальных и художественных школ.<br>
                &nbsp;&nbsp;&nbsp;&nbsp;В рамках регионального стратегического плана «На Севере – жить» в Мурманской области реализуется комплекс программ, направленных на повышение качества жизни северян. Так, «Свой дом в Арктике» - возможность получить выплату до 1,5 млн рублей на строительство, приобретение дома на первичном рынке или приобретение домокомплекта. С 5 июля 2022 года сертификаты уже получили более 600 северян общей суммой 813,7 млн рублей.<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Активно развивается туристическая отрасль. Одна из изюминок нашего туризма – арктическая кухня с невероятно вкусными морепродуктами. Все туристы стремятся увидеть Териберку, полуостров Рыбачий, старинные Варзугу и Умбу, удивительные Лапландский заповедник и заповедник Пасквик<br>
                &nbsp;&nbsp;&nbsp;&nbsp;За последние годы решена проблема транспортной доступности в любую точку области, радуют обновленные железнодорожный вокзал и фирменные поезда, международный аэропорт федерального значения и возможность прямых перелетов.<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Что и говорить, столица Арктики – сегодня одна из самых привлекательных для инвесторов территорий.<br>
                &nbsp;&nbsp;&nbsp;&nbsp;А еще это край с душой, где дыхание природы рядом! Когда красота окружающего мира тебя вдохновляет!  И она всегда разная! То зимняя сказка со снежными сопками и северным сиянием в небе. То лето - в облаках цветущей сирени и морошковым ароматом в лесу, когда солнце забывает прятаться за горизонт. Осень в золоте лесов, или весна со свежим ветром перемен, похожая на наш Кольский край.<br>
                &nbsp;&nbsp;&nbsp;&nbsp;И именно в этих северных широтах живут самые отзывчивые и доброжелательные люди, готовые всегда помочь и поддержать.<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Именно здесь, ты не только начнешь свой путь в профессии, но и станешь жителем перспективного региона с ярким будущим, найдешь преданных друзей и обязательно влюбишься в удивительное Кольское Заполярье!<br>
            </v-col>
            <v-col v-if="width > 1280"></v-col>
        </v-row>

        <v-container>
            <v-form>
                <text-field-component v-model="nameCompany" title="Полное наименование" :rules="nameCompanyRule" />
                <address-card-input v-model="lawMail" class="mt-5" title="Юридеский адрес" @onOpenDialog="() => dialogEntityAddress = true "/>
                
                <v-dialog
                    v-model="dialogEntityAddress"
                    width="auto" 
                >
                    <address-card :close-dialog="() => dialogEntityAddress = false" title="Юридический адрес" v-model="lawMail" />
                </v-dialog>

                <button-anket 
                    @click="dialogSendVacancies = true"
                    title="Прикрепить вакансии"
                    color-text="white"
                    :color="excelColor"
                    class="mb-5"
                />

                <v-dialog
                    v-model="dialogSendVacancies"
                    width="auto"
                >
                    <vacancies-card :close-dialog="() => dialogSendVacancies = false" title="Прикрепить вакансии" />
                </v-dialog>

                <text-field-component :rules="contactRule" v-model="contact" title="ФИО контактного лица" />
                <text-field-component :rules="phoneNumberRule" v-model="phoneNumber" title="Номер телефона" />
                <text-field-component :rules="emailRule" v-model="email" title="Электронная почта" />
                
                <FileInputComponent 
                    title="Карточка предприятия" 
                />
                
                <button-anket
                    type="submit"
                    title="Отправить анкету"
                    color-text="white"
                    :color="mainColor"
                />

            </v-form>
 

        </v-container>
    </v-container>
</template>

<script>
import axios from 'axios';
import ButtonBack from './../../components/test_1/details/ButtonBack.vue';
import TextFieldComponent from './details/ankets/TextFieldComponent.vue';
import TextAreaComponent from './details/ankets/TextAreaComponent.vue';
import AnketTitle from './details/ankets/AnketTitle.vue';
import AnketText from './details/ankets/AnketText.vue';
import ComboboxComponent from './details/ankets/ComboboxComponent.vue';
import AlertComponent from './details/ankets/AlertComponent.vue';
import AddressCard from './details/ankets/AddressCard.vue';
import VacanciesCard from './details/ankets/VacanciesCard.vue';
import ButtonAnket from './details/ankets/ButtonAnket.vue';
import AddressCardInput from './details/ankets/AddressCardInput.vue';
import FileInputComponent from './details/ankets/FileInputComponent.vue';
import TitleComponent from '@/components/test_1/details/TitleComponents.vue'

import { ref, inject } from 'vue';


export default{


    components:{
        ButtonBack,
        TextFieldComponent,
        TextAreaComponent,
        AnketTitle,
        AnketText,
        ComboboxComponent,
        AlertComponent,
        AddressCard,
        VacanciesCard,
        ButtonAnket,
        AddressCardInput,
        FileInputComponent,
        TitleComponent
    },

    setup(){
        let nameCompany = ref("")

        const lawMail = ref({
            country: null,
            subjectRF: null,
            town: null,
            street: null,
            building: null,
            apartment: null,
            index: null,
            additionalInfo: null,

            toString: function(){
                let value = "";

                value = `${(this.country === null)? "" : this.country }` +
                        `${(this.subjectRF === null) ? "" : ", " + this.subjectRF }` +
                        `${(this.town === null) ? "" : ", " + this.town }` +
                        `${(this.street === null) ? "" : ", " + this.street }` +
                        `${(this.building === null) ? "" : ", " + this.building }` +
                        `${(this.apartment === null) ? "" : ", " + this.apartment }` +
                        `${(this.index === null) ? "" : ", " + this.index }` +
                        `${(this.additionalInfo === null) ? "" : ", " + this.additionalInfo }` 
                return value
            }
        })

        let contact = ref("")

        let phoneNumber = ref("")

        let email = ref("")

        
        let excelColor = ref("#217346")

        let mainColor = inject("mainColor")
        let width = inject("width")


        let nameCompanyRule = [
            value => {
                if (value) return true

                return 'Полное наименование требует заполнения'
            }
        ]

        let contactRule = [
            value => {
                if (value) return true

                return 'ФИО контактного лица требует заполнения'
            }
        ]

        let phoneNumberRule = [
            value => {
                    if (value) return true
                    
                    return 'Номер телефона требует заполнения'
            },

            value => {
                    if(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value)) return true

                    return 'Номер телефона должен быть достоверным'
            }
        ]

        let emailRule = [
            value => {
                if (value) return true

                return 'Электронный адрес требует заполнения'
            },

            value => {
                if(/.+@.+\..+/.test(value)) return true

                return 'Электронная почта должна быть достоверной'
            }
        ]

        return {
            nameCompany,
            lawMail,
            contact,
            phoneNumber,
            email,
            excelColor,
            mainColor,
            nameCompanyRule,
            contactRule,
            phoneNumberRule,
            emailRule,
            width
        }

    },

    data(){
        return{
            dialogEntityAddress: false,
            dialogSendVacancies: false,
        }
    },

    methods:{
        go_back(){
            this.$router.push({name: 'TestHome_1'})
        },

        get_start(){
            window.scrollTo({ top: 0, behavior: 'smooth'})
        },

        send_anketa(){
            this.$router.push({name: 'ThanksAnketa'})
        },


        async submit (event){
            const results = await event

            console.log(JSON.stringify(results, null, 2))

            if (results.valid){
                console.log('it is work')
            } else{
                window.scrollTo({ top: 0, behavior: 'smooth'})
            }
        }
    },

    mounted(){
        this.get_start()
    }
}
</script>

<style>
    .text_style{
        font-family: "MontserratMedium";
        font-size: 18px;
        line-height: 1.7;
        text-align: justify;
    }

    .text_style_mobile{
        font-family: "MontserratMedium";
        font-size: 16px;
        line-height: 1.5;
        text-align: justify;
    }
</style>