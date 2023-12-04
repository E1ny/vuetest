<template>
    <div class="add">
        <button @click="btnClick(1)">+1</button>
        <button @click="btnClick(3)">+3</button>
        <button @click="btnClick(5)">+5</button>
    </div>
</template>

<script>
export default {
    // 将自定义事件名称注册
    emits: ["add"],
    methods: {
        btnClick(count) {
            // 让子组件发出去一个自定义事件
            // 第一个参数为自定义事件名称,用于父组件中子组件绑定事件用
            // 第二次参数是传递的参数
            this.$emit("add",count)
        }
    }
}
</script>

<style scoped>

</style> 