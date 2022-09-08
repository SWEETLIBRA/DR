<template>
  <div>
    <div>
      <input type="text" placeholder="Amount" v-model="value">
      <select v-model="category">
        <option
          v-for="category of categoryList"
          :value="category"
          :key="category"
          >
          {{ category }}
        </option>
      </select>
      <input type="text" placeholder="Date" v-model="date">
      <button @click="addPayment">ADD NEW COST +</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  props: {
    categoryList: {
      type: Array
    }
  },
  data: () => ({
    value: '',
    category: '',
    date: ''
  }),
  methods: {
    addPayment () {
      const { value, category, date, currentDate } = this
      const data = { value, category, date: date || currentDate }
      this.$emit('add-payment', data)
    }
  },
  computed: {
    currentDate () {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()
      return `${day}.${month}.${year}`
    }
  }
}
</script>

<style scoped>

</style>
