<template>
    <div>
        <h2>Counter: {{ modelValue }}</h2>
        <button @click="changeCounter">修改Counter</button>
   </div>
</template>

<script>
export default {
    // v-model中事件的固定名称
    emits: ["@update:modelValue"],
    props: {
        modelValue: {
            type: Number,
            default: 0
        }
    },
    methods: {
        changeCounter() {
            this.$emit("@update:modelValue", 1000)
        }
    }
}
</script>

<style scoped>

</style>