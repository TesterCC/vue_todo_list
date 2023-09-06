<template>
    <div>
        <h1>This is detail component</h1>
        <!-- 父组件传值给子组件 需要用数据绑定 -->
        <!-- @send是子组件分发过来的，'send'是父组件自定义的 -->
        <child :msg='msg' @send='send'></child>
    </div>
</template>


<script>
import { defineComponent,ref } from 'vue';

// import Child
import child from  '../components/child/Child'

// 4-5 
export default defineComponent({
    name: 'Detail',
    components:{
        child
    },
    setup() {
        let msg = ref("This is parent component data")
        let send = (val) => {
            console.log(val)
        }
        return {
            msg,
            send
        }
    }
})
</script>