import { createStore } from 'vuex'

// 3-8 介绍定义状态管理
export default createStore({
  // 定义所需要的状态 其它组件都可以使用state中定义的数据
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
      //state.name.slice(0,1)
    }
  },
  // 异步提交mutation，不能直接修改state，只有mutation可以直接修改                                  
  actions: {
    // 第一个参数是store，第二个参数是修改的值 
    asyncSetName(store, params) {
      
      setTimeout(() => {
        // commit 是提交mutation 调用mutation的方法
        // 第一个参数mutation方法名  第二个参数要修改的值
        store.commit('setName', params)
      },2000)
    }
  },
  // 模块化  不多做讲解，以后涉及vuex高级应用的课程再细讲。
  modules: {
  }
})
