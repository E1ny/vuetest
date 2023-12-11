<template>
    <div class="app">
        <show-message title="标题">
            <button>按钮</button>
        </show-message>
        <show-message>
            <a href="#">跳转链接</a>
        </show-message>
        <show-message>
            <!-- @表示src路径 -->
            <!-- <img src="@/" alt=""> -->
        </show-message>
    </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue'
export default {
components: {
    ShowMessage
}
}
</script>

<style scoped>

</style>