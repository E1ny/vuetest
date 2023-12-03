<template>
    <div class="app">
      <h2 ref="title" class="title" :style="{ color: titleColor}">{{ message }}</h2>
      <button ref="btn" @click="changeTitle">修改title</button>
    
      <banner ref="banner"/>
    </div>
  </template>
  
  <script>
  import Banner from './Banner.vue'
  export default {
    components: {
        Banner
    },
      data() {
          return {
              message: "AAA",
              titleColor: "red"
          }
      },
      methods: {
          changeTitle() {
              // 1.不要主动去获取DOM, 并且修改DOM内容
            //   this.message = "BBB",
            //   this.titleColor ="blue"

              // 通过ref绑定元素再通过$refs拿到元素对象获取DOM
              console.log(this.$refs.title)      
              console.log(this.$refs.btn)  
              
              // ref获取组件拿到的是组件实例
              // 且可以在父组件中主动调用子组件的对象方法
              console.log(this.$refs.banner)
              console.log(this.$refs.banner.bannerClick())
          
              // 获取的banner中的元素
              // 如果banner模板中有多个根div 则会拿到Node的节点
              console.log(this.$refs.banner.$el)
              console.log(this.$refs.banner.$el.nextSibling)
            
              // 还有两个属性(了解)
              console.log(this.$parent)
              console.log(this.$root)
            }
      },
  }
  </script>
  
  <style>
  
  </style>