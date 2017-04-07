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
          Hoje
        </q-toolbar-title>
    </div>
      <div class="layout-view"><cards-list></cards-list></div>

  </q-layout>
</template>

<script>
import CardsList from './CardsList'

export default {
  data () {
    return {
      search: ''
    }
  },
  components: {
    CardsList
  }
}
</script>

<style scoped>

</style>
