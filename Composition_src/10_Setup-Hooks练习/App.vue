<template>
    <div> 
        <home></home>
        <about></about>
        <button @click="changeTitle">修改title</button>
        <button @click="currentPage = 'home'">home</button>
        <button @click="currentPage = 'about'">about</button>

        <component :is="currentPage"></component>

        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
   </div>
</template>

<script>
import { ref } from 'vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import useCounter from './hooks/useCounter'
// import Home from './views/Home.vue'
import useTitle  from './hooks/useTitle'
export default {
  components: { 
    Home,
    About
        },
    setup() {
        const currentPage = ref("home")

        function changeTitle() {
            useTitle("app title")
        } 

        return {
            changeTitle,
            currentPage,
        }
    }
}
</script>

<style scoped>

</style>