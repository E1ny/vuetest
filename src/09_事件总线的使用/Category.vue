<template>
    <div>
        <h2>category</h2>
    </div>
</template>

<script>
import eventBus from './utils/event-bus'
export default {
    methods: {
        eyEventHandler() {
            console.log("eyBus在category中监听")
             }
    },
    created() {
        // 把on绑定的函数抽取, 让unmounted中可以调用消除
        eventBus.on("eyBus",  this.eyEventHandler)
    },
     // 当组件被移除的时候, 监听该组件然后彻底销毁
     unmounted() {
        console.log("category unmounted"
        )
        eventBus.off("eyBus", this.eyEventHandler)
    }
}
</script>

<style scoped>







</style>