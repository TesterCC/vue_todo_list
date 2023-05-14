<template>
    <!-- 编写html内容 -->
    <div>
        <input placeholder="Please input task name" v-model="value" 
        @keydown.enter="enter"/>
        <!--bind keyboard event enter-->
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'navHeader',
    setup() {
        let value = ref('')
        // press enter to confirm
        let enter = () => {
            console.log(value.value)
        }
        return {
            value,
            enter   // no return can not use 
        }

    }
})
</script>


<style scoped lang='scss'>
input {
    margin-bottom: 10px;
}
</style>