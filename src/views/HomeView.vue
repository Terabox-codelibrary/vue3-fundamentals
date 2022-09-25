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

export default defineComponent({
  name: 'HomeView',
  components: {
    BusinessCard
  },
  data () {
    return {
      members: [
        {
          name: 'Ava',
          gender: 'female',
          department: 'Sales',
          position: 'Manager',
          tel: '123-456-7890'
        },
        {
          name: 'Ethan',
          gender: 'male',
          department: 'Research',
          position: 'Manager',
          tel: '123-456-7890'
        },
        {
          name: 'Lucas',
          gender: 'male',
          department: 'Research',
          position: 'Member',
          tel: '123-456-7890'
        }
      ]
    }
  }
})
</script>
