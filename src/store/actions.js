import axios from "axios";
import { GET_NAME, GET_GROUPBUYING, GET_DIANPU } from "./mutation-types.js";

export default {
  getName({ commit }) {
    axios.get("/api/name").then(resp => {
      if (resp.data.errno === 0) {
        commit(GET_NAME, resp.data.data);
      }
    });
  },
  getGroupBuying({ commit }) {
    axios.get("/api/GroupBuying").then(resp => {
      if (resp.data.errno === 0) {
        commit(GET_GROUPBUYING, resp.data.data);
      }
    });
  },
  getDianpu({ commit }) {
    axios.get("/api/dianpu").then(resp => {
      if (resp.data.errno === 0) {
        commit(GET_DIANPU, resp.data.data);
      }
    });
  }
};
