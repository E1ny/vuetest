<template>
    <div class="home">
      <h2>Home</h2>
      <h2> {{ counter }}</h2>
      <button @click="counter++">+</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "home",
    data() {
      return {
        counter: 0
      }
    },
    mounted() {
      console.log("home组件挂载")
    },
    unmounted() {
      console.log("home组件卸载")
    },
    activated() {
      console.log("home组件激活")
    },
    deactivated() {
      console.log("home组件失活")
    }
    }
  </script>
  
  <style>
  
  </style>