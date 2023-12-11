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
    <keep-alive include="home,about">
        <component :is="currentTab"></component>
    </keep-alive>
  </div>
</template>

<script>
// 异步组件: 为了打包的时候可以单独分包
import {defineAsyncComponent} from 'vue'
const AsyncAbout = defineAsyncComponent(() => import{"./Views/About.vue"})
// import About from './Views/About.vue'
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