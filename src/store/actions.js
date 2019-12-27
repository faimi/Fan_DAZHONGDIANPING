import axios from 'axios'
import {
  GET_GROUPBUYING
} from './mutation-types.js'

export default {
    getGroupBuying({
        commit
      }) {
        axios.get('/api/GroupBuying').then(resp => {
          if (resp.data.errno === 0) {
            commit(GET_GROUPBUYING, resp.data.data)
          }
        })
      }
}
