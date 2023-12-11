<template>
    <div class="app">
        <home></home>
    </div>
</template>
<!-- 
    们创建了一个文件是小写开头的，又改成大写开头的。

            比如： relationDemo.vue  改成 RelationDemo



原因：缓存的判重逻辑是不区分大小写导致的。在这种情况下，vscode缓存中放的是relationDemo.vue，改了大小写后，vscode试图把RelationDemo.vue文件放进缓存是，判别到重复了，就会提示错误：Already included file name 'RelationDemo.vue' differs from file name 'relationDemo.vue' only in casing



解决方法：

1、引入vue文件时去掉后缀.vue。 比如 import RelationDemo from './RelationDemo'

 -->
<script>
import Home from './Home.vue'
export default {
    components: {
        Home
    },
    provide: {
        name: "aa",
        age:11
    }
}
</script>

<style scoped>

</style>