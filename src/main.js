// [main.js 설명]
// 1. 애플리케이션 진입점으로 Vue 초기화, 폴더 , 전역, 컴포넌트 , 라이브러리 등록 수행 실시
// 2. import App 을 사용해 최상위 App.vue 컴포넌트 지정 실시
// 3. createApp mount 를 사용해 index.html 파일 div id 값 설정 및 렌더링 시작점 지정 실시
// 4. router : 라우터는 웹페이지 간의 이동하는 방법 및 경로를 설정해주는 파일입니다



// [애플리케이션 생성 실시]
import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers/index.js'
import globals from './commonGlobal/global.js' // [global]
import stores from './commonStore/store.js' // [store]
import mitts from 'mitt' // [mitt]
import axios from 'axios' // [axios]
import "bootstrap/dist/css/bootstrap.min.css" // [bootstrap]
import "bootstrap" // [bootstrap]


// [앱 생성 실시]
const app = createApp(App);

// [앱 글로벌 변수 선언 실시]
app.config.globalProperties.$name = "Vue3"; // [name / 이름]
app.config.globalProperties.$age = 25; // [age / 나이]
app.config.globalProperties.$store = stores; // [store / 저장소]
// [mitt / 이벤트 버스]
const emitter = mitts();
app.config.globalProperties.$emitter = emitter;
// [mitt / 이벤트 버스 / index.html 사용 / window.mitt.on 함수 등록]
window.mitt = window.mitt || mitts();


// [axios / http 통신]
app.config.globalProperties.$axios = axios; 

// [라우터 사용 설정]
app.use(routers);


// [글로벌 사용 설정]
app.use(globals);

// [스토어 사용 설정]
app.use(stores);

// [mitt 이벤트 버스 사용 설정]
app.use(mitts);

// [app 아이디 : 렌더링 시작점] 
app.mount('#app');