<template>
  <a-card bordered hoverable style="width: 360px" @click="handleClick(name)">
    <a-avatar size="large" :src="getAvatarUrl()"></a-avatar>
    <a-typography>
      <h4>{{ name }}</h4>
      <h5>{{ department }} {{ position }}</h5>
      <h5>Tel. {{ tel }}</h5>
    </a-typography>
  </a-card>
</template>

<script>
import { message } from 'ant-design-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BusinessCard',
  props: {
    name: {
      type: String
    },
    gender: {
      type: String
    },
    department: {
      type: String
    },
    position: {
      type: String
    },
    tel: {
      type: String
    }
  },
  methods: {
    getAvatarUrl () {
      return `https://joeschmoe.io/api/v1/${this.gender}/${this.name}`
    },
    handleClick (name) {
      message.info(`You clicked ${name}`)
    }
  }
})
</script>
