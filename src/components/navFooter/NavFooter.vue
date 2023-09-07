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
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'navMain',
        // 用 props 接收传递过来的 list
        props: {
        list: {
            type: Array,
            required: true
        }
    },
    setup() {
        let isComplete = ref(1)

        // clear finished
        let clear = () => {
            console.log('clear')

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