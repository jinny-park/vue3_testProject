<!-- [개별 템플릿 (뷰) 설정 실시] -->
<template>

  <hr>

  <!-- [부모에서 전달 받음 : props : 데이터 바인딩 지정] -->
  <div>
    <h1>{{ msg }}</h1>
  </div>

  <hr>

  <!-- [data : 데이터 바인딩 지정 : 데이터 길이가 2 보다 크면 css 스타일 클래스 colorBlue 지정] -->
  <div>
    <h1 v-bind:class="[data.length > 2 ? 'colorBlue': 'colorRed']">{{ data }}</h1>
  </div>

  <hr>

  <!-- [data : 데이터 바인딩 지정 : 데이터 길이가 2 보다 크면 css 스타일 클래스 colorBlue 지정] -->
  <div>
    <h1 v-bind:class="[value.length > 2 ? 'colorBlue': 'colorRed']">{{ value }}</h1>
  </div>

  <hr>

  <!-- [버튼 클릭 이벤트 메소드 지정] -->
  <button @click="testMain">이벤트 함수 호출</button>

  <hr>

</template>





<!-- [개별 스크립트 설정 실시] -->
<script>
export default {
  name: 'IfComponent',





  // [부모에서 전달 받은 데이터 : 자식에서 동적 수정 불가능]
  props: {
    msg: String
  },





  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {
    return {
      data: "DATA", // [데이터 정의]
      value: "V", // [데이터 정의]
    }    
  },





  // [메소드 정의 실시]
  methods: {

    // [testMain 함수 정의 실시]
    testMain: function(){
      console.log("");
      console.log("[IfComponent] : [testMain] : [start]");
      console.log("");
    }
  }
}





// [html 최초 로드 및 이벤트 상시 대기 실시] 
window.onload = function() {
    console.log("");
    console.log("[IfComponent] : [window onload] : [start]");
    console.log("");
};

</script>





<!-- [개별 스타일 설정 실시] -->
<style scoped>
.colorRed {
  color:red;
}
.colorBlue {
  color:blue;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>