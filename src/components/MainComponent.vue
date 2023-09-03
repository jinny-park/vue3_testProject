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

</template>





<!-- [개별 스크립트 설정 실시] -->
<script>

export default {
  name: 'MainComponent',





  // [부모에서 전달 받은 데이터 : 자식에서 동적 수정 불가능]
  // [형태 : <MainComponent msg="MainComponent"/>]
  props: {
    msg: String
  },





  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {
    console.log("");
    console.log("[MainComponent] : [data] : [start]");
    console.log("설 명 : 데이터 초기화 준비");
    console.log("");

    return {
      data: "MAIN" // [데이터 정의]
    }    
  },





  // [생명 주기 : 라이프 사이클]
  beforeCreate() {
    console.log("");
    console.log("[MainComponent] : [beforeCreate] : [start]");
    console.log("설 명 : 인스턴스 초기화 준비");
    console.log("");
  },
  created() {
    console.log("");
    console.log("[MainComponent] : [created] : [start]");
    console.log("설 명 : 인스턴스 생성 완료");
    console.log("");
  },
  beforeMount() {
    console.log("");
    console.log("[MainComponent] : [beforeMount] : [start]");
    console.log("설 명 : DOM 렌더링 준비");
    console.log("");
  },
  mounted() {
    console.log("");
    console.log("[MainComponent] : [mounted] : [start]");
    console.log("설 명 : DOM 렌더링 완료");
    console.log("");
  },
  beforeUpdate() {
    console.log("");
    console.log("[MainComponent] : [beforeUpdate] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 시작");
    console.log("");
  },
  updated() {
    console.log("");
    console.log("[MainComponent] : [updated] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 완료");
    console.log("");
  },
  beforeUnmount() {
    console.log("");
    console.log("[MainComponent] : [beforeUnmount] : [start]");
    console.log("설 명 : 인스턴스 마운트 해제 준비");
    console.log("");
  },
  unmounted() {
    console.log("");
    console.log("[MainComponent] : [unmounted] : [start]");
    console.log("설 명 : 인스턴스 마운트 해제 완료");
    console.log("");
  },





  // [메소드 정의 실시]
  methods: {

    // [testMain 함수 정의 실시]
    testMain: function(){
      console.log("");
      console.log("[MainComponent] : [testMain] : [start]");
      console.log("");
    }
  }
}

</script>





<!-- [개별 스타일 설정 실시] -->
<style scoped>
.colorRed {
  color:red;
}
.colorBlue {
  color:blue;
}
</style>