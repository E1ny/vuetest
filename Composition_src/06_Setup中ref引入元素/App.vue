<template>
    <div>
        <h2 ref="titleRef">我是标题</h2>
        <button ref="btn">按钮</button>

        <button @click="getElements">获取元素</button>
    
        <show-info ref="showInfoRef"></show-info>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import ShowInfo from './ShowInfo.vue'
export default {
    components: {
        ShowInfo
    },

    setup() {
        const titleRef = ref()
        const btnRef = ref()
        const showInfoRef = ref()

        // mounted的生命周期
        onMounted(() => {
            console.log(titleRef.value)
            console.log(btnRef.value)
            console.log(showInfoRef.value)
        })

        function getElements() {
            console.log(titleRef.value)
        }
        return {
            titleRef,
            btnRef,
            showInfoRef,
            getElements
        }
    }
}
</script>

<style scoped>

</style>