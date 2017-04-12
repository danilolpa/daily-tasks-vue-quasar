
<template>
  <div class="layout-padding">
    <div class="noTask" v-if="list.length === 0">
      <img src="../statics/not-has-task.jpg" style="height: 240px" alt="">
      <h5>Hoje não tem tarefas</h5>
      <p>Não há nada que precisa fazer hoje?</p>
    </div>
    <div class="card" :class="{ 'card--finished': item.isFinished }" v-for="(item, index) in list" v-touch.preventDefault @swipeleft="removeTask(index)" @tap="taskFinish(index)" :id="index" :key="item">
      <div class="card-title text-tertiary">
        <i class="on-left text-primary">
          fiber_manual_record
        </i>
        <span class="on-left">Tarefa normal</span>
        <span class="on-right">{{item.time}}</span>
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
  import { Toast } from 'quasar'

  export default {
    data () {
      return {
        //
      }
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
      removeTask (index) {
        Toast.create(`Você removeu uma tarefa`)
        this.$store.commit('REMOVE_TASK', index)
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
      .text{
        &--task{
          font-size 15px
          line-height 20px
          color #606e8a
        }
      }
      &.card--finished{
        opacity: .5
      }
    }
  }
</style>
