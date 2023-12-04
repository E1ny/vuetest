<template>
    <div>
        <!-- address在子组件中为定义, 为非prop的attribute
        
        
        -->
        <show-info name="11" age="22" :height="33"  address="11"/>
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