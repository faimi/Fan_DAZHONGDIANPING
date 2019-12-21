import axios from 'axios'
import types from '../mutation-types.js'

var state = {
  ClassifyArea: [],
}

const getters = {
  ClassifyArea(state) {
    return state.ClassifyArea
  },
}


const actions = {
  getClassifyArea({
    commit,
    state
  }) {
    axios.get('api/classificationArea').then(resp => {
      if (resp.data.errno === 0) {
        commit(types.GET_CLASSIFYAREA, resp.data.data);
      }
    })
  }
}

const mutations = {
  [types.GET_CLASSIFYAREA](state, data) {
    state.ClassifyArea = data
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
