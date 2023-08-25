<template>
    <!-- start page -->
    <div>
    <h1>Start Page</h1>
      <button @click="start"> start to task </button>
    </div>
  </template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
  // 4-3
export default defineComponent({
  name: 'About',
  setup(){
    let router = useRouter()
    // console.log(router)


    let start = () => {
      router.push({
        path: '/home'    // task setting page path
      })
    }
    return {
      start
    }
  }

})
</script>