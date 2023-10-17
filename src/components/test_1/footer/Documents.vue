<template>
    <v-row class="d-flex justify-start">
        <div class="docs">ДОКУМЕНТЫ:</div>
    </v-row>

    <v-row   class="d-flex justify-start">
        <v-col cols=1>
            <v-icon color="white" class="mr-3" icon="mdi-bookmark"></v-icon>
        </v-col>

        <v-col   cols="8" class="personal_data">
            <div id="policy-link-style" @click="downloadFile(pdfUrl, pdfFileName)">
                Политика в отношении обработки персональных данных
            </div>
        </v-col> 
    </v-row>

</template>

<style>
    .docs{
        color: white;
        font-family: "MontserratMedium";
        font-size: 20px;
        font-weight: bold;
    }

    .personal_data{
        color: white;
        font-family: "MontserratMedium";
        font-size: 12px;
    }

</style>


<script setup>
import { downloadFile } from '@/tools/download';


const pdfUrl = '/public/data/policyPD.pdf';
const pdfFileName = 'Политика о персональных данных ГОБУ ЦЗН Мурманской области';

</script>

<style scoped>

    #policy-link-style:hover{
        cursor: pointer;
        color: #D1E0E6;
    }

</style>