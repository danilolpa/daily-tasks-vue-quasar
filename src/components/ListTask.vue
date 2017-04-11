
<template>
  <div class="layout-padding">
    <div class="card" v-for="item in list" @click="taskFinish()" :key="item">
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
  export default {
    data () {},
    props: [],
    computed: {
      list () {
        return this.$store.state.Task.list
      }
    },
    methods: {
      taskFinish () {
        console.log('AEe')
      }
    }
  }
</script>
<style lang="styl">
  .layout-padding
    padding 30px 20px 70px
    .card
      background #fff
      box-shadow rgba(0, 0, 0, 0.1) 0px 0px 15px 1px
      .text
        &--task
          font-size 15px
          line-height 20px
          color #606e8a
</style>
