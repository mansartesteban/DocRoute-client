import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myCount: 0
  },
  mutations: {
    toto(state) {
      state.myCount++
    }
  },
  actions: {
  },
  modules: {
  }
})
