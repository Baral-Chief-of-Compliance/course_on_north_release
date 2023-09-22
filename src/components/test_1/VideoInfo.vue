<template>
    <!-- <v-container id="about_murmansk" class="mt-10">
        <div  :class="[ width > 1000 ? 'title-for-page-corki' : 'title_for_page_corki_mobile' ]">НА СЕВЕРЕ ЖИТЬ!</div>

        <div class="video-on-page" :style="{ width: maxWidthVideo + 'px', height: maxHeightVideo + 'px'}">
            <video  controls autoplay muted>
                <source src="../../assets/videos/video-choose-yours-kolsky-3.mp4">
            </video>
        </div>
        
    </v-container> -->

    <div id="murman_region" :style="componentColor">
        <v-container  class="py-10" >
            <TitleComponent :typeStyle="typeStyle" title="мурманская область" />

            <div v-for="value in texts">
                <TextForInfBlock :textContent="value" :textStyle="textComponent" />
            </div>
        

            <div class="video-on-page" :style="{ width: maxWidthVideo + 'px', height: maxHeightVideo + 'px'}">
                <video  controls autoplay muted>
                    <source src="../../assets/videos/video-choose-yours-kolsky-3.mp4">
                </video>
            </div>
        </v-container>
    </div>
</template>

<script>
import TitleComponent from './../test_1/details/TitleComponents.vue';
import TextForInfBlock from './../test_1/details/TextForInfBlock.vue';
import { inject } from 'vue';



    export default{
        props:{
            width: Number,
            typeStyle: String
        },

        data(){
            return{
                similarityFactorWidth: 0.67,
                similarityFactorHeight: 0.42,
                texts: [
                    'Мурманская область – относительно молодой регион, однако сегодня является флагманом развития Арктики.',
                    'Арктическая зона Российской Федерации – крупнейший в мире незамерзающий порт за Северным полярным кругом и транспортный узел у северных берегов нашей страны.',
                    'Здесь ускоренными темпами ведется строительство морского терминала «Тулома», порта «Лавна», железнодорожных и автомобильных мостов, современных скоростных дорог и развязок.',
                    'В городах и поселках нашего региона становится всё более привлекательно и комфортно жить. Открываются новые детские сады, больницы, школы. Учреждения образования оснащены на высоком уровне: от системы охраны до компьютерной и интерактивной техники. В школах реализуются новые современные программы, передовые технологии, приветствуются творческий подход и новаторство в профессии.',
                    'В жизни северян в приоритете спорт и здоровье: востребована и развита сеть горнолыжных, легкоатлетических комплексов, бассейнов и фитнесс-центров, ледовых арен, стадионов, спортивных школ и клубов.',
                    'Стремительно преобразовывается сфера культуры и искусства. Полностью реконструированы и представлены в новом современном виде областной драматический театр, театр кукол, филармония, библиотеки, музеи, дома культуры и концертные площадки области.',
                    'Для проведения досуга и семейного отдыха жителей и гостей региона ждут многочисленные турбазы, кинотеатры, кафе и рестораны, парковые зоны с фонтанами и детскими площадками.',
                    'Активно развивается туристическая отрасль. Одна из изюминок нашего туризма – арктическая кухня с невероятно вкусными морепродуктами. Все туристы стремятся увидеть Териберку на берегу Северного Ледовитого океана.',
                    'За последние годы решена проблема транспортной доступности в любую точку области, радуют обновленные железнодорожный вокзал с фирменными поездами, международный аэропорт федерального значения с возможностью прямых перелетов.',
                    'Что и говорить, столица Арктики – сегодня одна из самых привлекательных для инвесторов территорий.',
                    'А ещё это край с душой, где дыхание природы рядом! Когда красота окружающего мира тебя вдохновляет! И она всегда разная! То зимняя сказка со снежными сопками и северным сиянием в небе. То лето – в облаках цветущей сирени и морошковым ароматом в лесу, когда солнце забывает прятаться за горизонт. Осень в золоте лесов и весна со свежим ветром перемен, похожая на наш Кольский край.',
                    'И именно в этих северных широтах живут самые отзывчивые и доброжелательные люди, готовые всегда помочь и поддержать.',
                    'Именно здесь ты не только начнёшь свой путь в профессии, но и станешь жителем перспективного региона с ярким будущим, найдёшь преданных друзей и обязательно влюбишься в природу нашего края!'
                ]

            }
        },

        computed: {
            maxWidthVideo(){
                return this.width * this.similarityFactorWidth
            },

            maxHeightVideo(){
                return this.width * this.similarityFactorHeight
            }
        },

        components: {
            TitleComponent,
            TextForInfBlock 
        },

        setup(props){
            const mainColor = inject('mainColor')

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

            return { mainColor, componentColor, textComponent }  
        }
    }
</script>

<style scoped>
.video-on-page{
    /* width: 1000px;
    height: 500px; */
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
}
</style>