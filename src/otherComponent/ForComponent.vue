<!-- [개별 템플릿 (뷰) 설정 실시] -->
<template>

  <hr>

  <!-- [부모에서 전달 받음 : props : 데이터 바인딩 지정] -->
  <div>
    <h1>{{ msg }}</h1>
  </div>

  <hr>

  <!-- [data : 데이터 바인딩 지정] -->
  <div>
    <h1>{{ data }}</h1>
  </div>

  <hr>

  <!-- [data : 데이터 바인딩 지정 : v-for 사용해 배열 데이터 순차적 출력] -->
  <div v-for="(item, index) in array" :key="index">
    <h1>{{ index }} : {{ item }}</h1>
  </div>

  <hr>

  <!-- [data : 데이터 바인딩 지정 : v-for 사용해 배열 데이터 순차적 출력] -->
  <div v-for="(item, index) in json" :key="index">
    <h1>{{ index }} : {{ item.name }} : {{item.age}}</h1>
  </div>

  <hr>

  <!-- [버튼 클릭 이벤트 메소드 지정] -->
  <button @click="testMain">이벤트 함수 호출</button>

  <hr>

</template>





<!-- [개별 스크립트 설정 실시] -->
<script>
export default {
  name: 'MainComponent',





  // [부모에서 전달 받은 데이터 : 자식에서 동적 수정 불가능]
  props: {
    msg: String
  },





  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {
    return {
      data: "자식 컴포넌트 생성 시 초기 데이터 설정", // [데이터 정의]

      array:[ // [데이터 정의]
        "투케이",
        "TWOK",
        "2K"
      ], 

      json:[ // [데이터 정의]
        {name:"홍길동", age:15},
        {name:"임꺾정", age:18}
      ],
    }    
  },





  // [메소드 정의 실시]
  methods: {

    // [testMain 함수 정의 실시]
    testMain: function(){
      console.log("");
      console.log("[Forcomponent] : [testMain] : [start]");
      console.log("");
    }
  }
}





// [html 최초 로드 및 이벤트 상시 대기 실시] 
window.onload = function() {
    console.log("");
    console.log("[MainComponent] : [window onload] : [start]");
    console.log("");
};

</script>





<!-- [개별 스타일 설정 실시] -->
<style scoped>
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