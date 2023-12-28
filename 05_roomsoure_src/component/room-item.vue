<template>
  <div class="room-item">
    <div class="item-inner">
      <div class="cover">
        <!-- 这里因为v-bind绑定的数据是动态的
                    我在json传的img都是同一个,绑定之后无法展示,所以写死了 -->

        <img src="../img/7bca7781e0fa619faffa835807f1afa4563e20b5.jpg" alt="" />
      </div>
      <div class="info">
        <div class="title" :style="{color: titleInfo.color}">
            <!-- 复杂数据处理用computed -->
          {{ titleInfo.text }}
        </div>
        <div class="name">
          {{ itemDate.name }}
        </div>
        <div class="price">
          {{ itemDate.price_format + "/晚" }}
        </div>
        <div class="bottom-info" :style="bottomInfo.style">
          {{ itemDate.bottom_info.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import highScore from "../data/high_score.json";

// 把模块抽取成组件, 因为item是从父组件传来的,
// 所以要定义props
const props = defineProps({
  itemDate: {
    type: Object,
    default: () => ({}),
  },
})

// const titleText = computed(() => {
//     return props.itemDate.verify_info.message.join(" ")  
// })


// const titleColor = computed(() => {
//     return props.itemData.verify_info.text_color
// })

// 合并:
const titleInfo = computed(() => {
    return {
        text: props.itemDate.verify_info.message.join(" "),
        color: props.itemDate.verify_info.text_color
        
    }
})

const bottomInfo = computed(() => {
    return {
        content: props.itemDate.bottom_info.content,
        style: {
            color: props.itemDate.bottom_info.content_color,
            fontSize: props.itemDate.bottom_info.font_size + "px"
        }
    }
})
</script>

<style lang="less" scoped>
.room-item {
  width: 33.3333%;
  .item-inner {
    // 上 左右 下
    margin: 0 8px 12px;
    color: black;
    font-weight: 800;

    img {
      width: 100%;
      border-radius: 10px;
    }

    .info {
      .title {
        margin-top: 3px;
        font-size: 16px;
      }

      .name {
        margin-top: 3px;
        font-size: 16px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        margin-right: 3px 0;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
}
</style>
