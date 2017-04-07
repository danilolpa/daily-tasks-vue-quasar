
<template>
  <div class="">
    <button type="button" class="circular primary raised button--add"
          @click="$refs.addTask.open()">
        <i>
          add
        </i>
    </button>

    <q-modal ref="addTask" class="minimized" :content-css="{padding: '20px'}">
      <textarea placeholder="Placeholder"></textarea>
      <button class="red" @click="$refs.addTask.close()">Close Me</button>
    </q-modal>
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

<style lang="styl" scoped>
  .button--add{
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    &:before{
      content: '';
      width: 100%;
      height: 70px;
      background: -moz-linear-gradient(bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
      background: -webkit-linear-gradient(bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
      background: linear-gradient(to top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
      position: fixed;
      bottom: 10px;
      left: 0;
      right: 0;
      z-index: -1;
    }
  }
</style>
