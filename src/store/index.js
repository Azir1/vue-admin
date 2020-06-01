import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu_collapse: false
  },
  mutations: {
    changeMenuStatus(state) {
      state.menu_collapse = !state.menu_collapse
    }
  },
  actions: {
  },
  modules: {
  }
})
