<template>
  <h1>TEST</h1>
  <NavBar @selected='onNavBarSelected' />
  <Table v-if="theShowSection['players']" />
  <h1>END</h1>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Table from './components/Table.vue'

export default {
  components: {
    NavBar,
    Table
  },
  data() {
    return {
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
