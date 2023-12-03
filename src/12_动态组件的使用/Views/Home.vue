<template>
    <div class="home">
      <h2>Home</h2>
      <h2> {{ name }} - {{ age }}</h2>
      <button @click="changeBtn">home按钮</button>
    </div>
  </template>
  
  <script>
  export default {
    emits: ["homeBtn"],
    props: {
      name: {
        type: String,
        default: ""
      },
      age: {
        type: Number,
        default: 0
      }
    },
    methods: {
      changeBtn() {
        this.$emit("homeBtn", "我是按钮")
      }
    }
  }
  </script>
  
  <style>
  
  </style>