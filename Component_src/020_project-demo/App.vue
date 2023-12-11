<template>
  <div class="app">
   <h2 class="title">自己标题</h2>
   <AppHeader></AppHeader>
  </div>
 </template>
 
 <script>
 import AppHeader from "./components/AppConten.vue"
 export default {
   name: 'App',
   components: {
     AppHeader
   }
 }
 </script>
 
 <style scoped>
  .title {
    color:aquamarine;
  }
 </style>
 