import Vue from 'vue'
import Vuex from 'vuex'
import { addTaskToStorage, updateTaskFromStorage, removeTaskFromStorage } from '../persistence'

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
    },
    UPDATE_TASK (state, index) {
      let status = state.Task.list[index].isFinished
      state.Task.list[index].isFinished = !status
      updateTaskFromStorage(index, state.Task.list[index])
    },
    REMOVE_TASK (state, index) {
      removeTaskFromStorage(state.Task.list[index])
      Vue.delete(state.Task.list, index)
    }
  },
  getters: {
    doneTasks: state => {
      return state.Task.list.filter(todo => todo.isFinished)
    },
    tasksListCount: state => {
      return state.Task.list.length
    },
    doneTasksCount: (state, getters) => {
      return getters.doneTasks.length
    },
    percentageTasks: (state, getters) => {
      let percentage = 100 / getters.tasksListCount * getters.doneTasksCount
      return percentage
    }
  }
})
