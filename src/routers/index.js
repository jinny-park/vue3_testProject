// [router > index.js 설명]
// 1. router : 라우터는 웹 페이지 간의 이동하는 방법 및 경로를 설정해주는 파일입니다
// 2. router 사용 시 App.js 파일에서는 <router-view /> 를 사용해서 로드합니다
// 3. 사용 예시 : http://localhost:8080/main





// [라우터 import 수행 실시]
import { createWebHistory, createRouter } from 'vue-router';





// [라우터 path 접속 경로 설정]
const routes = [
  {
    path: "/", // [경로]
    name: "home", // [이름]
    component: () => import('@/components/HomeComponent.vue') // [로드 파일]
  },
  {
    path: "/list", // [경로]
    name: "list", // [이름]
    component: () => import('@/components/ListComponent.vue') // [로드 파일]
  },
  {
    path: "/main", // [경로]
    name: "main", // [이름]
    component: () => import('@/components/MainComponent.vue') // [로드 파일]]
  },
  {
    path: "/vuex", // [경로]
    name: "vuex", // [이름]
    component: () => import('@/components/VuexComponent.vue') // [로드 파일]]
  },
  {
    path: "/localStorage", // [경로]
    name: "localStorage", // [이름]
    component: () => import('@/components/LocalStorageComponent.vue') // [로드 파일]]
  },
  {
    path: "/emitter", // [경로]
    name: "emitter", // [이름]
    component: () => import('@/components/EmitterComponent.vue') // [로드 파일]]
  },
  {
    path: "/axios", // [경로]
    name: "axios", // [이름]
    component: () => import('@/components/AxiosComponent.vue') // [로드 파일]]
  },
  {
    path: "/axios/detailpost", // [경로]
    name: "detailpost", // [이름]
    props : true,
    component: () => import('@/components/DetailPostComponent.vue') // [로드 파일]]
  },

  {
    path: "/image", // [경로]
    name: "image", // [이름]
    props : true,
    component: () => import('@/components/ImageFileComponent.vue') // [로드 파일]]
  }
];





// [라우터 설정 실시]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;