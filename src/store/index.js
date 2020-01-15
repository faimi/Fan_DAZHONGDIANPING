import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import name from './modules/name'
import city from './modules/city'
import classificationArea from './modules/classificationArea'
import restaurant from './modules/restaurant'
import KTV from './modules/ktv'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    name,
    city,
    classificationArea,
    restaurant,
    KTV
  }
})
