import axios from 'axios'
import types from '../mutation-types.js'

var state = {
  name: []
}

const getters = {
  name (state) {
    return state.name
  }
}

const actions = {
  getName ({
    commit,
    state
  }) {
    axios.get('/api/name').then(resp => {
      if (resp.data.errno === 0) {
        commit(types.GET_NAME, resp.data.data)
      }
    })
  }
}

const mutations = {
  [types.GET_NAME] (state, data) {
    state.name = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
