<template>
    <div class="content">
      <h2>组件的嵌套通讯</h2>
      <app-header></app-header>
      <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from "../components/header.vue"
import AppFooter  from "../components/footer.vue"
export default {
  components: {
        AppFooter,
        AppHeader
      }
}
</script>

<style scoped>
.content {
  color: cadetblue;
}
</style>