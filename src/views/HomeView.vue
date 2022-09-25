<template>
  <a-row justify="space-around">
    <a-col v-for="member in members" :key="member.name">
      <BusinessCard
        :name="member.name"
        :gender="member.gender"
        :department="member.department"
        :position="member.position"
        :tel="member.tel"
      />
    </a-col>
  </a-row>
</template>

<script>
import BusinessCard from '@/components/BusinessCard'
import { defineComponent } from 'vue'
import api from '@/api'

export default defineComponent({
  name: 'HomeView',
  components: {
    BusinessCard
  },
  data () {
    return {
      members: []
    }
  },
  async mounted () {
    const memberResp = await api.memberApi.getMemberList()
    this.members = JSON.parse(memberResp.data.data)
  }
})
</script>
