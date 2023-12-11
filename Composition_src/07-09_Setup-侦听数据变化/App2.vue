<template>
    <div>
        <h2>{{ counter }}</h2>
        <h2>{{ name }}</h2>
        <button @click="counter++">+</button>
        <button @click="name = 'eyy'">name</button>
</div>
</template>

<script>
import { watchEffect, ref } from 'vue'
export default {
    setup() {

        const counter = ref(0)
        const name = ref("ey")

        // 跟watch区别: watchEffect会自动收集依赖
        // 更新依赖的变化
        watchEffect(() => {
            console.log("~~~~", counter.value, name.value)
        })

        return {
            counter,
            name
        }
    }
}
</script>

<style scoped>

</style>