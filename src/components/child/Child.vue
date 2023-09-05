<template>
    <div>
        <h1>This is child component</h1>
        <!-- props接收的数据可以直接在模版中用 -->
        父组件传递过来的数据：{{ msg }}

        <p></p>
        <hr>
        <p></p>
        <button @click="send">传值给父组件</button>
    </div>
</template>


<script>
import { defineComponent,ref } from 'vue';

// 4-5 
export default defineComponent({
    name: 'Child',
    // 接收父组件传递过来的参数，注意props接收的数据也不能直接改
    props: {
        msg: {
            // 数据类型校验
            type: String,
            // 是否必传 默认时false
            // required: true
            // 设置默认值   父组件没有把msg传过来时使用
            // default: 'default value'
        }
    },
    setup(props) {
        let childMsg = ref('Here is child component data')
        console.log(props.msg)
        let send = () => {
            // 通过ctx.emit分发事件  4-5 08:30

        }
        return {
            childMsg,
            send
        }
    }
})
</script>