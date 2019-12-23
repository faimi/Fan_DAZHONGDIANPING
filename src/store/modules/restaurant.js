import axios from 'axios'
import types from '../mutation-types.js'
var state = {
  Restaurant: []
}
const actions = {
  getRestaurant({
    commit,
    state
  }) {
    axios.get('/api/RestaurantList').then(resp => {
      if (resp.data.errno === 0) {
        commit(types.GET_RESTAURANT, resp.data.data)
      }
    })
  }
}
const mutations = {
  [types.GET_RESTAURANT](state, data) {
    state.Restaurant = data
  }
}
export default {
  state,
  actions,
  mutations
}
