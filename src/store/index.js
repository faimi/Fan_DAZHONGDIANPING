import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import name from './modules/name'
import dianpu from './modules/dianpu'
import city from './modules/city'
import classificationArea from './modules/classificationArea'
Vue.use(Vuex)
export default new Vuex.Store({
  getters,
  actions,
  modules: {
    name,
    dianpu,
    city,
    classificationArea
  }
})
