import Vue from 'vue'
import {
  GET_GROUPBUYING,GET_DIANPU
} from './mutation-types.js'
import {
  getGroupBuying,getDianpu
} from './actions.js'

export default {
  [GET_GROUPBUYING](state,data) {
    state.GroupBuying =data
  },
  [GET_DIANPU](state, data) {
    state.dianpu = data
  }
}
