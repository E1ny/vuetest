<template>
    <div>
        <h2>ShowInfo: {{ info }}</h2>

        <!-- 代码没错,但不规范
                违背单向数据流原则
        -->
        <!-- <button @click="info.name = 'kobe'">ShowInfo按钮</button> -->
        <!-- 正确的作法 -->
        <button @click="ShowInfoBtnClick">按钮</button>

        <h2>readonly: {{ roInfo }}</h2>
        <button @click="roInfoBtnClick">按钮</button>
    </div>
</template>

<script>
export default {
    props: {
        info: {
            type: Object,
            default: () => ({})
        },
        // readonly数据
        roInfo: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ["changeInfoName", "changeRoInfoName"],
    // setup的默认参数
    setup(props, context) {
        function ShowInfoBtnClick() {
            context.emit("changeInfoName", "aaa")
        }

        function roInfoBtnClick() {
            context.emit("changeRoInfoName", "bbbb")
        }


        return {
            ShowInfoBtnClick,
            roInfoBtnClick
        }
    }
}
</script>

<style scoped>

</style>