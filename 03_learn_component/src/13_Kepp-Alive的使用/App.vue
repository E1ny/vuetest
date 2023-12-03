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
    <!-- 
        kee-alive:
            三个参数:
                        include(组件名称/正则表达式/数组): 要缓存的组件名,组件间不可加空格
                        exclude: 要排除的组件名
                        max: 缓存的组件数量
                        
                        // 总为监测keep-alive组件的生命周期：
                        deactivated: 组件被销毁时触发的事件
                        activated: 组件被激活时触发的事件
                        
                        // include绑定的组件名称需要在子组件中注册
                        name: 组件的名字
     -->
    <keep-alive include="home,about">
        <component :is="currentTab"></component>
    </keep-alive>
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