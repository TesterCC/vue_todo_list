<template>
    <!-- 编写html内容 -->
    <div>
        <div v-if="list.length > 0">
            <div v-for="(item, index) in list" :key="index">
                <div class="item">
                    <input type="checkbox" v-model="item.complete">
                    {{ item.title }}
                    <button class="del" @click="del(item, index)">delete</button>
                    <!-- when mouse on, display delete button -->
                </div>
            </div>
        </div>
        <div v-else> Here is no task </div>
    </div>
</template>

<script>
import { defineComponent, ref} from 'vue'

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
        // 把要删除的对象分发出去

        // delete task
        let del = (item, index) => {
            ctx.emit('del', index)
            // console.log(item)
            // console.log(index)
        }
        return {
            del
        }

    },

})
</script>


<style scoped lang='scss'>
.item {
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
    &:hover {
        background: #ddd;

        button {
            display: block;
        }
    }
}
</style>