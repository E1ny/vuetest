import { ref, watch } from 'vue'

export default function userTitle(titleValue) {
    // document.title = title


    // 定义ref的引入数据
    const title = ref(titleValue)

    // 拿到数据 
    watch(title, (newValue) => {
        document.title = newValue
    },{
        immediate: true
    })


    return title


    // 思路:
    // 本质上是把usetitle传递给title
    // const title = usetitle("参数")
    // export default function usetitle("参数")
    // const title = ref("参数")
    // watch(title, (newvalue) => {
    //  document.title = newValue
    //  })
    // 然后 return出去
    // 全程就是把title传递出去然后参数化使用
    // watch可以监听数据变化然后修改数据
}