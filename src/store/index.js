import { createStore } from 'vuex'

// 3-8 介绍定义状态管理
export default createStore({
  // 定义所需要的状态
  state: {
    // 每个组件都可使用
    name: "admin" 
  },
  getters: {
  },
  // 用于同步修改state，都是方法，不能做异步操作
  mutations: {
    // 第一个参数state，第二个参数是需要修改的值
    setName(state, payload) {
      state.name = payload
      state.name.slice(0,1)
    }
  },
  actions: {
  },
  modules: {
  }
})
