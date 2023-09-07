<template>
  <div>
    <!-- 子传父：在父组件中接收 -->
    <nav-header @add='add'></nav-header>
    <!-- 父传子：父组件动态绑定属性的方式传给 NavMain -->
    <nav-main :list='list'></nav-main>
    <nav-footer :list='list'></nav-footer>
  </div>
</template>

<script>
// 4-6 实现todolist各组件间得参数传递
// 将子组件引入到父组件中
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'

// 编写js内容
import { defineComponent, ref, computed } from 'vue'
// toRefs能将响应式对象转化为普通对象，然后分包出来

import {useStore} from 'vuex'

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
  // setup(props, ctx) {
  setup() {
    let store = useStore()
    let list = computed(()=> {
      return store.state.list
    })

    let value = ref('')
    let add = (val) => {
      value.value  = val
      console.log(val)

    }
    return {
      add,
      value,
      list
    }

  }
})

</script>


<style scoped lang='scss'></style>