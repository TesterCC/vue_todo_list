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
// toRefs能将响应式对象转化为普通对象，然后分包出来

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
  setup(props, ctx) {

    // 将定义好的数据 return 出去, 否则页面上不会展示
    return {

    }
  }
})

</script>


<style scoped lang='scss'>

</style>