<template>
    <div class="banner">
        <h2>HomeBanner: {{ name }} - {{ age }}</h2>
    </div>
</template>
<!-- 
    (少用)
    provide: 将顶层的父组件属性传出来
    inject: 无关联的子组件引用父组件传出来的属性
 -->
<script>
export default {
    inject: ["name", "age"]
}
</script>

<style scoped>

</style>