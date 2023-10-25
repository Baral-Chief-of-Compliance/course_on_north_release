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
                <v-form @submit.prevent="submit">
                    <text-field-component v-model="nameCompany" title="Полное наименование" :rules="nameCompanyRule" />

                    <div class="vue-truncate-html-example">
                        <vue-dadata placeholder="Юридеский адрес" v-model="Address" :token="dadata_token" />
                    </div>

                    <!-- <address-card-input v-model="lawMail" class="mt-5" title="Юридеский адрес" @onOpenDialog="() => dialogEntityAddress = true "/>
                    
                    <v-dialog
                        v-model="dialogEntityAddress"
                        width="auto" 
                    >
                        <address-card :close-dialog="() => dialogEntityAddress = false" title="Юридический адрес" v-model="lawMail" />
                    </v-dialog> -->

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
                        <!-- <vacancies-card :close-dialog="() => dialogSendVacancies = false" title="Прикрепить вакансии" /> -->

                            <v-card :width="(width) > 1280 ? (width / 2) : (width-50)">
                                <template v-slot:prepend>
                                    <v-icon :color="mainColor" icon="mdi-folder-account" size="x-large"></v-icon>
                                </template>

                                <template v-slot:append>
                                    <v-btn @click="() => dialogSendVacancies = false" variant="text" color="red">
                                        <v-icon  size="x-large" color="red" icon="mdi-close"></v-icon>
                                    </v-btn> 
                                </template>

                                <template v-slot:title>
                                    <div :class="width > 420 ? 'title-vacancies-card' : 'title-mobile-vacancies-card'" :style="{color: addColor}">
                                        Прикрепить вакансии
                                    </div>
                                </template>

                                <v-card-text class="mt-5">
                                    <v-alert 
                                        type="warning"
                                        border="start"
                                        variant="tonal"
                                    >   
                                        <template v-slot:title>
                                            <div class="alert-title-vacancies-card">
                                                Пример оформления вакансий
                                            </div>
                                        </template>

                                        <div class="alert-text-vacancies-card mt-5">
                                            Для примера оформления вакансий необходимо скачать таблицу.
                                        </div>

                                        <ButtonAnket 
                                            title="Скачать таблицу"
                                            color-text="white"
                                            :color="excelColor"
                                            @click="downloadExampleVacancyRegistration()"
                                        />

                                    </v-alert>

                                    <!-- <FileInputComponent 
                                        title="Прикрепить вакансии" 
                                    /> -->

                                    <v-file-input 
                                        accept="application/vnd.ms-excel"
                                        variant="solo-filled"
                                        label="Прикрепить вакансии"
                                        :color="mainColor"
                                        class="text_field_label mt-5 mb-5"
                                        @change="onVacanciesSelected"
                                        
                                    >
                                    </v-file-input>


                                </v-card-text>
                            </v-card>


                    </v-dialog>

                    <text-field-component :rules="contactRule" v-model="contact" title="ФИО контактного лица" />
                    <text-field-component :rules="phoneNumberRule" v-model="phoneNumber" title="Номер телефона" />
                    <text-field-component :rules="emailRule" v-model="email" title="Электронная почта" />
                    
                    <!-- <FileInputComponent 
                        title="Карточка предприятия" 
                    /> -->

                    <v-file-input 
                        accept="application/pdf"
                        variant="solo-filled"
                        label="Карточка предприятия"
                        :color="mainColor"
                        class="text_field_label mt-5 mb-5"
                        @change="onCompanyCardSelected"
                        
                    >
                    </v-file-input>
                    
                    <!-- @change="onCompanyCardSelected" -->

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
import TitleComponent from '@/components/test_1/details/TitleComponents.vue';
import { set_part_of_navbar } from '@/localstorage/storage_of_location_site';
import { ref, inject } from 'vue';
import { downloadFile } from '@/tools/download';

import { VueDadata } from 'vue-dadata';
import 'vue-dadata/dist/style.css';


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
        TitleComponent,
        VueDadata
    },

    setup(){
        let nameCompany = ref("")

        let Address = ref("")

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

        const dadata_token = import.meta.env.VITE_DADATA_API_KEY
        const sendre_api = import.meta.env.VITE_ADDRESS_SMTP_SENDER

        function downloadExampleVacancyRegistration(){
            axios({
                url: `${sendre_api}example_vacancy_registration`, //your url
                method: 'GET',
                responseType: 'blob', // important
            }).then((response) => {
                // create file link in browser's memory
                const href = URL.createObjectURL(response.data);

                // create "a" HTML element with href to file & click
                const link = document.createElement('a');
                link.href = href;
                link.setAttribute('download', 'Пример заполнения таблицы.xlsx'); //or any other extension
                document.body.appendChild(link);
                link.click();

                // clean up "a" element & remove ObjectURL
                document.body.removeChild(link);
                URL.revokeObjectURL(href);
            });
        }

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
            width,
            Address,
            downloadFile,
            dadata_token,
            sendre_api,
            downloadExampleVacancyRegistration
        }

    },

    data(){
        return{
            dialogEntityAddress: false,
            dialogSendVacancies: false,
            Vacancies: "",
            CompanyCard: ""
        }
    },

    methods:{
        go_back(){
            this.$router.push({name: 'TestHome_1'})
        },

        get_start(){
            window.scrollTo({ top: 0, behavior: 'smooth'})
        },

        onVacanciesSelected(event){
            this.Vacancies = event.target.files[0]
        },

        onCompanyCardSelected(event){
            this.CompanyCard = event.target.files[0]
        },


        async submit (event){
            const results = await event

            if (results.valid){
                const fd = new FormData();
                fd.append("nameCompany", this.nameCompany)
                fd.append("Address", this.Address)
                fd.append("Vacancies", this.Vacancies, this.Vacancies.name)
                fd.append("contact", this.contact)
                fd.append("phoneNumber", this.phoneNumber)
                fd.append("email", this.email)
                fd.append("CompanyCard", this.CompanyCard, this.CompanyCard.name)

                axios.post(`${this.sendre_api}anketa_employer`, fd)

                this.$router.push({name: 'ThanksAnketa'})
            } else{
                window.scrollTo({ top: 0, behavior: 'smooth'})
            }
        }
    },

    mounted(){
        this.get_start()
        set_part_of_navbar(this.$route.name)
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