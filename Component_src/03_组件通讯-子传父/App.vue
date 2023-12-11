<template>
    <div class="counter">
        <h2>{{ counter }}</h2>
        <add-counter @add="addBtnClick"></add-counter>
        
        <sub-counter @sub="suvBtnClick"></sub-counter>
    </div>
</template>

<script>
import AddCounter from "./AddCounter.vue"
import SubCounter from "./SubCounter.vue"
export default {
    components:{
        AddCounter,
        SubCounter
    },

    data() {
        return {
            counter: 0
        }
    },
    methods: {
        // count从子组件传入
        addBtnClick(count) {
            this.counter += count
        },
        subCounter(count) {
            this.counter -= count
        }
    }
}
</script>

<style scoped>

</style>