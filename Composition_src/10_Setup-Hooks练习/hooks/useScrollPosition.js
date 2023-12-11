import { reactive } from "vue"

export default function useScrollPosition() {
   
    const scrollPosition = reactive({
        x: 0,
        y: 0
    })

    document.addEventListener("scroll", () => {
        scrollPosition.x = window.scrollX
        scrollPosition.y = window.scrollY
    })

    return {
        scrollPosition,
    }

    // 思路: 先监听事件
    //       然后定义一个响应式数据接收着两个参数
    //       return出去
    //       import
    //       解析
    //       return 
    //       模版中引用
}