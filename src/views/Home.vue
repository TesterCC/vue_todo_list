<template>
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>

    <div>
      {{ list }}
    </div>
  <!-- <div>
    {{ num1 }} --- {{ num2 }}
    two number total: {{ addNum }}
  </div>

  <div>
    <button @click="add"> add</button>
  </div> -->

  </div>
</template>

<script>
// 将子组件引入到父组件中
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'

// 编写js内容
import { defineComponent, computed, ref } from 'vue'
// toRefs能将响应式对象转化为普通对象，然后分包出来

// import useStore to operate state, return a store obj
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
    // console.log(store)
    let list = computed(()=> {
      return store.state.list
    })

    // 3-11 通过计算属性获取vuex中定义的todo list的数据


    // // 将定义好的数据 return 出去, 否则页面上不会展示
    // let num1 = ref(10)
    // let num2 = ref(20)

    // // also a variable
    // let addNum = computed(() => {
    //   // must return a value
    //   // logic code
    //   return num1.value + num2.value
    // })

    // let add = () => {
    //   num1.value ++
    //   num2.value ++
    // }

    return {
      // num1,
      // num2,
      // addNum,
      // add
      list
    }
  }
})

</script>


<style scoped lang='scss'>

</style>