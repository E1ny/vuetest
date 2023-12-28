<template>
  <div>
  <!-- 多个状态的获取 -->
  <h2>counter: {{ counter }}</h2>
  <h2>level: {{ level }}</h2>
  </div>
</template>

<script>
// export default {
//   computed: {
//     storeCounter() {
//       return this.$store.state.counter;
//     },
//   },
// };
</script>

<script setup>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
// 直接解构出多个状态, 并使用torefs使其变成响应式数据
const { level, counter } = toRefs(store.state);

</script>

<style scoped></style>
