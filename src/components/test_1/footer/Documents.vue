<template>
    <v-row class="d-flex justify-start">
        <div class="docs">ДОКУМЕНТЫ:</div>
    </v-row>

    <v-row   class="d-flex justify-start">
        <v-col cols=1>
            <v-icon color="white" class="mr-3" icon="mdi-bookmark"></v-icon>
        </v-col>

        <v-col   cols="8" class="personal_data">
            <div id="policy-link-style" @click="downloadPolocyPD()">
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
import axios from 'axios';
import { downloadFile } from '@/tools/download';


const pdfUrl = '/public/data/policyPD.pdf';
const pdfFileName = 'Политика о персональных данных ГОБУ ЦЗН Мурманской области';

const sendre_api = import.meta.env.VITE_ADDRESS_SMTP_SENDER

function downloadPolocyPD(){
    axios({
        url: `${sendre_api}policy_personal_data`, //your url
        method: 'GET',
        responseType: 'blob', // important
    }).then((response) => {
        // create file link in browser's memory
        const href = URL.createObjectURL(response.data);

        // create "a" HTML element with href to file & click
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', pdfFileName); //or any other extension
        document.body.appendChild(link);
        link.click();

        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    });
}

</script>

<style scoped>

    #policy-link-style:hover{
        cursor: pointer;
        color: #D1E0E6;
    }

</style>