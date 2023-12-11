<template>
    <div>
    </div>
</template>

<script>
export default {
    // 1.组件被创建之前
     beforeCreate() {
        console.log("beforeCreate")
     },

     // 2.组件被创建完成
     created() {
        console.log("组件被创建")
        console.log("1.发生网络请求, 请求数据")
        console.log("2.监听eventBus事件")
        console.log("3.监听watch数据")
     },

     // 3.组件template准备被挂载
     beforeMount() {
        console.log("beforeMount")
     },

     // 4.组件template被挂载: 虚拟DOM -> 真实DOM
     mounted() {
        console.log("mounted")
        console.log("1.获取DOM")
        console.log("2.使用DOM")
     },

     // 5. 数据发生改变
     // 5.1 准备更新DOM
    //  只有数据更新时会触发
     beforeUpdate() {
        console.log("beforeUpdate")
     },


     // 5.2 更新DOM
     updated() {
        console.log("updated")
     },

     // 6.卸载VNode -> DOM元素
     // 6.1 卸载之前
    //  App根组件不会被卸载, 其他子组件只有被卸载时会触发
     beforeUnmount() {
        console.log("beforeUnmount")
     },

     // 6.2 DOM元素被卸载完成
     unmounted() {
        console.log("unmounted")
     }

}
</script>

<style scoped>

</style>
