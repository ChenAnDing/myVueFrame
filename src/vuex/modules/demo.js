import {SET_DEMO} from '../mutation-types'

const state = {
  count: 0
}

const mutations = {
  [SET_DEMO](state, val) {
    state.count = val
  }
}

const actions = {
  getCountData({ dispatch, commit, state }) {
    setTimeout(() => {
      commit('SET_DEMO', 20)
    }, 1000);
  }
}

export default {
  state,
  mutations,
  actions
}
