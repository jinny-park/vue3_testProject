// [store > store.js 설명]
// 1. store : 모든 컴포넌트가 공유할 수 있는 싱글톤 방식의 데이터 저장소입니다
// 2. main.js 파일에서 시작점 진입 시 등록 필요





// [vuex import 수행 실시]
import { createStore } from 'vuex';





// [store 데이터 설정 실시]
const store = createStore ({
  state: { // [변수들의 집합]
    name: "Vue.js3"
  },
  getters: { // [state의 변수들을 get 호출]
    getUserInfo(state){
        return "이름 : " + state.name;
    }
  },
  mutations: { // [변수들을 조작하는 함수들]
    setUserInfo(state, name){
        state.name = name;
    }
  },
  actions: { // [비동기 처리를 하는 함수들]
  },
});

export default store;