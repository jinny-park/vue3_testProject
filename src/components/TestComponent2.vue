<!-- [개별 템플릿 (뷰) 설정 실시] -->
<template>

  <!-- [부모에서 전달 받음 : props : 데이터 바인딩 지정] -->
  <div>
    <h1>{{ msg }}</h1>
  </div>


  <!-- [data : 데이터 바인딩 지정] -->
  <div>
    <h1>{{ value }}</h1>
  </div>



  <!-- [v-model : 데이터 양방향 바인딩 설정] -->
  <input type="text" v-model = "value">


  <br>
  <br>

    <!-- [disabled : 버튼 사용 가능 여부 (클릭) 처리 설정 : value 값이 1 보다 작으면 클릭 막음] -->
  <button v-bind:disabled='value.length < 1'>
    <h1>버튼</h1>
  </button>

</template>





<!-- [개별 스크립트 설정 실시] -->
<script>
export default {
  name: 'TestComponent2',

  // [부모에서 전달 받은 데이터 : 자식에서 동적 수정 불가능]
  props: {
    msg: String
  },


  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {
    return {
      value: "Value" // [데이터 정의]
    }    
  },

}


// [html 최초 로드 및 이벤트 상시 대기 실시] 
window.onload = function() {
    console.log("");
    console.log("[MainComponent] : [window onload] : [start]");
    console.log("");
};

</script>