<template>
  <!-- <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div> -->
  <!-- 定义点击事件 -->
  <div @click="clickNum(100)">
    {{ num }}
  </div>
  <div @click="clickNum1">
    {{ num1 }}
  </div>
  <!-- <div>
    {{ name }}
  </div>
  <div>
    {{ arr }}
  </div>
  <div>
    {{ arr[0] }}
  </div>
  <div>
    {{ arr.slice(0, 2) }}
  </div>
  <div>
    {{ obj }}
  </div>
  <div>
    {{ obj.age }}
  </div>
  <hr>
  <div>
    {{ data }}
  </div>
  <div>
    {{ data.ip }}
  </div>
  <div>
    {{ data.obj }}
  </div>
  <div>
    {{ data.obj.update_time }}
  </div>
  <hr>
  <div>
    {{ ip }}
  </div>
  <div>
    {{ port }}
  </div>
  <div>
    {{ obj }}
  </div>
  <div>
    {{ obj.create_time }}
  </div> -->

</template>

<script>
// 将子组件引入到父组件中
// import NavHeader from '@/components/navHeader/NavHeader'
// import NavMain from '@/components/navMain/NavMain'
// import NavFooter from '@/components/navFooter/NavFooter'

// 编写js内容
import { defineComponent, ref, reactive, toRefs } from 'vue'
// toRefs能将响应式对象转化为普通对象，然后分包出来

export default defineComponent({
  name: 'HomeDemo', // 组件名称
  // 接收父组件的数据
  props: {

  },
  // 定义子组件
  components: {
    // NavHeader,
    // NavMain,
    // NavFooter
  },
  setup(props, ctx) {
    // let num = reactive(10)
    let num1 = ref(20)

    let name = ref('Tester')
    let arr = ref(["python", "go", "java", "php", "js"])   // 定义数组
    // 定义对象
    let obj = ref({
      age: 20
    })

    // ES6语法箭头函数
    let clickNum = (val) => {
      // 访问reactive定义的数据，形式为， 返回数据名.key
      console.log("click num, value is: ", val)
      console.log(data.num)
    }

    let clickNum1 = () => {
      // 访问ref定义的数据，形式为 数据名.value
      console.log("click num 1...")
      console.log(num1.value)
      // console.log(num1)   // print obj
    }

    // 一次性定义多个数据用reactive
    let data = reactive({
      ip: "127.0.0.1",
      port: 5000,
      obj: {
        create_time: 1672960084,
        update_time: 1672970788,
      },
      num: 10
    })

    // 将定义好的数据 return 出去, 否则页面上不会展示
    return {
      num1,
      // name,
      // arr,
      // // obj,
      // data,
      ...toRefs(data),   // ES6 , 注意解构的数据名不能与前面的冲突，不然最后定义的数据名会覆盖前面定义的。比如obj
      clickNum,
      clickNum1
    }
  }
})

</script>


<style scoped lang='scss'>

</style>