<template>
    <div>
        {{ info }} - {{ name }}
    </div>
    <button @click="showInfoBtnClick">showinfo</button>
</template>

<script setup>
    const info = "ccc"

    // 定义属性用defineProps
    const props = defineProps({
        name: {
            type: String,
            default: "默认值"
        }
    })
    const emits = defineEmits(["infoClick"])
    function showInfoBtnClick() {
        emits("infoClick", "showinfo发生点击事件")
    }

    function foo() {
        console.log("showinfo组件实例函数")
    }

    // <show-info ref="组件实例"> --> 定义组件实例
    // const 组件实例 = ref() --> 定义响应式组件实例
    // onmouned({组件实例.value.函数()}) -->调用组件实例
    // 以上组件实例是通过组件<show-info>关联的
    // 而defineExpose是把组件内部的函数/参数暴露出去给顶层/父组件
    defineExpose({
        foo,
    })
</script>

<style scoped>

</style>