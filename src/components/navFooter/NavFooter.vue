<template>
    <!-- 编写html内容 6:00 video/23031 3-7 -->
    <div class="container">
    <div>
        Finished {{ isComplete }} / All {{ all }}
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
    setup() {
        let isComplete = ref(1)
        let all = ref(3)

        // clear finished
        let clear = () => {
            console.log('clear')

        }

        return {
            isComplete,
            all,
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