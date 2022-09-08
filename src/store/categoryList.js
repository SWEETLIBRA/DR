export default {
  state: {
    categoryList: []
  },
  mutations: {
    SET_CATEGORY_LIST (state, categoryList) {
      state.categoryList = categoryList
    }
  },
  getters: {
    categoryList: ({ categoryList }) => categoryList
  },
  actions: {
    fetchCategoryData ({ commit }) {
      const categoryList = ['Food', 'Transport', 'Education', 'Sport', 'Traveling']
      commit('SET_CATEGORY_LIST', categoryList)
    }
  }
}
