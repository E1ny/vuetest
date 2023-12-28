<template>
    <div class="room-area">
        <!-- 1. 区域header -->
      <area-header :title="areaDate.title" :subtitle="areaDate.subtitle"></area-header>
    
      <!-- 2.房间列表 -->
      <div class="room-list">
        <!-- list的数据, 一般:key都是绑定id
              记得用template模板包裹v-for
        -->
        <template v-for="item in areaDate.list" :key="item.id">
          <room-item :item-date="item"></room-item>
            </template>
        </div>
    </div>
</template>

<script setup>
//   import highScore from '../data/high_score.json'
  import AreaHeader from '../component/area-header.vue'
  import RoomItem from '../component/room-item.vue'

defineProps({
    areaDate: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
.room-list {
  display: flex;
  flex-wrap: wrap;
  flex: 1;

}
</style>