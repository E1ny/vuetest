<template>
    <div>
        <h2>home: {{ counter }}</h2>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>

    <div class="scroll">
        <h2>x: {{ scrollPosition.x }}</h2>
        <h2>y: {{ scrollPosition.y }}</h2>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import useCounter from '../hooks/useCounter'
import useTitle from '../hooks/useTitle'
import useScrollPosition from '../hooks/useScrollPosition'


export default {
    setup() {
        // const { counter, increment, decrement } = userCounter()
   
        // return {
        //     counter,
        //     increment,
        //     decrement
        // }
            useTitle("首页")
        // 直接解构也可以


        // 获取滚动位置:
    const { scrollPosition } = useScrollPosition()

        return {
            ...useCounter(),
            scrollPosition,
        }
    }

}
</script>

<style scoped>

</style>