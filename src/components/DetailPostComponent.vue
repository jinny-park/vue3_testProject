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
    <h3>Params</h3>
<hr>
    <h3>params로 받은 데이터</h3>
    <p>body: {{ $route.params.body }}</p>
   <hr>
    <h3>props로 받은 데이터</h3>
    <p>body: {{ body }}</p> 
  </div>
  <hr>


</template>





<!-- [개별 스크립트 설정 실시] -->
<script>
export default {
  name: 'DetailPost',
  props: {
            body: {
                type: String,
                default : ''
            }
        },

  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {
    console.log("");
    console.log("[EmitterComponent] : [data] : [start]");
    console.log("설 명 : 데이터 초기화 준비");
    console.log("");
    return {
      data: "DetailPost"
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