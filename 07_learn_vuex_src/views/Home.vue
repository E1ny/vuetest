<template>
  <div>
    <h2>doubleCounter: {{ $store.getters.doubleCounter }}</h2>
    <h2>friendsTotal: {{ $store.getters.totalAge }}</h2>
    <h2>message: {{ $store.getters.message }}</h2>
   
    <h2>id:111 {{ $store.getters.getFriendById(111) }}</h2>
    <h2>id:112 {{ $store.getters.getFriendById(112) }}</h2>
   </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    computed: {
        // mapState也是类似用法
        ...mapGetters(["doubleCounter", "totalAge", "message", "getFriendById"])
    }
}

</script> 

<script setup>

</script>

<style scoped></style>
