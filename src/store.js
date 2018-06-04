import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    field1: [],
    field2: []
  },
  actions: {
    save (state, msg) {
      state.commit('saveToState', msg)
    }
  },
  mutations: {
    saveToState (state, msg) {
      state.field1.push(msg.field1)
      state.field2.push(msg.field2)
    }
  }
})
