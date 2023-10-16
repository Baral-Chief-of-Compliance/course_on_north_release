<template>
    <v-container>

        <button-back label="на главную" @my-event="go_back" />

        <!-- <anket-title title="Анкета работодателя" /> -->
        <!-- <anket-text 
            text="Заполните анкету работодателя."
        /> -->

        <TitleComponent title="Анкета работодателя" />

        <v-row :class="[ width > 1280 ? 'text_style py-10' : 'text_style_mobile py-10' ]" :style="textStyle" no-gutters justify="center">
            <v-col v-if="width > 1280"></v-col>
            <v-col :cols="[ width > 1280 ? 8 : 12 ]">

                <div :class="[ width > 1280 ? 'title_question' : 'title_question_mobile']">Как принять участие в проекте «Курс на Север»</div><br>

                
                &nbsp;&nbsp;&nbsp;&nbsp;Если вам необходимо подобрать сотрудника из числа соискателей, планирующих переезд в Мурманскую область, предлагаем стать участником проекта «Курс на Север».<br><br>
                <span class="for_this">Для этого необходимо:</span><br>
                <v-row class="d-flex justify-start ml-10">
                    <v-col cols="1">
                        <img  class="mt-2" src="@/assets/logo/logo_list_cns.svg" width="40" height="40"/>
                    </v-col>

                    <v-col cols="7" :class="[width > 625 ? 'mt-3' : 'mt-3 ml-5'] ">
                        подать заявку в службу кадрового сопровождения;
                    </v-col>
                </v-row>
                <v-row class="d-flex justify-start ml-10">
                    <v-col cols="1">
                        <img  class="mt-2" src="@/assets/logo/logo_list_cns.svg" width="40" height="40"/>
                    </v-col>

                    <v-col cols="7" :class="[width > 625 ? 'mt-3' : 'mt-3 ml-5'] ">
                        заполнить анкету работодателя и прикрепить файл с кадровой потребностью;
                    </v-col>
                </v-row>

                <v-row class="d-flex justify-start ml-10">
                    <v-col cols="1">
                        <img  class="mt-2" src="@/assets/logo/logo_list_cns.svg" width="40" height="40"/>
                    </v-col>

                    <v-col cols="7" :class="[width > 625 ? 'mt-3' : 'mt-3 ml-5']">
                        дать согласие на участие в проекте и обработку персональных данных.
                    </v-col>
                </v-row> <br>
                В течение максимум 5 рабочих дней с вами свяжется куратор и предложит на согласование соискателей, согласно заявленных требований, в т.ч. по уровню образования, профессиональных компетенций, опыта работы и ваших пожеланий.<br> 

                <div :class="[ width > 1280 ? 'title_question mt-5' : 'title_question_mobile mt-5']">Служба кадрового сопровождения «Курс на Север» будет рада помочь вашей организации!</div>
            </v-col>
            <v-col v-if="width > 1280"></v-col>
        </v-row>


        <v-row>
            <v-col v-if="width > 1280"></v-col>
            <v-col :cols="[ width > 1280 ? 8 : 12 ]">
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
            </v-col>
            <v-col v-if="width > 1280"></v-col>
        
        </v-row>


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

    .title_question{
        text-align: center;
        font-weight: bold;
        font-size: 28px;
    }

    .title_question_mobile{
        text-align: center;
        font-weight: bold;
        font-size: 20px;
    }

    .for_this{
        font-weight: bold;
    }

</style>