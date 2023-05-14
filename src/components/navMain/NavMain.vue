<template>
    <!-- 编写html内容 -->
    <div v-for="(item,index) in list" :key="index">
        <div class="item">
            <input type="checkbox" v-model="item.complete" >
            {{item.title}}
            <button class="del" @click="del(item,index)">delete</button>  <!-- when mouse on, display delete button -->
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

        // delete task
        let del = (item,index) => {
            console.log(item)
            console.log(index)
        }
        return {
        list,
        del
    }

    },

})
</script>


<style scoped lang='scss'>
.item{
    height: 35px;
    line-height: 35px;
    position: relative;
    width: 170px;
    cursor: pointer;
    button {
        position: absolute;
        right: 20px;
        top: 6px;
        display: none;
        z-index: 99;
    }
    // scss syntax
    &:hover{
        background: #ddd;
        button {
            display: block;
        }
    }
}
</style>