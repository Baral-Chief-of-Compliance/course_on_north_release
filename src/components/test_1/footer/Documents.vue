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
        url: `https://murman-zan-api.site/materials/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BE%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20%D0%93%D0%9E%D0%91%D0%A3%20%D0%A6%D0%97%D0%9D%20%D0%9C%D1%83%D1%80%D0%BC%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B9%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8.pdf`, //your url
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