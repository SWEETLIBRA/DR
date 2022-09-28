export default {
  state: {
    paymentsList: []
  },
  mutations: {
    SET_PAYMENTS_LIST (state, paymentsList) {
      state.paymentsList = paymentsList
    },
    ADD_PAYMENT_DATA (state, payment) {
      state.paymentsList.push(payment)
    }
  },
  getters: {
    paymentsList: ({ paymentsList }) => paymentsList,
    totalCost: ({ paymentsList }) => paymentsList.reduce((total, { value }) => total + value, 0)
  },
  actions: {
    fetchData ({ commit }) {
      const initialPaymentsList = [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169
        },
        {
          date: '28.03.2020',
          category: 'Transport',
          value: 160
        },
        {
          date: '28.03.2020',
          category: 'Food',
          value: 162
        }
      ]
      commit('SET_PAYMENTS_LIST', initialPaymentsList)
    }
  }
}
