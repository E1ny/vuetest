<template>
    <div>
        <nav-bar>
            <!-- 绑定插槽的name属性
                语法糖写法: #
            -->
            <template #left>
                <button>返回</button>
            </template>
            <template v-slot:center>
                <span>内容</span>
            </template>
            <template v-slot:right>
                <a href="#">登录</a>

                <!-- 动态插槽:
                -->
            </template>
        </nav-bar>
        <nav-bar>
            <template v-slot:[position]>
                 <a href="#">跳转</a> 
            </template>
        </nav-bar>
        <!-- 点击哪个按钮, 按钮跑哪边 -->
        <button @click="position = 'left'">左边</button>
        <button @click="position = 'center'">中间</button>
        <button @click="position = 'right'">右边</button>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
    components: {
        NavBar
    },
    data() {
        return {
            position: "center"
        }
    },
}
</script>

<style scoped>

</style>