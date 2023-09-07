<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="back"> back to homepage</button>

    <button @click="goto"> jump to other router</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
// 4-2
export default defineComponent({
  name: 'About',
  setup(){
    let router = useRouter()
    console.log(router)

    let back = () => {
      // 跳转路由：通过router的push函数
      // push函数里面可以传入跳转的路径
      // router.push('/detail')    // route/index.js 中对应组件的path
      // back: 回退到上一页
      // forward: 去到下一页
      // go(int): 正数代表前进，负数代表后退
    
      router.back()
      // router.go(-1)
    }


    let goto = () => {
      router.push({
        path: '/detail'
      })
    }
    return {
      back,
      goto
    }
  }

})
</script>