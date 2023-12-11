<template>
    
  components: { ShowInfo },<div>
        Appcontent: {{ message }}
    </div>
    <button @click="changeMessage">修改</button>
    <show-info name="ey"
                @info-click="AppInfoClick"
                ref="showInfoRef"
    ></show-info>
    <show-info></show-info>
    <show-info></show-info>

</template>
<!-- setup语法糖: <script setup> 
     并且import之后不再需要component:{} 
     直接在模板可以引用组件
-->
<script setup>
    // 1.所用编写在顶层中的代码, 都是默认暴露给template可以使用
    import ShowInfo from '@/03_setup其他函数/ShowInfo.vue'
import { ref, onMounted } from 'vue'
    import showInfo from './showInfo.vue'
    
    // 2.定义响应式数据
    const message = ref("hello aaa")

    // 3.定义绑定函数
    function changeMessage() {
        message.value = "bbbb"
    }

    function AppInfoClick(payload) {
        console.log("监听到showinfo点击", payload)
    }

    // 获取组件实例
    const showINfoRef = ref()

    onMounted(() => {
        showInfoRef.value.foo()
    })

</script>

<style scoped>

</style>