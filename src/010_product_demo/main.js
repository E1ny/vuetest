import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//全局注册product不推荐
// app.component("product-item", ProductItem)

app.mount('#app')


// import xx from "" xx是自命名导入的模块