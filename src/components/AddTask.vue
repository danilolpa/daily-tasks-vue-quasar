
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
          v-model="time"
          type="time"
        ></q-datetime>
      </div>
      <div class="row--nopadding">
        <textarea placeholder="O que deseja anotar?" class="task__detail full-width"  ></textarea>
      </div>
      <div class="row text-center">
        <label>
          Essa tarefa é urgente?
          <q-toggle
            v-model="checked"
          ></q-toggle>
        </label>
      </div>
      <div class="buttons">
        <button class="primary Raised" @click="$refs.addTask.close()">Add</button>
        <button class="red outline" @click="$refs.addTask.close()">Close Me</button>
      </div>
    </q-modal>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    data () {
      return {
        checked: false,
        time: moment().format()
      }
    },
    props: [],
    computed: {},
    methods: {}
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
    }
  }
</style>
