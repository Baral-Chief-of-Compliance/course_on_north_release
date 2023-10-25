<template>
    <v-row class="d-flex justify-start">
        <v-col cols="2">
            <v-icon class="mt-1" color="white" icon="mdi-phone"></v-icon>
        </v-col>

        <v-col cols="10">
            <div class="phone_number">8 (8152) 56-67-07</div>
        </v-col>
         
        
    </v-row>

    <v-row class="d-flex justify-start">
        <v-col cols="2">
            <v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> 
        </v-col>
        <v-col cols="10">
            <a href="mailto:KursNaSever@murman-zan.ru" class="vk" >KursNaSever@&shy;murman-zan.ru</a>
        </v-col>
    </v-row>

    <!-- <v-row class="d-flex justify-start">
        <v-icon class="mt-2" color="white" icon="mdi-email"></v-icon>
         <a href="mailto:@murman_zan.ru" class="ml-3 mail" >@czn_murman</a>
    </v-row> -->

    <v-row class="d-flex justify-start">
        <v-col cols="2">
            <img  class="mt-2" src="@/assets/logo/vk_white_2.svg" width="24" height="24"/>
        </v-col>

        <v-col cols="10">
            <a href="https://vk.com/kurs_na_sever" class="vk">Мы ВКонтакте</a>
        </v-col>
        
        
    </v-row>

    <v-row class="d-flex justify-start rights">
        <v-col>
            183039,<br>
            г. Мурманск,<br>
            ул. Академика Книповича,<br>
            д. 48
        </v-col>
    </v-row>
    
    <v-row class="d-flex justify-start mt-10">
        <v-btn block @click="go_to_map" :style="{color: mainColor, fontSize: (width >= 1920)? '15px' : (width >= 250)? '12px' : (width >= 210)? '10px' : '9px'}">НАЙДИТЕ НАС НА КАРТЕ</v-btn>
    </v-row>

</template>

<script>
import { inject } from 'vue' 


export default{
    setup(){
        const mainColor = inject('mainColor')
        const width = inject('width')

        return { mainColor, width }
    },

    methods: {
        go_to_map(){
            this.$router.push({name: 'map-czn'})
        }
    }
}
</script>

<style>
    .phone_number{
        color: white;
        font-family: "CorkiRegular";
        font-size: 25px
    }

    .vk{
        color: white;
        font-family: "CorkiRegular";
        font-size: 25px  
    }

    .vk:hover{
        color: #D1E0E6;
    }

    a{
        text-decoration: none;
    }   

    .mail{
        color: white;
        font-family: "CorkiRegular";
        font-size: 25px 
    }

    .mail:hover{
        color: #D1E0E6;
    }
</style>