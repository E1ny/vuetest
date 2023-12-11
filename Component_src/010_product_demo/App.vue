<template>
  <!-- template中只允许模板里存在一个根节点 
  
      不添加根节点会报错但能运行,把其内容加入一个div就可以了
  -->
  <div>
  <h2>{{ title }}</h2>
  <h2>当前计数: {{ counter }}</h2>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  </div>
</template>

<script>
import  ProductItem from "./ProductItem.vue"
export default {
  components: {
    ProductItem
  },
  data() {
    return {
      title: "1111",
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
};
</script>

<style></style>
