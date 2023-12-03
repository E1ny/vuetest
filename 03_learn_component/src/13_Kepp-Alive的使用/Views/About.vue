<template>
    <div class="about">
      <h2>About</h2>
    </div>
  </template>
  
  <script>
  export default {
    name: "about",
    mounted() {
      console.log("about组件挂载")
    },
    unmounted() {
      console.log("about组件卸载")
    },

  }
  </script>
  
  <style>
  
  </style>