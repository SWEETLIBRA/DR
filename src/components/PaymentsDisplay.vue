<template>
  <div>
    <div v-for="(payment, index) in paymentsList" :key="index">
      {{ payment }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentsDisplay',
  props: {
    paymentsList: {
      type: Array
    },
    show: Boolean
  },
  mounted () {
    this.paymentsList.forEach((i) => {
      console.log(i)
    })
  }
}
</script>

<style scoped>

</style>
