<template>
    <!-- 编写html内容 -->
    <div v-for="(item,index) in list" :key="index">
        <div>
            <input type="checkbox" v-model="item.complete" >
            {{item.title}}
            <button>delete</button>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'navMain',
    setup() {
        let list = ref([
            {
                title: 'python',
                complete: true
            },
            {
                title: 'go',
                complete: false
            },
            {
                title: 'rust',
                complete: false
            }
        ])

        return {
        list,
    }

    },

})
</script>


<style scoped lang='scss'>

</style>