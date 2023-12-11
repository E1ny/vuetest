<template>
    <div>
        <h2>App: {{ info }}</h2>
        <show-info :info="info"
         :roInfo="roInfo"
          @changeInfoName="changeInfo"
          @changeRoInfoName="changeRoInfoName "
          ></show-info>
    </div>
</template>

<script>
import { reactive, readonly } from 'vue'
import ShowInfo from './ShowInfo.vue'
export default {
    components: {
        ShowInfo
    },
    setup() {
        // 本地定义多个数据, 都需要传给子组件
        const info = reactive({
            name: "ey",
            height:1.00
        })

        const roInfo = readonly(info)

        // payload是从自定义事件changeInfoName传入的
        function changeInfo(payload) {
            info.name = payload
        }

        // 通过修改原数据修改readonly数据 
        function changeRoInfoName(payload) {
            info.name = payload
        }

        return {
            info,
            changeInfo,
            roInfo,
            changeRoInfoName 
        }
    }
}
</script>

<style scoped>

</style>