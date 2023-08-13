import { createStore } from 'vuex'

// 3-8 介绍定义状态管理
export default createStore({
  // 定义所需要的状态 其它组件都可以使用state中定义的数据
  state: {
    // 每个组件都可使用
    list : [
      {
          title: 'python',
          complete: false
      },
      {
          title: 'go',
          complete: false
      },
      {
          title: 'rust',
          complete: true
      }
  ]
  },
  getters: {
  },
  // 用于同步修改state，都是方法，不能做异步操作
  mutations: {
    // 第一个参数state，第二 个参数是需要修改的值
    // operation task list
    addTodo(state, payload) {
      state.list.push(payload)
    },
    // delete splice(subscript, count)
    delTodo(state, payload) {
      console.log(payload)
      state.list.splice(payload, 1)
    },
    // clear finish
    clear(state, payload) {
      // 把过滤之后的数组传进来
      state.list = payload
    }
  },
  // 异步提交mutation，不能直接修改state，只有mutation可以直接修改                                  
  actions: {
    // 第一个参数是store，第二个参数是修改的值 
  },
  // 模块化  不多做讲解，以后涉及vuex高级应用的课程再细讲。
  modules: {
  }
})
