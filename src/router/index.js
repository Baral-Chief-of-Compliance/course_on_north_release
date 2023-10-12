// Composables
import { createRouter, createWebHistory } from 'vue-router';
import DefaultTest from '@/layouts/test/DefaultTest.vue';
import Test_1 from '@/views/Test_1.vue';
import AnketaSoiskatelya from '@/components/test_1/AnketaSoiskatelya.vue';
import AnketaEmployer from '@/components/test_1/AnketaEmployer.vue';
import Map from '@/components/test_1/Map.vue';
import ThanksAnketa from '@/components/test_1/ThanksAnketa.vue';
import NotFound from '@/components/test_1/NotFound.vue';
import stub from '@/components/test_1/stumb/stumb.vue';
import News from '@/components/test_1/News.vue'
// import AboutProject from '@/components/test_1/AboutProject.vue';
// import VideoInfo from '@/components/test_1/VideoInfo.vue';
// import HelpComponent from '@/components/test_1/HelpComponent.vue';
// import HealthWorkerInfo from '@/components/test_1/HealthWorkerInfo.vue';
// import TeachersInfo from '@/components/test_1/TeachersInfo.vue'; 


const routes = [

  {
    path: '/test', 
    component: DefaultTest,
    children: [
      {
        path: '/test',
        name: 'TestHome_1',
        component: Test_1
      },
      {
        path: '/anketa-soiskatelya',
        name: 'AnketaSoiskatelya',
        component: AnketaSoiskatelya
      },
      {
        path: '/anketa-employer',
        name: 'AnketaEmployer',
        component: AnketaEmployer
      },
      {
        path: '/map-czn',
        name: 'map-czn',
        component: Map
      },

      {
        path: '/news',
        name: 'News',
        component: News
      },

      {
        path: '/thanks-for-anketa',
        name: 'ThanksAnketa',
        component: ThanksAnketa
      },

      {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: NotFound
      },

      // {
      //   path: "/about-project",
      //   name: "AboutProject",
      //   component: AboutProject,
      //   props: { typeStyle: "reverse"}
      // },

      // {
      //   path: "/about-region",
      //   name: "AboutRegion",
      //   component: VideoInfo,
      //   props: { typeStyle: "reverse"}
      // },

      // {
      //   path: "/help",
      //   name: "Help",
      //   component: HelpComponent
      // },

      // {
      //   path: "/health-workers",
      //   name: "HealthWorkers",
      //   component: HealthWorkerInfo,
      //   props: { typeStyle: "reverse"}
      // },

      // {
      //   path: "/teachers",
      //   name: "Teachers",
      //   component: TeachersInfo
      // }
    ]
  },
  {
    path: "/",
    name: "stumb",
    component: stub
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
