import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import city from './modules/city'
import classificationArea from './modules/classificationArea'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    city,
    classificationArea,
  }
})
