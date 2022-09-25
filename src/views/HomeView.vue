<template>
  <a-row justify="space-around">
    <a-col :span="4">
      <BusinessCard
        name="Alice"
        gender="female"
        department="Sales"
        position="Manager"
        tel="123-456-7890"
      />
    </a-col>
  </a-row>
</template>

<script>
import BusinessCard from '@/components/BusinessCard'

export default {
  name: 'HomeView',
  components: {
    BusinessCard
  }
}
</script>
