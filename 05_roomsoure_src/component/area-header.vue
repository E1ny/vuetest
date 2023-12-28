<template>
      <div class="area-header">
        <!-- 这里引用的是props定义的数据
                而数据的使用是从父组件传入
                所以这里title与props里面属性一致
        -->
        <div class="title"> {{ title }}</div>
        <div class="subtitle">{{ subtitle }}</div>
      </div>
</template>

<script setup>
 const props = defineProps({
        title: {
            type: String,
            default: "默认"
        },
        subtitle: {
            type: String,
            default: "默认次标题"
        }
    })

</script>

<style lang="less" scoped>
  .area-header {
    .title {
      font-size: 22px;
      color:black;
    }

    .subtitle {
      font-size: 14px;
      color:black;
    }
  }
</style>