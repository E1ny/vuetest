<template>
    <div>
        <h2>About: {{ $route.query }}</h2>
        <button @click="backBtn">返回</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

    function backBtn() {
        router.back()
        router.forward()
        // 向前/后跳转
        router.go(1)
    }

</script>

<style scoped>

</style>