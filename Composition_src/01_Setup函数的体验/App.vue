<template>
    <div class="app">
      <!-- template的ref会自动解包, 所以不需要加counter.value -->
      <h2>当前计数: {{ counter }}</h2>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import userCounter from '../hooks/useCounter'
export default {
  setup() {
    // 1.定义counter的内容
    // 默认定义的数据都是响应式数据, 需要导入ref
    // let counter = ref(100)
    // const increment = () => {
    //   counter.value++
    //   console.log(counter.value)

    // }
    // const decrement = () => {
    //   counter.value--
    //   console.log(counter.value)
    // }
    
    // 等同于以下:

    // const {counter, increment, decrement}  = userCounter()

    return {
      // 注册
      // counter,
      // increment,
      // decrement,
      // 等同于以下展开语法
      ...userCounter()
    }
  }
}
</script>

<style scoped>

</style>