import Vue from 'vue'
import Vuex from 'vuex'
import { addTaskToStorage } from '../persistence'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Task: {
      list: []
    }
  },
  mutations: {
    ADD_TASK (state, obj) {
      addTaskToStorage(obj)
      state.Task.list.unshift(obj)
    },
    SET_TASK (state, obj) {
      state.Task.list = obj
    }
  }
})
