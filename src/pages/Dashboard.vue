<template>
  <v-container>
    <v-row>
      <div class="text-h5 text-sm-h3">My personal costs: {{ totalCost }}</div>
    </v-row>
    <v-row>
      <v-col>
        <v-dialog v-model="showModal">
          <template v-slot:activator="{ on }">
            <v-btn
              color="green"
              v-on="on"
              @click="showModal= !showModal"
            >
              Add new cost
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <add-payment-form/>
          </v-card>
        </v-dialog>
        <div>
          <PaymentsDisplay :paymentsList="paymentsList" show/>
        </div>
      </v-col>
      <v-col>Graph</v-col>
    </v-row>
  </v-container>
  <!-- <div>
    <div class="header">My personal costs: {{ totalCost }}</div>
    <PaymentsDisplay
      :paymentsList="paymentsList"
      show
    />
    <button @click="addPayment">Add Payment</button>
    <button @click="authModal">Auth</button> -->
    <!-- <button @click="addPaymentModal">Add Payment</button>
    <button @click="authModal">Auth</button> -->
    <!-- <ModalWindowAddPayment
      v-if="showModal"
      @closeModal="closeModal"
      :settings="modalsettings"
    /> -->
  <!-- </div> -->
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay'
import { mapActions, mapMutations, mapGetters } from 'vuex'
import AddPaymentForm from '@/components/AddPaymentForm.vue'

export default {
  name: 'Dashboard',
  data: () => ({
    showModal: false,
    modalsettings: {}
  }),
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  computed: {
    ...mapGetters(['paymentsList', 'totalCost'])
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData']),
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment () {
      this.$modal.show({ title: 'Add new payment', content: 'addPaymentForm' })
    },
    authModal () {
      this.$modal.show({ title: 'Auth', content: 'auth' })
    }
  },
  created () {
    this.fetchCategoryData()
    this.fetchData()
  },
  mounted () {
    if (this.$route.params.payment) this.addPayment()
  }
}
</script>

<style scoped>

</style>
