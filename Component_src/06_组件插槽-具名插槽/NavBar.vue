<template>
    <div>
        <div class="nav-bar">
            <div class="left">
                <!-- 
                    具名插槽:
                 -->
                <slot name="left">left</slot>
            </div>
            <div class="center ">
                <slot name="center">center</slot>
            </div>
            <div class="right">
                <slot name="right">right</slot>
            </div>
        </div>
        <div class="other">
            <!-- 插槽name默认为default -->
            <slot name="default"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
}
.left {
    width: 80px;
    background-color: aquamarine;
}
.center {
    flex: 1;
    background-color: cadetblue;
}
.right {
 width: 80px;   
 background-color: cornflowerblue;
}
</style>