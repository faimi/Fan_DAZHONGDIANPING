import axios from 'axios'
import types from '../mutation-types.js'

var state = {
  dianpu: []
}
const getters = {
  dianpu(state) {
    return state.dianpu
  }
}
const actions = {
  getDianpu({
    commit,
    state
  }) {
    axios.get('api/dianpu').then(resp => {
      if (resp.data.errno === 0) {
        commit(types.GET_DIANPU, resp.data.data)
      }
    })
  }
}
const mutations = {
  [types.GET_DIANPU](state, data) {
    state.dianpu = data
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
