<template>
  <div class="app">
    <h2>App</h2>
    <div class="nav">
      <!-- 路由切换组件, vue-router默认提供
          to: 跳转路径, 可以加对象
              to="{path: '/home'}"
          replace: 返回直接跳到默认页面
                  无replace: 进入home -> 进入about -> 返回home路径
                  有replace: 进入home -> 进入about -> 返回默认首页 
                  
          active-class: 点击进入对应路径之后有样式区分
      -->
      <router-link to="/home" active-class="active">首页</router-link>
      <!-- <router-link to="/home" replace active-class="active">首页</router-link> -->
      <router-link to="/about" active-class="active">关于</router-link>
      <router-link to="/user/321" >用户321</router-link>
      <router-link to="/user/123" >用户123</router-link>
      <router-link to="/order" >订单</router-link>
   
      <!-- 其他元素跳转 -->
      <span @click="homeSpanClick">首页</span>
      <button @click="aboutBtnClick">关于</button>
    </div>
    <!-- router-view占位, 
      可以把对应路由路径传过来
      必须要有
    -->
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  // useRouter是一个函数!!!!! 带括号
  const router = useRouter()
  // 监听元素点击
  function homeSpanClick() {
    // 其他元素跳转至首页, 必须拿到router对象
    // 从vue-router拿到useRouter调用.push
    // 这是编程式导航
    // router.push("/home")
    // 对象写法:
    router.push({
      path: "/home"
    })
  }

  function aboutBtnClick() {
    // router.push("/about")
    router.push({
      path: "/about",
      // 可以将参数携带到路径里
      query: {
        name: "ey",
        age: 11
      }
    })
  }
</script>

<style>
.active {
  color: red
}
</style>
