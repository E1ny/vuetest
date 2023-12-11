<template>
    <div>
        <h2>Counter: {{ counter }}</h2>
        <button @click="changeCounter">修改Counter</button>

        <h2>ey: {{ ey }}</h2>
        <button @click="changeEy">修改ey</button>
    </div>
</template>

<script>
export default {
    // v-model中事件的固定名称
    emits: ["update:counter", "update:ey"],
    props: {
        counter: {
            type: Number,
            default: 0
        },
        ey: {
            type: String,
            default: ""
        }
    },
    methods: {
        changeCounter() {
            this.$emit("update:counter", 999)
        },
        changeEy() {
            this.$emit("update:ey", "eee ")
        }
    }
}
</script>

<style scoped>

</style>