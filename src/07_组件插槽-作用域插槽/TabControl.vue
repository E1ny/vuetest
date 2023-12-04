<template>
    <div class="tab-control">
        <template v-for="(item, index) in titles" :key="item">
        <div class="tab-control-item"
            :class="{active: index === currtentIndex}"
            @click="btnClick(index)">
            <!-- 
                因为有作用域的影响:即父模块的参数只能在父模块中访问
                    子模块同理, 所以item传入父模块是范围不了的
                    需要用slot绑定item,把item传出去
             -->
            <slot :item="item">
                <span>{{ item }}</span>
            </slot>
    </div>
        </template>
    </div>
</template>

<script>
export default {
    emit: ["addClick"],
    props: {
        titles: {
            type: Array,
            default: () => {}
        }
    },
    data() {
        return {
            currtentIndex: 0
        }
    },
    methods: {
        btnClick(index) {
            this.currtentIndex = index
            this.$emit("addClick", index)
        }
    }
}
</script>

<style scoped>
.tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
}
.tab-control-item  {
    flex: 1;
}

.active span {
    color:aquamarine;
    padding: 4px;
    border-bottom: 3px solid red;
}
</style>