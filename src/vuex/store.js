import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'


Vue.use(Vuex);//使用状态管理

export default new Vuex.Store({
    state,
    actions
})