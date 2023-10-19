<template>
    <v-container>
        <button-back label="на главную" @my-event="go_back" />

        <!-- <anket-title title="Анкета соискателя" />

        <anket-text 
            text="Заполните анкету соискателя, указав, какая сфера деятельности, должность и профессия вам интересны."
        /> -->

        <TitleComponent title="Анкета соискателя"/>

        <v-row :class="[ width > 1280 ? 'text_style py-10' : 'text_style_mobile py-10' ]" :style="textStyle" no-gutters justify="center">
            <v-col v-if="width > 1280"></v-col>
            <v-col :cols="[ width > 1280 ? 8 : 12 ]">

                <div :class="[ width > 1280 ? 'title_question' : 'title_question_mobile']">Как принять участие в проекте «Курс на Север»</div><br>

                
                &nbsp;&nbsp;&nbsp;&nbsp;Рассматриваете Мурманскую область в качестве места для построения карьеры? Предлагаем стать участником проекта «Курс на Север»!<br><br>
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
                        заполнить анкету и прикрепить резюме;
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
                В течение максимум 5 рабочих дней с вами свяжется куратор и предложит подходящие варианты работы с учетом уровня образования, профессиональных компетенций, опыта работы и ваших пожеланий.<br> 

                <div :class="[ width > 1280 ? 'title_question mt-5' : 'title_question_mobile mt-5']">Пора взять Курс на Север!</div>
            </v-col>
            <v-col v-if="width > 1280"></v-col>
        </v-row>

        <v-row>
            <v-col v-if="width > 1280"></v-col>
            <v-col :cols="[ width > 1280 ? 8 : 12 ]">
                <v-form @submit.prevent="submit">
                    <text-field-component :rules="surnameRule"  title="Фамилия" v-model="surname"/>
                    <text-field-component :rules="nameRule" title="Имя" v-model="name" />
                    <CheckBoxComonent :color="mainColor" title="Отчество отсутствует" v-model="selected" />
                    <text-field-component :rules="patronymicRule" v-if="!selected"  title="Отчество" v-model="patronymic" />
                    <text-field-component title="Возраст" type="number" v-model="age" />
                    <text-field-component :rules="emailRule" title="Электронный адрес" v-model="email"  />

                    <!-- <AddressCardInput  v-model="mail" title="Почтовый адрес" @onOpenDialog="() => dialogAddress = true" />

                    <v-dialog
                        v-model="dialogAddress"
                        width="auto"
                    >
                        <address-card :close-dialog="() => dialogAddress = false"   title="Почтовый адрес" v-model="mail" />
                    </v-dialog> -->

                    <div class="vue-truncate-html-example mt-5">
                        <vue-dadata placeholder="Почтовый адрес" v-model="mailArea" :token="dadata_token" />
                    </div>
                    
                    <div class="mt-8"></div>
                    <!-- <AddressCardInput  v-model="mailRegistration" title="Адрес регистрации" @onOpenDialog="() => dialogRegister = true" />

                    <v-dialog
                        v-model="dialogRegister"
                        width="auto"
                    >
                        <address-card v-model="mailRegistration" :close-dialog="() => dialogRegister = false" title="Адрес регистрации" />
                    </v-dialog> -->

                    <div class="vue-truncate-html-example mt-5">
                        <vue-dadata placeholder="Адрес регистрации" v-model="mailRegistration" :token="dadata_token" />
                    </div>



                    <div class="mt-8"></div>

                    <text-field-component :rules="mobilePhoneRule" v-model="mobilePhone" title="Номер телефона" />
                    <text-field-component :rules="dreamJobRule" v-model="dreamJob" title="Желаемая профессия" />

                    <!-- <combobox-component v-model="family" title="Семейное положение" :items="['не замужем', 'замужем', 'холост', 'женат']" /> -->
                    
                    <v-combobox 
                        v-model="family" 
                        variant="solo-filled"  
                        :color="mainColor"
                        :items="['не замужем', 'замужем', 'холост', 'женат']"
                        label="Семейное положение"
                        class="text_field_label"
                    >
                        <!-- <template v-slot:item="{ index, item }">
                            <v-list>
                                <v-list-item @click="family = item">
                                    <span class="text_field_label">{{ item.title }}</span>
                                </v-list-item>
                            </v-list>
                        </template> -->

                    </v-combobox>


                    <!-- <combobox-component v-model="childrens" title="Дети" :items="['есть', 'нет']" /> -->

                    <v-combobox 
                        v-model="childrens" 
                        variant="solo-filled"  
                        :color="mainColor"
                        :items="['есть', 'нет']"
                        label="Дети"
                        class="text_field_label"
                    >
                        <!-- <template v-slot:item="{ index, item }">
                            <v-list>
                                <v-list-item @click="childrens = item">
                                    <span class="text_field_label">{{ item.title }}</span>
                                </v-list-item>
                            </v-list>
                        </template> -->

                    </v-combobox>

                    <!-- <combobox-component v-model="education" title="Образование" :items="['среднее', 'среднее профессиональное', 'высшее, высшее - бакалавриат', 'высшее - магистратура']" /> -->

                    <v-combobox 
                        v-model="education" 
                        variant="solo-filled"  
                        :color="mainColor"
                        :items="['среднее', 'среднее профессиональное', 'высшее, высшее - бакалавриат', 'высшее - магистратура']"
                        label="Образование"
                        class="text_field_label"
                    >
                        <!-- <template v-slot:item="{ index, item }">
                            <v-list>
                                <v-list-item @click="education = item">
                                    <span class="text_field_label">{{ item.title }}</span>
                                </v-list-item>
                            </v-list>
                        </template> -->

                    </v-combobox>

                    <text-field-component v-model="nameInstitution" title="Наименование учебного заведения" />

                    <!-- <combobox-component v-model="possibilityOfRelocation" title="Возможность переезда в Мурманскую область" :items="['да', 'нет']" /> -->

                    <v-combobox 
                        v-model="possibilityOfRelocation" 
                        variant="solo-filled"  
                        :color="mainColor"
                        :items="['да', 'нет']"
                        label="Возможность переезда в Мурманскую область"
                        class="text_field_label"
                    >
                        <!-- <template v-slot:item="{ index, item }">
                            <v-list>
                                <v-list-item @click="possibilityOfRelocation = item">
                                    <span class="text_field_label">{{ item.title }}</span>
                                </v-list-item>
                            </v-list>
                        </template> -->
                        <!-- <template slot="selection" :slot-scope="{item, index}">
                            <span class="text_field_label">{{ item }}</span>
                        </template> -->

                    </v-combobox>

                    <!-- <combobox-component v-model="needForHousing" title="Необходимость жилья" :items="['да', 'нет']" /> -->

                    <v-combobox 
                        v-model="needForHousing" 
                        variant="solo-filled"  
                        :color="mainColor"
                        :items="['да', 'нет']"
                        label="Необходимость жилья"
                        class="text_field_label"
                    >
                        <!-- <template v-slot:selection="items" >
                            <v-list>
                                
                                    <v-list-item @click:close="true" >
                                        <span  class="text_field_label">{{ items.item.title }}</span>
                                    </v-list-item>
                                
                            </v-list>
                        </template> -->
                        <!-- @click="needForHousing = item" -->
                    </v-combobox>


                    <text-field-component v-model="desiredSalaryLevel" title="Желаемый уровень заработной платы" />
                    <text-field-component v-model="generalExperience" title="Общий стаж" />
                    <text-field-component v-model="positionAtLastJob" title="Должность на последнем месте работы" />
                    <text-field-component v-model="additionalInf" title="Дополнительная информация" />
                    
                    <alert-component
                        v-model="chekboxConfrimationProgramm"
                        title="Предупреждение" 
                        text="Настоящим подтверждаю, что являюсь гражданином, обратившимся в рамках реализации проекта «Курс на Север» и прошу оказать содействие в поиске подходящей работы в рамках Постановления Правительства Мурманской области от 28.04.2023 г. № 329-ПП “О службе сопровождения “Курс на Север”"
                        type="info"
                        checkbox-label="Подтверждаю"
                        :rules="chekboxConfrimationProgrammRule"
                    />

                    <div class="my-10"></div>
                    <!-- <FileInputComponent title="Прикрепить резюме" /> -->

                    <v-file-input 
                        accept="application/pdf"
                        variant="solo-filled"
                        label="Прикрепить резюме"
                        :color="mainColor"
                        class="text_field_label mt-5 mb-5"
                        @change="onSummarySelected"
                    >
                    </v-file-input>


                    
                    <alert-component
                        v-model="chekboxConfrimationPD"
                        title="Согласие на обработку персональных данных"
                        text="Я подтверждаю свое согласие на обработку персональных данных. Я проинформирован о том, что направление данного обращения в государственный орган, орган местного самоуправления или должностному лицу, в компетенцию которых входит решение поставленных в обращении вопросов, не является разглашением сведений, содержащихся в обращении."
                        type="warning"
                        checkbox-label="Подтверждаю"
                        :rules="chekboxConfrimationPDRule"
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
import ButtonBack from './../../components/test_1/details/ButtonBack.vue';
import TextFieldComponent from '@/components/test_1/details/ankets/TextFieldComponent.vue';
import AddressCard from './details/ankets/AddressCard.vue';
import ComboboxComponent from './details/ankets/ComboboxComponent.vue';
import TextAreaComponent from './details/ankets/TextAreaComponent.vue';
import AnketTitle from './details/ankets/AnketTitle.vue';
import AnketText from './details/ankets/AnketText.vue';
import AlertComponent from './details/ankets/AlertComponent.vue';
import ButtonAnket from './details/ankets/ButtonAnket.vue';
import CheckBoxComonent from './details/ankets/CheckBoxComonent.vue';
import FileInputComponent from './details/ankets/FileInputComponent.vue';
import AddressCardInput from './details/ankets/AddressCardInput.vue';
import TitleComponent from '@/components/test_1/details/TitleComponents.vue';
import { set_part_of_navbar } from '@/localstorage/storage_of_location_site';
import { inject, ref} from 'vue';

