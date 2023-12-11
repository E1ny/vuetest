<template>
    <div>
        <!-- address在子组件中为定义, 为非prop的attribute
        
            :height = "height" 意思是传入:height的默认属性
        -->

        <show-info name="11" age="22" :height="height"  address="11"/>
        <show-info />
        <show-info />
    </div>
</template>

<script>
import ShowInfo from "./showinfo.vue"
export default {
components: {
    ShowInfo
}
}
</script>

<style scoped>

</style>