export default function useCounter() {
    let counter = ref(100)
    const increment = () => {
      counter.value++
      console.log(counter.value)

    }
    const decrement = () => {
      counter.value--
      console.log(counter.value)
    }
}