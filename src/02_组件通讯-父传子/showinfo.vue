<template>
    <!-- 非prop的attribute会被默认传到其子组件的根节点上
            也就是.info

            可以通过inheriAttrs: false 取消默认添加
            取消默认后还想拿到对应属性: $attrs.attribute可以拿到 
        -->
    <div class="info">
        <h2>{{ name }}</h2>
        <h2>{{  age }}</h2>
        <h2>{{ height }}</h2>
        <h2>{{ friend }}</h2>
    </div>
</template>

<script>
export default {
    // 作用: 接收父组件传递过来的属性(数组语法)
    // 弊端: 不可对类型进行验证
    //       没有默认值
    // props: ["name", "age", "height"]

    // 对象语法
    props: {
        name: {
            type: String,
            // 是否为必传参数
            required: true,
            default: "默认"
        },
        age: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 2
        },
        friend: {
            type: Object,
            // 如果默认参数是对象, 必须使用函数, 让函数返回一个对象
            default: () => { name: "james"}
        },
        hobbies: {
            type: Array,
            // 数组也要函数返回对象 
            default: () => ["play"]
        }
    }
}
</script>

<style scoped>

</style>