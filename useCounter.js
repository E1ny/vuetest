import { onMounted, ref } from 'vue'

export default function userCounter() {
    const counter = ref(0)
        
    function increment() {
        counter.value++
        console.log(counter.value)
    }


    function decrement() {
        counter.value--
        console.log(counter.value)
    }


    onMounted(() => {
        setTimeout(() => {
            counter.value = 999
        }, 1000)
    })

    return {
        counter,
        increment,
        decrement
    }
}