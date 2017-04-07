
<template>
  <div class="layout-padding">
    <div class="card" v-for="elem in [1,2,3,3,3,4,5,5,6,6,7,7]" :key="elem">
      <div class="card-title">
        Colored Card Title
      </div>
      <div class="card-content card-force-top-padding">
        Card Content
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
    methods: {}
  }
</script>

<style lang="styl">
  .layout-padding
    padding 30px 20px 10px
    .card
      background #fff
      box-shadow rgba(0, 0, 0, 0.1) 0px 0px 15px 1px
</style>
