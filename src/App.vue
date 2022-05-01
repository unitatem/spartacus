<template>
  <h1>TEST</h1>
  <NavBar @selected='onNavBarSelected' />
  <Table :records="theDatabase.get('players')" v-if="theShowSection['players']" />
  <Table :records="theDatabase.get('teams')" v-if="theShowSection['teams']" />
  <Table :records="theDatabase.get('games')" v-if="theShowSection['games']" />
  <h1>END</h1>
</template>

<script>
import Database from './backend/Database.js'
import NavBar from './components/NavBar.vue'
import Table from './components/Table.vue'

export default {
  components: {
    NavBar,
    Table
  },
  data() {
    return {
      theDatabase: new Database(),
      theShowSection: { players: true }
    }
  },
  methods: {
    onNavBarSelected(aField) {
      this.theShowSection = {}
      this.theShowSection[aField] = true
    }
  }
}
</script>

<style>
</style>
