/**
 * Created by win10 on 2017/11/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  token: null,
  activeName: 'first',
  username: ''
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
