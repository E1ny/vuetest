// 可在此配置webpack

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // resolve: 配置路径/设置import文件的别名
    resolve: {
      // 配置别名
      // @是已经配置好的路径别名,对应src路径
      alias: {
        "utils": "@/utils"
      }
    }
  }
})
