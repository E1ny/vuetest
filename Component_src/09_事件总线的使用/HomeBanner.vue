<template>
    <div class="banner">
        <button @click="bannerBtnClick">banner按钮</button>
    </div>
</template>
<!-- 
 -->
<script>
import eventBus from './utils/event-bus'
export default {
    methods: {
        bannerBtnClick() {
            console.log("btnBanner")
            eventBus.emit("eyBus", "ey", 1.80)
        }
    }
}
</script>

<style scoped>

</style>