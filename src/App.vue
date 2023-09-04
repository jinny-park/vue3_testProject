<template>

  <!-- [App.vue 데이터 바인딩 지정] -->
  <div id="dataContainer">
    <h1>{{ data }}</h1>
  </div>


  <!-- [고정 : 헤더 컴포넌트] -->
  <HeaderLayout />


  <!-- [동적 : 라우터 뷰 컴포넌트] -->
  <router-view />


  <!-- [고정 : 푸터 컴포넌트] -->
  <FooterLayout />

</template>





<!-- [애플리케이션 공통 스크립트 지정] -->
<script>


// [Component 지정]
import HeaderLayout from './commonLayout/HeaderLayout.vue'
import FooterLayout from './commonLayout/FooterLayout.vue'
import HomeComponent from './components/HomeComponent.vue'


// [export 설정 실시]
export default {
  // [main.js 등록한 App 컴포넌트]
  name: 'App', 


  // [동적 변환 컴포넌트 페이지 : 기본 표시 부분]
  components: { 

    HeaderLayout, // [HeaderLayout 컴포넌트]
    FooterLayout // [FooterLayout 컴포넌트]

  },


  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {
    return {
      data: "APP VUE", // [데이터 지정]
      HomeComponent // [초기 로드 컴포넌트 지정]
    }    
  },

  // [생명 주기 : 라이프 사이클]
  beforeCreate() {
    console.log("");
    console.log("[App] : [beforeCreate] : [start]");
    console.log("설 명 : 인스턴스 초기화 준비");
    console.log("");
  },
  created() {
    console.log("");
    console.log("[App] : [created] : [start]");
    console.log("설 명 : 인스턴스 생성 완료");
    console.log("");
  },
  beforeMount() {
    console.log("");
    console.log("[App] : [beforeMount] : [start]");
    console.log("설 명 : DOM 렌더링 준비");
    console.log("");
  },
  mounted() {
    console.log("");
    console.log("[App] : [mounted] : [start]");
    console.log("설 명 : DOM 렌더링 완료");
    console.log("");
    // [이벤트 버스 알림 받기 등록]
    this.$emitter.on("eventMethod", this.eventMethod);
    
  },
  beforeUpdate() {
    console.log("");
    console.log("[App] : [beforeUpdate] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 시작");
    console.log("");
  },
  updated() {
    console.log("");
    console.log("[App] : [updated] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 완료");
    console.log("");
  },
  beforeUnmount() {
    console.log("");
    console.log("[App] : [beforeUnmount] : [start]");
    console.log("설 명 : 인스턴스 마운트 해제 준비");
    console.log("");
  },
  unmounted() {
    console.log("");
    console.log("[App] : [unmounted] : [start]");
    console.log("설 명 : 인스턴스 마운트 해제 완료");
    console.log("");
     // [이벤트 버스 알림 받기 해제]
    this.$emitter.off("eventMethod");
  },



  // [메소드 정의 실시]
  methods: {
     // [실시간 이벤트 버스 알림 받기 함수 정의 실시]
    eventMethod: function(name){
      console.log("");
      console.log("[App] : [eventMethod] : [start]");
      console.log("name : " + name);
      console.log("");
      this.data = name;
    }
  }

}

</script>


<!-- [애플리케이션 공통 스타일 지정] -->
<style>
#dataContainer{
  color: green;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
</style>