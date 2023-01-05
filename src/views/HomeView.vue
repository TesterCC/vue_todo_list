<template>
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div>

</template>

<script>
// 将子组件引入到父组件中
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'

// 编写js内容
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home', // 组件名称
  // // 接收父组件的数据
  props:{

  },
  // 定义子组件
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup(props,ctx){

  }
})

</script>


<style scoped lang='scss'>

</style>