<template>
    <!-- 编写html内容 -->
    <div class="container">
    <div>
        Finished {{ isComplete }} / All {{ list.length }}
    </div>
    <div v-if="isComplete > 0" class="btn">
        <button @click="clear">Clear Finished</button>
    </div>
    </div>
</template>

<script>
import { defineComponent, ref, computed} from 'vue'
export default defineComponent({
    name: 'navMain',
        // 用 props 接收传递过来的 list
        props: {
        list: {
            type: Array,
            required: true
        }
    },
    setup(props, ctx) {
        let isComplete = computed(() => {
            // 过滤已完成的
            let arr = props.list.filter(item => {
                // return item.complete   // 为true的，简化
                return item.complete == true  // 为true的
            })
            return arr.length
        })

        // clear finished
        let clear = () => {
            // 过滤未完成的
            let arr = props.list.filter(item => {
                return item.complete == false  // 为true的
            })
            ctx.emit('clear', arr)
            // console.log('clear')
        }

        return {
            isComplete,
            clear
        }
    }
})
</script>


<style scoped lang='scss'>
.container {
    display:flex;
    align-items: center;
    .btn{
        margin-left: 10px;
    }
}
</style>