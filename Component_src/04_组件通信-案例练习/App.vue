<template>
    <div class="app">
      <!-- 这里的属性是子组件中props传入的属性 -->
      <tab-control 
      @addClick="indexClick"
      
      :titles="['衣服', '裤子', '鞋子']"></tab-control>
    <h1>{{ pageContent[currentIndex] }}</h1>
    </div>
</template>

<script>
import TabControl from './TabControl.vue'
export default {
  components: {
    TabControl
  },
  data() {
    return {
      pageContent: [
        "衣服列表",
        "裤子列表",
        "鞋子列表"
      ],
      currentIndex: 0
    }
  },
  methods: {
    indexClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>

</style>