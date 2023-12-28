<template>
    <div class="app">
      <room-area :area-date="highScore"></room-area>
      </div>
</template>

<script setup>
  import { ref } from 'vue'
  import RoomArea from './component/room-area.vue'
//   静态获取数据
//   import highScore from '../data/high_score.json'

//    模拟网络请求
  const highScore = ref({})

  setTimeout(() => {
    // import返回一个promise
    import("./data/high_score.json").then(res => {
      highScore.value = res.default
    })
  }, 1000)


  // 获取数据后先打印看看引用成功没
  // console.log(highScore)
</script>

<style lang="less" scoped>
.app {
  width: 1032px;
  margin: 0 auto;
}
</style>