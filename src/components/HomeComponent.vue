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

     <!-- [input : 실시간 입력한 값을 data 데이터 바인딩 변수와 공유] -->
  <div class="mb-3">
    <label for="formGroupExampleInput" class="form-label">데이터 바인딩</label>
    <input type="text" :value="data" @input="data = $event.target.value" class="form-control">
  </div>
  <hr>

  <div >
    <!-- [버튼 클릭 이벤트 메소드 지정] -->
    <button  class="btn btn-primary" aria-expanded="false" @click="testHome(), testSub('sub')"> Event Button </button>
  </div>
  <hr>

  <select  v-model="selected" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option disabled value="">메뉴를 선택해 주세요</option>
  <option value="one">One</option>
  <option value="two">Two</option>
  <option value="three">Three</option>
</select>
<hr>
  <span> v-model 사용 수행 실시 선택된 option: {{ selected }}</span>
<hr>
  
</template>





<!-- [개별 스크립트 설정 실시] -->
<script>
export default {
  name: 'HomeComponent',

  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {

    console.log("");
    console.log("[HomeComponent] : [data] : [start]");
    console.log("설 명 : 데이터 초기화 준비");
    console.log("");

    return {
      data: "HOME", // [데이터 정의]
      selected: "선택사항 없음" // [데이터 지정]
    }    
  },


  // [생명 주기 : 라이프 사이클]
  beforeCreate() {
    console.log("");
    console.log("[HomeComponent] : [beforeCreate] : [start]");
    console.log("설 명 : 인스턴스 초기화 준비");
    console.log("");
  },
  created() {
    console.log("");
    console.log("[HomeComponent] : [created] : [start]");
    console.log("설 명 : 인스턴스 생성 완료");
    console.log("");
  },
  beforeMount() {
    console.log("");
    console.log("[HomeComponent] : [beforeMount] : [start]");
    console.log("설 명 : DOM 렌더링 준비");
    console.log("");
  },
  mounted() {
    console.log("");
    console.log("[HomeComponent] : [mounted] : [start]");
    console.log("설 명 : DOM 렌더링 완료");
    console.log("");
  },
  beforeUpdate() {
    console.log("");
    console.log("[HomeComponent] : [beforeUpdate] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 시작");
    console.log("");
  },
  updated() {
    console.log("");
    console.log("[HomeComponent] : [updated] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 완료");
    console.log("");
  },
  beforeUnmount() {
    console.log("");
    console.log("[HomeComponent] : [beforeUnmount] : [start]");
    console.log("설 명 : 인스턴스 마운트 해제 준비");
    console.log("");
  },
  unmounted() {
    console.log("");
    console.log("[HomeComponent] : [unmounted] : [start]");
    console.log("설 명 : 인스턴스 마운트 해제 완료");
    console.log("");
  },

// [지정한 data 및 component 값 속성이 변경 될 때 실행]
  watch: {
    data () {
        console.log("[watch] : data : " + this.data)
    }
  },

  // [메소드 정의 실시]
  methods: {

    testHome: function(){
      alert(
        "HomeComponent"
      );
    },
    testSub: function(value){
      console.log(value)
    },
    keyDownHandler: function(event){
       console.log("[input] : event : " + event.key);
    }
  }
}
</script>




<!-- [개별 스타일 설정 실시] -->
<style scoped>
/* [부트스트랩 스타일 설정] */
.dropdown {
  width: 50%;
  margin: 0 auto;
}
</style>