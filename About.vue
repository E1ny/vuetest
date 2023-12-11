<template>
    <div>
        <h2>about: {{ counter }}</h2>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    
        <button @click="popularClick()">首页-流行</button>
        <button @click="hotClick()">首页-热门</button>
        <button @click="songClick()">首页-歌单</button>
    </div> 
</template>

<script>
import useCounter from '../hooks/useCounter'
import { onMounted, ref } from 'vue'
import useTitle  from '../hooks/useTitle'

export default {
    setup() {
        const { counter, increment, decrement } = useCounter()
   
       const title = useTitle("关于")

        function popularClick() {
            title.value = "首页-流行"
        }

        function hotClick() {
            title.value = "首页-热门"
        }   

        function songClick() {
            title.value = "首页-歌单"
        }

        return {
            counter,
            increment,
            decrement,
            popularClick,
            hotClick,
            songClick
        }
    }
}
</script>

<style scoped>

</style>