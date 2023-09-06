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
import { defineComponent, onMounted, ref, withCtx } from 'vue';

// 父子组件之间如何传递参数：
// 父组件 -> 子组件：父组件通过动态绑定属性的方式，子组件在props中接收
// 子组件 -> 父组件：子组件通过ctx.emit分发事件的方式，在父组件template的子组件标签中绑定自定义事件，自定义事件中还有从子组件传递过来的参数
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
    setup(props, ctx) {
        let childMsg = ref('Here is child component data')
        let childNum = ref(10)
        console.log(props.msg)
        let send = () => {
            // 通过ctx.emit分发事件  4-5 08:30
            // emit 第一个参数是事件名称 第二个是传递的数据(只能传一个数据，传递多个数据需要使用数组或者对象)
            // ctx.emit('send', childMsg.value) // 把childMsg传递给父组件
            // ctx.emit('send', [childMsg.value, childNum.value]) // method1：使用数组Array传递多个数据
            ctx.emit('send', {msg:childMsg.value, num:childNum.value}) // method1：使用对象{}传递多个数据

        }

        // 分发不一定要点击事件，页面加载也可以分发
        onMounted(() => {
            ctx.emit('send', childMsg.value)
        })
        return {
            childMsg,
            send
        }
    }
})
</script>