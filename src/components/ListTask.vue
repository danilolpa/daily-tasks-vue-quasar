
<template>
  <div class="layout-padding">
    <div class="noTask" v-if="list.length === 0">
      <img src="../statics/not-has-task.jpg" style="height: 240px" alt="">
      <h5>Hoje não tem tarefas</h5>
      <p>Não há nada que precisa fazer hoje?</p>
    </div>
    <div class="card" :class="{ 'card--finished': item.isFinished }" v-for="(item, index) in list" v-touch.preventDefault @swipeleft="askRemove(index)" @tap="taskFinish(index)" :id="index"
    :key="item">
      <div class="card-title text-tertiary">
        <div class="row">
          <div class="width-1of10">
            <i class="on-left" :class="colorCircle(item.time)">
              fiber_manual_record
            </i>
          </div>
          <div class="auto">
            <span class="on-left">{{typeTask(item.isUrgent)}}</span> <br>
            <small class="light-paragraph">{{dateTaskFormat(item.time)}}</small>
          </div>
        </div>
      </div>
      <div class="card-content card-force-top-padding">
        <span class="text--task">
          {{item.description}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast, Dialog } from 'quasar'
  import * as moment from 'moment'
  import 'moment/locale/pt-br'

  export default {
    data () {
      return { }
    },
    props: [],
    computed: {
      list () {
        return this.$store.state.Task.list
      }
    },
    methods: {
      taskFinish (index) {
        this.$store.commit('UPDATE_TASK', index)
      },
      askRemove (index) {
        const self = this
        Dialog.create({
          title: 'Cuidado!',
          message: 'Deseja excluir essa tarefa?',
          buttons: [
            {
              label: 'Cancelar'
            },
            {
              label: 'Confirmar',
              handler () {
                self.deleteTask(index)
              }
            }
          ]
        })
      },
      deleteTask (index) {
        Toast.create(`Você removeu uma tarefa`)
        this.$store.commit('REMOVE_TASK', index)
      },
      dateTaskFormat (date) {
        return moment(date).format('LLLL')
      },
      typeTask (priority) {
        return (priority === true) ? 'Tarefa Urgente' : 'Tarefa normal'
      },
      colorCircle (date) {
        let classColor = 'text-primary'
        let diff = moment.duration(moment().diff(date)).asMinutes()
        let isNegative = Math.sign(diff) === -1 || false
        classColor = isNegative && diff >= -60 ? 'text-secondary' : classColor
        classColor = !isNegative ? 'text-red' : classColor

        return classColor
      }
    }
  }
</script>
<style lang="styl">
  .layout-padding{
    padding 30px 20px 70px
    .noTask{
      text-align: center;
      h5, p{
        color: #7e94aa;
      }
    }
    .card{
      background #fff
      box-shadow rgba(0, 0, 0, 0.1) 0px 0px 15px 1px
      transition: 100ms
      position: relative
      .text{
        &--task{
          font-size 15px
          line-height 20px
          color #606e8a
        }
      }
      &.card--finished{
        opacity: .5;
        }
    }
  }
</style>
