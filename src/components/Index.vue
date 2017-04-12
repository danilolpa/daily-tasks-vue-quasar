<template>
  <q-layout>
    <div slot="header" class="toolbar tertiary">
      <q-toolbar-title :padding="10">
        <i class="on-left">
          done_all
        </i>
        Tarefas do Dia
      </q-toolbar-title>
    </div>
    <div slot="header" class="toolbar tertiary">
        <q-toolbar-title>
          <div class="">
            <span class="on-left"> {{tasksListCount}} tarefas</span>
            <span class="on-right">{{doneTasksCount}} Resolvidas</span>
          </div>
        </q-toolbar-title>
        <q-progress :percentage="percentageTasks" class="progress"></q-progress>
    </div>
    <div class="layout-view">
      <list-task></list-task>
      <add-task></add-task>
    </div>
  </q-layout>
</template>

<script>
import ListTask from './ListTask'
import AddTask from './AddTask'
import { getTaskFromStorage } from '../persistence'

export default {
  data () {
    return {
      search: ''
    }
  },
  mounted () {
    this.$store.commit('SET_TASK', getTaskFromStorage())
  },
  computed: {
    doneTasksCount () {
      return this.$store.getters.doneTasksCount
    },
    tasksListCount () {
      return this.$store.getters.tasksListCount
    },
    percentageTasks () {
      return this.$store.getters.percentageTasks
    }
  },
  components: {
    ListTask,
    AddTask
  }
}
</script>

<style lang="styl">
  .progress{
    position: absolute;
    left: 0;
    right: 0;
    bottom: -16px;
    border: none;
    border-radius: 0;
    height: 4px;
    background: #314161;
      .q-progress-model{
        border-radius: 0 !important;
        background: -moz-linear-gradient(left, #ffe565 0%, #ff661a 100%) !important;
        background: -webkit-linear-gradient(left, #ffe565 0%,#ff661a 100%) !important;
        background: linear-gradient(to right, #ffe565 0%,#ff661a 100%) !important;
      }
  }
</style>
