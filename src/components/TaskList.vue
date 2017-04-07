
<template>
  <div class="layout-padding">
    <div class="card" v-for="elem in [1,2,3,4]" @click="taskFinish()" :key="elem">
      <div class="card-title text-tertiary">
        <i class="on-left text-primary">
          fiber_manual_record
        </i>
        <span class="on-left">General Event</span>
        <span class="on-right">16:30</span>
      </div>
      <div class="card-content card-force-top-padding">
        <span class="text--task">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: [],
    computed: {},
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
