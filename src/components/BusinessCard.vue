<template>
  <a-card hoverable style="width: 480px; height: 240px;">
    <a-avatar src="https://joeschmoe.io/api/v1/male/张三"></a-avatar>
    <a-typography>
      <h4>张三</h4>
      <h5>系统开发部 部长</h5>
      <h5>Tel. 090-1234-5678</h5>
    </a-typography>
  </a-card>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BusinessCard'
})
</script>

<style scoped>

</style>
