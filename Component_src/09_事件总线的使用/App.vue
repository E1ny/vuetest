<template>
    <div class="app">
        <h2>{{ message }}</h2>
        <home></home>
        <button @click="isShow = false ">是否显示category </button>
        <category v-if="isShow"></category>
    </div>
</template>
<!-- 事件总线用法: 
            本质主要还是用于非父子组件间通讯使用
            引入事件状态库: eventBus
            子组件:
                            methods: {
                                eventBus.emit("自定义事件名称",自定义参数1,...)
                            }
            顶层父组件/分支组件:
                            created() {
                                //用法1: 网络监听
                                fetch() {}

                                //用法2:事件监听
                                eventBus.on("子组件中自定义事件名称",(子组件自定义参数1,...) => {
                                    this.父组件定义data = `子组件自定义参数名称: ${子组件自定义参数}`
                                })
                            }


-->
<script> 
import eventBus from './utils/event-bus'
import Home from './Home.vue'
import Category from './Category.vue'
export default {
    components: {
        Home,
        Category
    },
    data() {
        return {
            message: "AA",
            isShow: true
        }
    },
    methods: {
    },
    created() {
        // fetch()

        eventBus.on("eyBus", (name, height) => {
            console.log("app中监听", name, height)
            this.message = `name: ${name}, height: ${height}`
        })
    },
   
}
</script>

<style scoped>

</style>