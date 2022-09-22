import Vue from 'vue'
import Vuex from 'vuex'
import categoryList from '@/store/categoryList'
import paymentsList from '@/store/paymentsList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
    addNewPayment ({ commit }, newPayment) {
      commit('ADD_PAYMENT_DATA', newPayment)
    }
  },
  modules: {
    categoryList, paymentsList
  }
})
