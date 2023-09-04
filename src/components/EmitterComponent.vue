<!-- [개별 템플릿 (뷰) 설정 실시] -->
<template>

  <hr>
  <!-- [data : 데이터 바인딩 지정] -->
  <div>
    <h1> {{ data }} </h1>
  </div>

  <hr>

  <!-- [이미지 설정 실시] -->
  <div>
    <img src="../assets/logo.png">
  </div>
<hr>
  <div>
    <h5> emitter 사용해 컴포넌트 간 이벤트 버스 알림 전송 및 받기 수행 - 브로드 캐스팅 알림</h5>
    <h5> App.vue의 data영역이 변경되는 것을 확인가능</h5>
  </div>
  <hr>


</template>





<!-- [개별 스크립트 설정 실시] -->
<script>
export default {
  name: 'EmitterComponent',

  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {
    console.log("");
    console.log("[EmitterComponent] : [data] : [start]");
    console.log("설 명 : 데이터 초기화 준비");
    console.log("");

     // [이벤트 버스 데이터 전달]
    this.$emitter.emit("eventMethod", "emitterEvent");
    return {
      data: "Emitter"
    }
  },


  // [생명 주기 : 라이프 사이클]
  beforeCreate() {
    console.log("");
    console.log("[EmitterComponent] : [beforeCreate] : [start]");
    console.log("설 명 : 인스턴스 초기화 준비");
    console.log("");
  },
  created() {
    console.log("");
    console.log("[EmitterComponent] : [created] : [start]");
    console.log("설 명 : 인스턴스 생성 완료");
    console.log("");
  },
  beforeMount() {
    console.log("");
    console.log("[EmitterComponent] : [beforeMount] : [start]");
    console.log("설 명 : DOM 렌더링 준비");
    console.log("");
  },
  mounted() {
    console.log("");
    console.log("[EmitterComponent] : [mounted] : [start]");
    console.log("설 명 : DOM 렌더링 완료");
    console.log("");

   // [axios http 요청 수행 실시]
    this.$axios.get("http://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log("");
        console.log("[EmitterComponent] : [axios] : [response]");
        console.log("응답 데이터 : " + JSON.stringify(res.data));
        console.log("");        
      })
      .catch(error => {
        console.log("");
        console.log("[EmitterComponent] : [axios] : [error]");
        console.log("에러 데이터 : " + error.data);
        console.log(""); 
      })
      .finally(() => {
        console.log("");
        console.log("[EmitterComponent] : [axios] : [complete]");
        console.log(""); 
      })

  },
  beforeUpdate() {
    console.log("");
    console.log("[EmitterComponent] : [beforeUpdate] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 시작");
    console.log("");
  },
  updated() {
    console.log("");
    console.log("[EmitterComponent] : [updated] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 완료");
    console.log("");
  },
  beforeUnmount() {
    console.log("");
    console.log("[EmitterComponent] : [beforeUnmount] : [start]");
    console.log("설 명 : 인스턴스 마운트 해제 준비");
    console.log("");
  },
  unmounted() {
    console.log("");
    console.log("[EmitterComponent] : [unmounted] : [start]");
    console.log("설 명 : 인스턴스 마운트 해제 완료");
    console.log("");
  },

  // [메소드 정의 실시]
  methods: {

  }
}
</script>




<!-- [개별 스타일 설정 실시] -->
<style scoped>
</style>