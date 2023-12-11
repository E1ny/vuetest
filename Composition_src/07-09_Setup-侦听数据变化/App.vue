<template>
    <div>
        App
    </div>
    <button @click="message = 'aa'">修改message</button>
    <button @click="info.name = 'ee'">修改info</button>
</template>
 
<script> 
import { reactive, ref, watch } from 'vue'
export default {
    setup() {
        const message = ref('hello world')
        const info = reactive({
            name: "ey",
            age: 11
        })

        watch(message, (newValue, oldValue) => {
            console.log(newValue, oldValue)
        }, {
            // 第一次是否立即执行
            immediate: true,
            // 是否深层监听
            deep: true
        })
        // 解析对象要用({...info}) 括号把对象当成整体
        watch(() => ({...info}), (newValue, oldValue) => {
            console.log(newValue, oldValue)
        } )

        return {
            message,
            info
        }
    }
}
</script>

<style scoped>

</style>