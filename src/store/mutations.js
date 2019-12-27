import Vue from 'vue'
import {
  GET_GROUPBUYING
} from './mutation-types.js'
import {
  getGroupBuying
} from './actions.js'

export default {
  [GET_GROUPBUYING](state,data) {
    state.GroupBuying =data
  }
}
