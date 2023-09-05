<template>
    <!-- start page -->
    <div>
    <h1>Start Page</h1>
      <button @click="start"> start to task </button>
    </div>
  </template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
  // 4-4
export default defineComponent({
  name: 'About',
  setup(){
    // 组件创建的过程
    let router = useRouter()
    // console.log(router)
    let name = ref('Tester')
    let num = ref(10)
    let obj = ref({
        msg: 'start'
    })

    onMounted(()=> {
      // 组件挂载的过程
      // 数据dom...
      console.log("onMounted");
      // 作用：
      // 1.发请求（请求后端接口）
      // 2.数据初始化操作 （接受路由传递的参数）
    })

    onUnmounted(()=> {
      // 组件卸载时的生命周期
      // 场景：跳转陆游
      console.log("onUnmounted");
      // 作用：
      // 1.清除定时器 2.清除闭包函数
    })

    console.log("setup"); // first print because in setup()

    let start = () => {
      // push 如果是传的对象的形式 就是可以传递参数
      // push里面还可以传入name，这里的name是路由的名字(就是router/index.js中配置的路由的name)
      // query传参用path和name都可以
      // params传参只能用name
      router.push({
        // path: '/home',    // task setting page path
        name: "Home",
        // method-1: query传参
        query: {
            name: name.value,
            num: num.value,
            // 把对象转成字符串
            obj: JSON.stringify(obj.value)
        }
        // // method-2: params传参，失败，对于Vue Router而言，params参数用于传递路由路径中的动态参数，而不是用于传递任意的自定义参数。
        // // 当您尝试在params参数中传递非路由定义的参数时，Vue Router会认为这些参数是无效的，并发出警告。
        // // params 传递的参数需要先在路由中定义
        // name: "Home",
        // params: {
        //     id: num.value
        // }

      })
    }
    return {
      start
    }
  }

})
</script>