<template>
    <!-- 编写html内容 -->
    <div>
        Finished {{ isComplete }} / All {{ all }}
    </div>
    <div v-if="isComplete > 0">
        <button>Clear Finished</button>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'navMain',
    setup() {
        let isComplete = ref(1)
        let all = ref(3)

        return {
            isComplete,
            all
        }
    }
})
</script>


<style scoped lang='scss'>

</style>