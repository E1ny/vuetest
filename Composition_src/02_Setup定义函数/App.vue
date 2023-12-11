<template>
    <div class="app">
        <h2>{{ message }}</h2>
        <button @click="changeMessage">修改message</button>

        <h2>账号: {{ account.username }}</h2>
        <h2>密码: {{ account.password }}</h2>
        <button @click="changeAccount">修改</button>
    
        <h2>{{ counter }}</h2>
        <button @click="increment"></button>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    setup() {
        // 非响应式数据
        let message = "aaa"

        // 无法修改
        function changeMessage() {
            message = "bbb"
            console.log(message)
        }

        // 使用reactive定义响应式数据(不能传入简单参数)
        const account = reactive({
            username: "ey",
            password: "1223"
        })

        function changeAccount() {
            account.username = "eey"
        }

        // ref函数: 定义简单类型的数据(也可以定义复杂类型数据)
        const counter = ref(0)
        // setup函数内的调用参数必须带.value
        // 模版不用带, ref在模版会自动解包(浅层解包)
        function increment() {
            counter.value++
        }


        return {
            message,
            changeMessage,
            account,
            changeAccount,
            counter,
            increment
            
        }
    }
}
</script>

<style scoped>

</style>