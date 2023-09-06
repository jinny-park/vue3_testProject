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
  <table class="table">
  <thead>
    <tr>
      <th scope="col">UserId</th>
      <th scope="col">PostId</th>
      <th scope="col">Title</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in json" :key="index">
          <td>{{item.userId }}</td>
          <td>{{ item.id}}</td>
          <td>{{item.title}}</td>
        </tr>
  </tbody>
</table>
</template>



<!-- [개별 스크립트 설정 실시] -->
<script>
export default {
  name: 'AxiosComponent',

  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {
    console.log("");
    console.log("[AxiosComponent] : [data] : [start]");
    console.log("설 명 : 데이터 초기화 준비");
    console.log("");

    return {
      data: "Axios",
      json: this.json
    }
  },

  // [생명 주기 : 라이프 사이클]
  beforeCreate() {
    console.log("");
    console.log("[AxiosComponent] : [beforeCreate] : [start]");
    console.log("설 명 : 인스턴스 초기화 준비");
    console.log("");
  },
  created() {
    console.log("");
    console.log("[AxiosComponent] : [created] : [start]");
    console.log("설 명 : 인스턴스 생성 완료");
    console.log("");
  },
  beforeMount() {
    console.log("");
    console.log("[AxiosComponent] : [beforeMount] : [start]");
    console.log("설 명 : DOM 렌더링 준비");
    console.log("");
  },
  mounted() {
    console.log("");
    console.log("[AxiosComponent] : [mounted] : [start]");
    console.log("설 명 : DOM 렌더링 완료");
    console.log("");

   // [axios http 요청 수행 실시]
    this.$axios.get("http://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log("");
        console.log("[AxiosComponent] : [axios] : [response]");
        console.log("응답 데이터 : " + JSON.stringify(res.data));
        console.log(""); 
        this.json = res.data
      })
      .catch(error => {
        console.log("");
        console.log("[AxiosComponent] : [axios] : [error]");
        console.log("에러 데이터 : " + error.data);
        console.log(""); 
      })
      .finally(() => {
        console.log("");
        console.log("[AxiosComponent] : [axios] : [complete]");
        console.log(""); 
      })

  },
  beforeUpdate() {
    console.log("");
    console.log("[AxiosComponent] : [beforeUpdate] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 시작");
    console.log("");
  },
  updated() {
    console.log("");
    console.log("[AxiosComponent] : [updated] : [start]");
    console.log("설 명 : DOM 상태 및 데이터 변경 완료");
    console.log("");
  },
  beforeUnmount() {
    console.log("");
    console.log("[AxiosComponent] : [beforeUnmount] : [start]");
    console.log("설 명 : 인스턴스 마운트 해제 준비");
    console.log("");
  },
  unmounted() {
    console.log("");
    console.log("[AxiosComponent] : [unmounted] : [start]");
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