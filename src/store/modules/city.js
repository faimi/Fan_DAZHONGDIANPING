import axios from 'axios'
import types from '../mutation-types.js'

var state = {
  city: [],
  // cityShow:false
}

const getters = {
  city(state) {
    return state.city
  },
  // cityShow(state){
    // return state.cityShow
  // }
}

const actions = {
  getCity({
    commit,
    state
  }) {
    axios.get('/api/city').then(resp => {
      if (resp.data.errno === 0) {
        commit(types.GET_CITY, resp.data.data)
      }
    });
  },
  // showCity({commit}){
    // commit(types.SHOW_CITY);
  // },
  // hidenCity({commit}){
    // commit(types.HIDEN_CITY);
  // }
}

const mutations = {
  [types.GET_CITY](state, data) {
    state.city = data;
  },
  // [types.SHOW_CITY](state){
    // state.cityShow=true;
  // },
  // [types.HIDEN_CITY](state){
    // state.cityShow=false;
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}
