import Vue from "vue";
import { GET_NAME, GET_GROUPBUYING, GET_DIANPU } from "./mutation-types.js";
import { getName, getGroupBuying, getDianpu } from "./actions.js";

export default {
  [GET_NAME](state, data) {
    state.name = data;
  },
  [GET_GROUPBUYING](state, data) {
    state.GroupBuying = data;
  },
  [GET_DIANPU](state, data) {
    state.dianpu = data;
  }
};
