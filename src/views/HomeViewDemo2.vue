<template>
  <div>
    <!-- <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer> -->

    <!-- <div>
    {{ num1 }} --- {{ num2 }}
    two number total: {{ addNum }}
  </div>

  <div>
    <button @click="add"> add</button>
  </div> -->


    <div>
      <button @click="goto">路由跳转</button>
    </div>

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


import { useStore } from 'vuex'
// 路由跳转
// use开头的一般是hooks函数
import { useRouter } from 'vue-router'
import router from '@/router'

export default defineComponent({
  name: 'HomeView2', // 组件名称
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
    // router是全局路由对象
    // let router = useRouter()
    // console.log(router)   
    let goto = () => {
      // 跳转路由：通过router的push函数
      // push函数里面可以传入跳转的路径
      // router.push('/detail')    // route/index.js 中对应组件的path
      // back: 回退到上一页
      // forward: 去到下一页
      // go(int): 正数代表前进，负数代表后退
      router.push({
        path: '/detail'
      })
    }

    // 将定义好的数据 return 出去, 否则页面上不会展示
    let num1 = ref(10)
    let num2 = ref(20)

    // also a variable
    let addNum = computed(() => {
      // must return a value
      // logic code
      return num1.value + num2.value
    })

    let add = () => {
      num1.value++
      num2.value++
    }

    return {
      num1,
      num2,
      addNum,
      add,
      goto
    }
  }
})

</script>


<style scoped lang='scss'></style>