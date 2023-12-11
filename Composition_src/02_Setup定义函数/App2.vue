<template>
    <div class="app">
        <input type="text" v-model="account.username">
        <input type="password" v-model="account.password">
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
setup() {

// reactive使用场景: 绑定的本地数据/有关联的账号密码
const account = reactive({
    username: "aa",
    password: "123"
})

// ref应用场景: 定义一些简单的数据
                // 定义一些网络数据(实际场景中用得多)
    const musics = ref([])
    onMounted(() => {
        const serverMusics = ['1', '2', '3']
        // musics.value = ref(["value"])
        musics.value = serverMusics
    })



    return {
        account
    }
}
}
</script>

<style scoped>

</style>