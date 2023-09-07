<template>
  <div>
    <!-- 4-6 实现todolist各组件间得参数传递 -->
    <!-- 子传父：在父组件中接收 -->
    <nav-header @add='add'></nav-header>
    <!-- 父传子：父组件动态绑定属性的方式传给 NavMain -->
    <!-- 父组件接收子组件分发的del -->
    <nav-main :list='list' @del='del'></nav-main>
    <nav-footer :list='list' @clear='clear'></nav-footer>
  </div>
</template>

<script>
// 4-7 完善todolist 扩展：用html5的localStorage和sessionStorage存储修改后的数据
// 所有操作都会在父组件中实现；子组件只管传递数据，不管操作

// 将子组件引入到父组件中
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'

// 编写js内容
import { defineComponent, ref, computed } from 'vue'
// toRefs能将响应式对象转化为普通对象，然后分包出来

import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home', // 组件名称
  // 接收父组件的数据
  props: {

  },
  // 定义子组件
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  emits: ['del'],
  setup() {
    let store = useStore()

    // 计算属性的值，要用 xxx.value获取
    let list = computed(() => {
      return store.state.list
    })

    let value = ref('')

    // add task
    let add = (val) => {
      value.value = val

      // 先判断有无存在的任务，如果任务存在，不能重复添加

      // 表示默认没有重复
      let flag = true
      console.log(list)
      list.value.map(item => {
        if (item.title == value.value) {
          // 有重复任务
          flag = false
          alert('task already exist')
        }
      })

      // no repeat
      if (flag) {
        // call mutation
        store.commit('addTodo', {
          title: value.value,
          complete: false,
        })
      }

      console.log(val)

    }

    // delete task
    let del = (val) => {

      // call delete mutation: delTodo
      store.commit('delTodo', val)
      console.log(val)
    }

    // clear already finished task
    let clear = (val) => {
      store.commit('clear', val)
    }

    return {
      add,
      value,
      list,
      del,
      clear
    }

  }
})

</script>


<style scoped lang='scss'></style>