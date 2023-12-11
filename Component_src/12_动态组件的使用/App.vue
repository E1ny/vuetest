<template>
  <div class="app">
    <template v-for="(item, index) in tab" :key="item">
        <button :class="{active: currentTab === item}"
        @click="changeColor(index, item)">
        {{ item }}
    </button>
    </template>
  </div>
  <div class="view">
    <!-- 添加组件方法1: v-fi进行逻辑判断, 决定要显示哪个组件 -->
    <!-- <template v-if="currentIndex === 0">
    <home></home>
    </template>
    <template v-else-if="currentIndex === 1">
    <about></about>
    </template>
    <template v-else-if="currentIndex === 2">
    <category></category>
    </template> -->

    <!-- 2: 动态添加组件
            is绑定的组件需要满足: 全局注册的组件/局部注册的组件  
    -->
    <!-- <component is="about"></component>
    <component is="home"></component>
    <component is="category"></component> -->
    <!--通过索引动态添加 -->
    <!-- <component :is="tab[currentIndex]"></component> -->
  
    <!-- 直接通过组件值动态添加
        参数传递: 与父子间通讯一样
        事件传递: 通过emit发送事件
    -->
    <component
     name="ey"
      :age="11" 
      
    :is="currentTab" @homeBtn="appBtn "></component>
  </div>
</template>

<script>

import About from './Views/About.vue'
import Home from './Views/Home.vue'
import Category from './Views/Category.vue'


export default {
    components: {
        About,
        Home,
        Category
    },
    data() {
        return {
            tab: ["home", "about", "category"],
            currentIndex: 0,
            currentTab: "home"
        }
    },
    methods: {
        changeColor(index, item) {
            this.currentTab = item
            // this.currentIndex = index
        },
        appBtn(payload) {
            console.log("homeClick", payload)
        }
    }
}
</script>

<style scoped>
.active {
    color: red;
}
</style>