import { createApp } from 'vue'
import App from './App.vue'

/**
 * 1. jsconfig.json的演练
 * 作用:用以给VScode读取, 以获得更好提示
 * 
 * 2.引入vue的版本(了解就行)
 * 3.补充: 单文件Vue-style是有自己的作用域
 *      <style scoped>
 * 4.补充:vite创建一个Vue项目 
 */



createApp(App).mount('#app')
