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
    <h5>로컬 스토리지 (localstorage) 글로벌 공통 함수 생성 (저장, 호출, 삭제)</h5>
  </div>
  <hr>
<div>
    <h5>로컬스토리지 저장 값: {{name}}</h5>
  </div>
  <hr>
  <div >
    <!-- [버튼 클릭 이벤트 메소드 지정] -->
    <button  class="btn btn-primary" aria-expanded="false" @click="deleteStorage()"> 삭제버튼 </button>
  </div>
  <hr>

</template>





<!-- [개별 스크립트 설정 실시] -->
<script>
export default {
  name: 'LocalStorageComponent',

  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {
    console.log("");
    console.log("[LocalStorageComponent] : [data] : [start]");
    console.log("설 명 : 데이터 초기화 준비");
    console.log("");

    // [로컬 스토리지 데이터 저장 실시]
    this.$setLocalStorage("NAME", "VUE3");

    return {
      data: "LocalStorage",
      name: this.$getLocalStorage("NAME")
    }
  },


  // [생명 주기 : 라이프 사이클]
  beforeCreate() {
    console.log("");
    console.log("[LocalstorageComponent] : [beforeCreate] : [start]");
    console.log("설 명 : 인스턴스 초기화 준비");
    console.log("");
  },
  created() {
    console.log("");
    console.log("[LocalstorageComponent] : [created] : [start]");
    console.log("설 명 : 인스턴스 생성 완료");
    console.log("");
  },
  beforeMount() {
    console.log("");
    console.log("[LocalstorageComponent] : [beforeMount] : [start]");
    console.log("설 명 : DOM 렌더링 준비");
    console.log("");
  },
  mounted() {
    console.log("");
    console.log("[LocalstorageComponent] : [mounted] : [start]");
    console.log("설 명 : DOM 렌더링 완료");
    console.log("");
  },
  beforeUpdate() {
    console.log("");
    console.log("[LocalstorageComponent] : [beforeUpdate] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 시작");
    console.log("");
  },
  updated() {
    console.log("");
    console.log("[LocalstorageComponent] : [updated] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 완료");
    console.log("");
  },
  beforeUnmount() {
    console.log("");
    console.log("[LocalstorageComponent] : [beforeUnmount] : [start]");
    console.log("설 명 : 인스턴스 마운트 해제 준비");
    console.log("");
  },
  unmounted() {
    console.log("");
    console.log("[LocalstorageComponent] : [unmounted] : [start]");
    console.log("설 명 : 인스턴스 마운트 해제 완료");
    console.log("");
  },

  // [메소드 정의 실시]
  methods: {
    deleteStorage: function(){
     // [로컬 스토리지 데이터 삭제 실시]
    this.$delItemLocalStorage("NAME");
    this.name = "default";

    }
  }
}
</script>


<!-- [개별 스타일 설정 실시] -->
<style scoped>
</style>