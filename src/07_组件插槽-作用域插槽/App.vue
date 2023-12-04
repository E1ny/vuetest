<template>
    <div class="app">
      <!-- 这里的属性是子组件中props传入的属性 -->
      <tab-control 
      @addClick="indexClick"
      
      :titles="['衣服', '裤子', '鞋子']"></tab-control>
    <h1>{{ pageContent[currentIndex] }}</h1>
    <tab-control 
      @addClick="indexClick"
      :titles="['衣服', '裤子', '鞋子']">
      <!-- 
        #default绑定的对象会反向接收子模块传出来的参数
       -->
       <template #default="props">
        <a href="#">{{ props.item }}</a>
       </template>
    </tab-control>
      <tab-control 
      @addClick="indexClick"
      :titles="['衣服', '裤子', '鞋子']"
      >
      <template #default="props">
        <button>{{ props.item }}</button>
      </template>
    </tab-control>
    <tab-control 
      @addClick="indexClick"
      :titles="['衣服', '裤子', '鞋子']"
      v-slot="props"
      >
      <!-- 
        v-slot: 插槽的特殊写法
            如果只有一个插槽, 模版可以不写,把插槽模版写入组件里面
       -->
        <button>{{ props.item }}</button>
    </tab-control>
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