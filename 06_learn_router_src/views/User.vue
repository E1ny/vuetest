<template>
    <div>
        <!-- 在模版中拿到id
                $route.parms会返回一个key:value
                不知道.$route.parmas.xx 可以直接用$route.params打印看看
        -->
        <h2>user {{ $route.params.id }}</h2>
    </div>
</template>

<script setup>

// 在setup中拿到id
import { useRoute, onBeforeRouteUpdate } from 'vue-router'


// 监听跳转的路由
onBeforeRouteUpdate((to, from) => {
    console.log("from",from.params.id)
    console.log("to", to.params.id)

})
</script>

<style scoped>

</style>