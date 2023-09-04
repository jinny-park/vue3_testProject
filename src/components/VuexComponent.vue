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
    <h5>Vuex를 통해서 store 저장소 생성 및 get 호출 , set 지정 실시 </h5>
  </div>
<hr>
<div class="input-group mb-3">
  <input @change="input" id="inputText" class="form-control" placeholder="새로운 값 입력하기" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn btn-primary" type="button" id="button-addon2" @click="setters()">Button</button>
</div>
  <hr>
     <div>
    <h5>default value = {{name}} </h5>
  </div>
  <hr>
  <hr>
     <div>
    <h5>get 호출 = {{getUserInfo}} </h5>
  </div>
  <hr>
</template>





<!-- [개별 스크립트 설정 실시] -->
<script>
export default {
  name: 'VuexComponent',

  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {
    console.log("");
    console.log("[VuexComponent] : [data] : [start]");
    console.log("설 명 : 데이터 초기화 준비");
    console.log("이름 : " + this.$store.state.name);
    console.log("get 정보 : " + this.$store.getters.getUserInfo);
    console.log("");

    return {
      data: "Vuex",
      name: this.$store.state.name,
      getUserInfo: this.$store.getters.getUserInfo

    }
  },


  // [생명 주기 : 라이프 사이클]
  beforeCreate() {
    console.log("");
    console.log("[VuexComponent] : [beforeCreate] : [start]");
    console.log("설 명 : 인스턴스 초기화 준비");
    console.log("");
  },
  created() {
    console.log("");
    console.log("[VuexComponent] : [created] : [start]");
    console.log("설 명 : 인스턴스 생성 완료");
    console.log("");
  },
  beforeMount() {
    console.log("");
    console.log("[VuexComponent] : [beforeMount] : [start]");
    console.log("설 명 : DOM 렌더링 준비");
    console.log("");
  },
  mounted() {
    console.log("");
    console.log("[VuexComponent] : [mounted] : [start]");
    console.log("설 명 : DOM 렌더링 완료");
    console.log("");
  },
  beforeUpdate() {
    console.log("");
    console.log("[VuexComponent] : [beforeUpdate] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 시작");
    console.log("");
  },
  updated() {
    console.log("");
    console.log("[VuexComponent] : [updated] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 완료");
    console.log("");
  },
  beforeUnmount() {
    console.log("");
    console.log("[VuexComponent] : [beforeUnmount] : [start]");
    console.log("설 명 : 인스턴스 마운트 해제 준비");
    console.log("");
  },
  unmounted() {
    console.log("");
    console.log("[VuexComponent] : [unmounted] : [start]");
    console.log("설 명 : 인스턴스 마운트 해제 완료");
    console.log("");
  },


  // [메소드 정의 실시]
  methods: {
    input: function(e){
        this.name = e.target.value
    },
    setters: function(){
    // [사용자 정보 set 지정 실시]
        this.$store.commit("setUserInfo", this.name);
        this.getUserInfo= this.$store.getters.getUserInfo
    }
  }
}
</script>




<!-- [개별 스타일 설정 실시] -->
<style scoped>
</style>