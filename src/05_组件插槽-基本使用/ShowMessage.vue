<template>
    <div class="showMsg">
        <h2>{{ title }}</h2>
        <div class="content">
            <!-- 插槽, 在父组件中定义的元素会对其进行替换 -->
            <slot>
                <p>插槽的默认文本</p>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default:"默认文本"
        },
        content: {
            type: String,
            default: "默认内容"
        }
    }
}
</script>

<style scoped>

</style>