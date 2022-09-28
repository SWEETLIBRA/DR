<template>
  <v-container>
    <v-row>
      <v-col cols="2">#</v-col>
      <v-col cols="4">Date</v-col>
      <v-col cols="4">Category</v-col>
      <v-col cols="2">Value</v-col>
    </v-row>
    <v-row v-for="({ value, category, date }, index) in paymentsList" :key="index">
      <v-col cols="2">{{ index + 1 }}</v-col>
      <v-col cols="4">{{ date }}</v-col>
      <v-col cols="4">{{ category }}</v-col>
      <v-col cols="2">{{ value }}</v-col>
    </v-row>
    <v-row>
      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        :total-visible="9"
        circle
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      />
    </v-row>
  </v-container>
  <!-- <div>
    <div v-for="(payment, index) in paymentsList" :key="index">
      {{ payment }}
    </div>
  </div> -->
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
  data () {
    return {
      currentPage: 1
    }
  },
  computed: {
    totalPages () {
      return 10
    }
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
