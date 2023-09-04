<!--
[HeaderLayout.vue 설명]
1. 공통 : 헤더 레이아웃

2. template : 
   - 화면 상에 표시할 요소 작성 실시
   - 컴포넌트의 모든 마크업 구조와 디스플레이 로직 작성

3. script : 
   - import 구문을 사용해 template에서 사용할 컴포넌트 불러온다
   - export default 구문에서 모듈의 함수, 객체, 변수 등을 다른 모듈에서 가져다 사용 할 수 있도록 내보냅니다

4. style : 
   - 스타일 지정 실시
-->





<!-- [개별 템플릿 (뷰) 설정 실시] -->
<template>
<!--
 <div id="nav">
    <router-link class="menu" to="/">Home</router-link>
    <router-link class="menu" to="/main">Main</router-link>
    <router-link class="menu" to="/list">List</router-link>
  </div>
  -->


<ul class="nav nav-pills nav-fill" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <router-link class="menu" to="/">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
  </router-link>
  </li>
  <li class="nav-item" role="presentation">
    <router-link class="menu" to="/main">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-main" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Main</button>
  </router-link>
  </li>
  <li class="nav-item" role="presentation">
    <router-link class="menu" to="/list">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-list" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">List</button>
  </router-link>  
  </li>
  <li class="nav-item" role="presentation">
    <router-link class="menu" to="/vuex">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-list" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Vuex</button>
  </router-link>  
  </li>
  <li class="nav-item" role="presentation">
    <router-link class="menu" to="/localstorage">
    <button class="nav-link" id="pills-contact-tab" data-bs-tsoggle="pill" data-bs-target="#pills-list" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">LocalStorage</button>
    </router-link>  
  </li>
    <li class="nav-item" role="presentation">
    <router-link class="menu" to="/emitter">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-list" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Emitter</button>
    </router-link>  
  </li>
  <li class="nav-item" role="presentation">
    <router-link class="menu" to="/axios">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-list" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Axios</button>
    </router-link>  
  </li>

</ul>
</template>





<!-- [개별 스크립트 설정 실시] -->
<script>
export default {
    // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {
    return {
      data: "리스트 데이터", // [데이터 정의]

      array:[ // [데이터 정의]
        "Home",
        "Main",
        "List"
      ]
    }    
  }
}
</script>





<!-- [개별 스타일 설정 실시] -->
<style scoped>
#nav {
  background: blue;
  padding: 15px;
  border-radius: 5px;
}

#nav .menu{
  color: white;
  padding: 0px;
  margin: 10px;
  text-decoration: none;
}
</style>