<!-- [개별 템플릿 (뷰) 설정 실시] -->
<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>

    <div>
    <h1>{{ value }}</h1>
    </div>

    <div>
    <h1>{{ data }}</h1>
    </div>

    <!-- [data : 데이터 바인딩 지정] -->
  <div>
    <h1>{{ user.name }}</h1>
  </div>


  <!-- [data : 데이터 바인딩 지정] -->
  <div>
    <h1>{{ user.age }}</h1>
  </div>


  <!-- [data : 데이터 바인딩 지정] -->
  <div>
    <h1>{{ color[0] }}</h1>
  </div>

   <!-- [data : 데이터 바인딩 지정] -->
  <div>
    <h1 v-html="aTagHtml"></h1>
  </div>

    <button @click="testMain">이벤트 함수 호출</button>
</template>





<!-- [개별 스크립트 설정 실시] -->
<script>
export default {
  name: 'TestComponent',
  props: {
    msg: String
  },
  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {
    return {
      value: "Value",
      data: "Data",
      user: { // [데이터 정의]
        name: "투케이",
        age: 29
      },

      color: [ // [데이터 정의]
        "red", 
        "blue"
      ],
        aTagHtml: "<a href='https://www.naver.com'>네이버 링크</>" // [데이터 정의]   
    }    
  },

  // [메소드 정의 실시]
  methods: {

    // [testMain 함수 정의 실시]
    testMain: function(){
      console.log("");
      console.log("[TestComponent] : [testMain] : [start]");
      console.log("");


      // [데이터 바인 딩 값 변경 실시]
      this.value = "Value Click";
      this.data = "Data Click";  
      
      
      // [부모 App.vue 로 메소드 호출 실시 실시]
      this.$parent.logTest();
    }
  }
}


/* [html 최초 로드 및 이벤트 상시 대기 실시] */
window.onload = function() {
    console.log("");
    console.log("[TestComponent] : [window onload] : [start]");
    console.log("");
        // [팝업창 호출 실시]
    alert("TestComponent onload");
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