import { VueDadata } from 'vue-dadata';
import 'vue-dadata/dist/style.css';
import axios from 'axios';


export default{

    components: {
        ButtonBack,
        TextFieldComponent,
        AddressCard,
        ComboboxComponent,
        TextAreaComponent,
        AnketTitle,
        AnketText,
        AlertComponent,
        ButtonAnket,
        CheckBoxComonent,
        FileInputComponent,
        AddressCardInput,
        TitleComponent,
        VueDadata
    },

    setup(){
        let selected = ref(false);
        const mainColor = inject('mainColor')
        let surname = ref("")
        let name = ref("")
        let patronymic = ref("")
        let age = ref("")
        let email = ref("")
        let mailArea = ref("")
        let mailRegistration = ref("")

        // const mail = ref({
        //     country: null,
        //     subjectRF: null,
        //     town: null,
        //     street: null,
        //     building: null,
        //     apartment: null,
        //     index: null,
        //     additionalInfo: null,

        //     toString: function(){
        //         let value = "";

        //         value = `${(this.country === null)? "" : this.country }` +
        //                 `${(this.subjectRF === null) ? "" : ", " + this.subjectRF }` +
        //                 `${(this.town === null) ? "" : ", " + this.town }` +
        //                 `${(this.street === null) ? "" : ", " + this.street }` +
        //                 `${(this.building === null) ? "" : ", " + this.building }` +
        //                 `${(this.apartment === null) ? "" : ", " + this.apartment }` +
        //                 `${(this.index === null) ? "" : ", " + this.index }` +
        //                 `${(this.additionalInfo === null) ? "" : ", " + this.additionalInfo }` 
        //         return value
        //     }
        // })


        // const mailRegistration = ref({
        //     country: null,
        //     subjectRF: null,
        //     town: null,
        //     street: null,
        //     building: null,
        //     apartment: null,
        //     index: null,
        //     additionalInfo: null,

        //     toString: function(){
        //         let value = "";

        //         value = `${(this.country === null)? "" : this.country }` +
        //                 `${(this.subjectRF === null) ? "" : ", " + this.subjectRF }` +
        //                 `${(this.town === null) ? "" : ", " + this.town }` +
        //                 `${(this.street === null) ? "" : ", " + this.street }` +
        //                 `${(this.building === null) ? "" : ", " + this.building }` +
        //                 `${(this.apartment === null) ? "" : ", " + this.apartment }` +
        //                 `${(this.index === null) ? "" : ", " + this.index }` +
        //                 `${(this.additionalInfo === null) ? "" : ", " + this.additionalInfo }` 
        //         return value
        //     }
        // })

        let mobilePhone = ref("")
        let dreamJob = ref("")
        let family = ref(null)
        let childrens = ref(null)
        let education = ref(null)
        let nameInstitution = ref("")
        let possibilityOfRelocation = ref(null)
        let needForHousing = ref(null)
        let desiredSalaryLevel = ref("")
        let generalExperience = ref("")
        let positionAtLastJob = ref("")
        let additionalInf = ref("")
        let chekboxConfrimationProgramm = ref(false)
        let chekboxConfrimationPD = ref(false)

        let surnameRule = [
            value => {
            if (value) return true

            return 'Фамилия требует заполнения.'
            }
        ]

        let nameRule = [
            value => {
                if (value) return true

                return 'Имя требует заполнения'
            }
        ]

        let patronymicRule = [
            (value, selected) => {
                if (!selected){
                    if (value) return true

                    return 'Отчетсво требует заполнения'
                } 

                return true
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


        let mobilePhoneRule = [
            value => {
                if (value) return true
                
                return 'Номер телефона требует заполнения'
            },

            value => {
                if(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value)) return true

                return 'Номер телефона должен быть достоверным'
            }
        ]

        let dreamJobRule = [
            value => {
                if (value) return true

                return 'Желаемая профессия требует заполнения'
            }
        ]


        let chekboxConfrimationProgrammRule = [
            value => {
                if (value) return true

                return 'Необходимо согласиться с условием, чтобы продолжить.'
            }
        ]

        let chekboxConfrimationPDRule = [
            value => {
                if (value) return true

                return 'Необходимо подтвердить свое согласие на обработку персональных данных'
            }
        ]

        const width = inject("width");
        // function sendData(){
        //     console.log("function from composition api")
        // }

        const dadata_token = import.meta.env.VITE_DADATA_API_KEY
        const sendre_api = import.meta.env.VITE_ADDRESS_SMTP_SENDER

        return { 
                    mainColor, 
                    surname, 
                    name,
                    patronymic,
                    age,
                    email,
                    mobilePhone,
                    dreamJob,
                    family,
                    childrens,
                    education,
                    nameInstitution,
                    possibilityOfRelocation,
                    needForHousing,
                    desiredSalaryLevel,
                    generalExperience,
                    positionAtLastJob,
                    additionalInf,
                    chekboxConfrimationProgramm,
                    chekboxConfrimationPD,
                    selected,
                    surnameRule,
                    nameRule,
                    patronymicRule,
                    emailRule,
                    mobilePhoneRule,
                    dreamJobRule,
                    chekboxConfrimationProgrammRule,
                    chekboxConfrimationPDRule,
                    mailArea,
                    mailRegistration,
                    width,
                    dadata_token,
                    sendre_api
                }
    },

    data(){
        return{
            dialogAddress: false,
            dialogRegister: false,
            subjects_RF: ['Республика Адыгея (Адыгея)', 'Республика Алтай', 'Республика Башкортостан', 'Республика Бурятия', 'Республика Дагестан', 'Республика Ингушетия', 'Кабардино-Балкарская Республика', 'Республика Калмыкия', 'Карачаево-Черкесская Республика', 'Республика Карелия', 'Республика Коми', 'Республика Крым', 'Республика Марий Эл', 'Республика Мордовия', 'Республика Саха (Якутия)', 'Республика Северная Осетия – Алания', 'Республика Татарстан (Татарстан)', 'Республика Тыва', 'Удмуртская Республика', 'Республика Хакасия', 'Чеченская Республика', 'Чувашская Республика – Чувашия', 'Алтайский край', 'Забайкальский край', 'Камчатский край', 'Краснодарский край', 'Красноярский край', 'Пермский край', 'Приморский край', 'Ставропольский край', 'Хабаровский край', 'Амурская область', 'Архангельская область', 'Астраханская область', 'Белгородская область', 'Брянская область', 'Владимирская область', 'Волгоградская область', 'Вологодская область', 'Воронежская область', 'Ивановская область', 'Иркутская область', 'Калининградская область', 'Калужская область', 'Кемеровская область', 'Кировская область', 'Костромская область', 'Курганская область', 'Курская область', 'Ленинградская область', 'Липецкая область', 'Магаданская область', 'Московская область', 'Мурманская область', 'Нижегородская область', 'Новгородская область', 'Новосибирская область', 'Омская область', 'Оренбургская область', 'Орловская область', 'Пензенская область', 'Псковская область', 'Ростовская область', 'Рязанская область', 'Самарская область', 'Саратовская область', 'Сахалинская область', 'Свердловская область', 'Смоленская область', 'Тамбовская область', 'Тверская область', 'Томская область', 'Тульская область', 'Тюменская область', 'Ульяновская область', 'Челябинская область', 'Ярославская область', 'Город Москва', 'Город Санкт-Петербург', 'Город Севастополь', 'Еврейская автономная область', 'Ненецкий автономный округ', 'Ханты-Мансийский автономный округ – Югра', 'Чукотский автономный округ', 'Ямало-Ненецкий автономный окр'],
            summary: ""
        }
    },

    methods:{
        go_back(){
            this.$router.push({name: 'TestHome_1'})
        },

        get_start(){
            window.scrollTo({ top: 0, behavior: 'smooth'})
        },

        check(){
            alert("тест")
        },

        // send_anketa(){
           
        // },

        onSummarySelected(event){
            this.summary = event.target.files[0]
        },

        async submit (event) {
            const results = await event;

            if (results.valid){
                const fd = new FormData();
                fd.append("surname", this.surname);
                fd.append("name", this.name);
                fd.append("patronymic", this.patronymic);
                fd.append("age", this.age);
                fd.append("email", this.email);
                fd.append("mailArea", this.mailArea);
                fd.append("mailRegistration", this.mailRegistration);
                fd.append("mobilePhone", this.mobilePhone);
                fd.append("dreamJob", this.dreamJob);
                fd.append("family", this.family);
                fd.append("childrens", this.childrens);
                fd.append("education", this.education);
                fd.append("nameInstitution", this.nameInstitution);
                fd.append("possibilityOfRelocation", this.possibilityOfRelocation);
                fd.append("needForHousing", this.needForHousing);
                fd.append("desiredSalaryLevel", this.desiredSalaryLevel);
                fd.append("generalExperience", this.generalExperience);
                fd.append("positionAtLastJob", this.positionAtLastJob);
                fd.append("additionalInf", this.additionalInf);
                fd.append("summary", this.summary, this.summary.name);

                axios.post(`${this.sendre_api}anketa_soiskatel`, fd)

                this.$router.push({name: 'ThanksAnketa'})
                
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth'});
                // this.sendData()
            }
        },
    },

    mounted(){
        this.get_start()
        set_part_of_navbar(this.$route.name)
    }
}
</script>

<style>

#send-btn{
    color: white
}

.text_field_label{
        font-family: "MontserratMedium";
}
</style>