<template>
    <div>
        <h1>This is detail component</h1>
        <!-- 父组件传值给子组件 需要用数据绑定 -->
        <child :msg='msg'></child>
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
        return {
            msg
        }
    }
})
</script>