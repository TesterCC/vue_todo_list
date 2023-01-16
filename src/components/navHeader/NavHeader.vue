<template>
    <!-- 编写html内容 -->
    <div>
        <input placeholder="Please input task name" v-model="value" />
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'navHeader',
    setup() {
        let value = ref('')
        return {
            value
        }

    }
})
</script>


<style scoped lang='scss'>

</style>