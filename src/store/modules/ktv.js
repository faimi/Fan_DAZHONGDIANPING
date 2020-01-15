import axios from 'axios'
import types from '../mutation-types.js'
var state = {
  KTV: []
}
const actions = {
  getKtv({
    commit,
    state
  }) {
    axios.get('/api/KTV').then(resp => {
      if (resp.data.errno === 0) {
        commit(types.GET_KTV, resp.data.data)
      }
    })
  }
}
const mutations = {
  [types.GET_KTV](state, data) {
    state.KTV = data
  }
}
export default {
  state,
  actions,
  mutations
}
