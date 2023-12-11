<template>
    <div class="app">
        <!-- v-model在input中的使用 -->
        <input v-model="message">
        <!-- 实际上v-model做了以下两件事 -->
        <input :value="message" @input="message = $event.target.value">

        <!-- v-model在组件中的使用 -->
        <counter v-model="appCounter"></counter>
        <!-- 实际上v-model做了以下两件事 -->
        <counter :modelValue="appCounter" @update:modelValue="appCounter = $event"></counter>

        <!-- v-model: 可以自定义绑定名称 -->
        <counter2 v-model:counter="appCounter" v-model:ey="appEy"></counter2>
</div>
</template>
 
<script>
import Counter from './Counter.vue'
import Counter2 from './Counter2.vue'

export default {
  components: { 
    Counter,
    Counter2
},
    data() {
        return {     
            message: "aaa",
            appCounter: 100,
            appEy: "bbb"
        }
    }
}
</script>

<style scoped>

</style>