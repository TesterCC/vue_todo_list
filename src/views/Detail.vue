<template>
    <div>
        <h1>This is detail component</h1>
        <!-- 父组件传值给子组件 需要用数据绑定 -->
        <!-- @send是子组件分发过来的，'send'是父组件自定义的 -->
        <child :msg='msg' @send='send'></child>
    </div>

    <div>
        test onMounted:
        {{ num }} --- {{ name }} --- {{ obj }}
    </div>
</template>


<script>
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'

// import Child
import child from '../components/child/Child'

// 4-5 
export default defineComponent({
    name: 'Detail',
    components: {
        child
    },
    setup() {
        // router是全局路由对象
        // let router = useRouter()
        // route是当前路由对象
        let route = useRoute()

        console.log(route.query)

        let msg = ref("This is parent component data")

        let num = ref(null)
        let name = ref('')
        let obj = ref({})

        onMounted(() => {

            num.value = route.query.num * 1 // query.num is str, *1 tran to int
            name.value = route.query.name
            obj.value = JSON.parse(route.query.obj)

        })

        let send = (val) => {
            console.log(val)
        }
        return {
            msg,
            send,
            num,
            name,
            obj
        }

    }
})
</script>

<style>
h1 {
    display: block;
    margin-bottom: 1em;
}

button,
a {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: large;
}
</style>