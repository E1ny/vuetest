<template>
    <div>
        <h2>info: {{ name }} - {{ age }}</h2>
        <button @click="age++">age</button>
        <button @click="height == 1.12">height</button>
   </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue'
export default {
    setup() {
        const info = reactive({
            name: "ey",
            age: 11,
            height: 1.11
        })

        // reactive的值被解构后会变普通值
        // const { name, age } = info

        // 转toRefs就是响应式数据(多个)
        const { name, age } = toRefs(infos)
    
        // 单个toRef(对象, 对象中哪个参数)
        const height = toRef(info, "height")
    }
}
</script>

<style scoped>

</style>