
<template>
  <div class="wrapper__addTask">
    <div class="footer">
      <button type="button" class="circular primary raised button--add"
            @click="$refs.addTask.open()">
          <i>add</i>
      </button>
    </div>

    <q-modal ref="addTask" class="minimized modal__addTask">
      <div class="row text-center">
        <q-datetime
          v-model="newTask.time"
          type="time"
        ></q-datetime>
      </div>
      <div class="row--nopadding">
        <textarea placeholder="O que deseja anotar?" class="task__detail full-width" v-model="newTask.description"></textarea>
      </div>
      <div class="row toogle">
        <label>
          Essa tarefa é urgente?
            <q-toggle v-model="newTask.isUrgent"></q-toggle>
        </label>
      </div>
      <div class="buttons">
        <button class="primary Raised" @click="addTask()">Add</button>
        <button class="red outline" @click="$refs.addTask.close()">Close Me</button>
      </div>
    </q-modal>
  </div>
</template>

<script>
  import moment from 'moment'
  import { Toast, Utils } from 'quasar'

  export default {
    data () {
      return {
        taskList: [],
        newTask: {
          id: '',
          isUrgent: false,
          isFinished: false,
          time: moment().format(),
          description: ''
        }
      }
    },
    props: [],
    computed: {},
    methods: {
      addTask () {
        const newTask = JSON.parse(JSON.stringify(this.newTask))
        newTask.id = Utils.uid()
        this.$store.commit('ADD_TASK', newTask)
        this.resetAndClose()
      },
      resetAndClose () {
        this.$refs.addTask.close()
        this.newTask.description = ''
        this.newTask.time = moment().format()
        Toast.create(`Você adicionou uma tarefa`)
      }
    }
  }
</script>

<style lang="styl" scoped>
  .modal__addTask{
    .buttons{

    }
    .row{
      padding: 0 30px 0;
      margin: 15px;
      &--nopadding{
        padding: 0 0 0;
      }
    }

    .task__detail{
      font-size: 18px;
      padding: 20px;
      min-height: 100px
      background: #f5f7fa;
      resize: none;
      border: 0;
      line-height: 24px;
      color: #474d66;
    }
  }
  .footer{
    &:after{
      position: fixed;
      content: '';
      width: 100%;
      height: 70px;
      background: -moz-linear-gradient(bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
      background: -webkit-linear-gradient(bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
      background: linear-gradient(to top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
    }
    .button--add{
      position: fixed;
      bottom: 20px;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 1;
      i{
        font-size: 40px;
      }
    }
  }
</style>
