<template>
  <table>
    <tr>
      <th>Ranking</th>
      <th>Name</th>
      <th>Elo</th>
    </tr>
    <tr v-for="player in players">
      <td>{{ player.ranking }}</td>
      <td>{{ player.name }}</td>
      <td>{{ player.elo }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      players: [
        { ranking: 1, name: "Alice", elo: 2000 },
        { ranking: 2, name: "Bob", elo: 1500 },
        { ranking: 3, name: "Charlie", elo: 1000 }
      ]
    }
  }
}
</script>

<style scoped>
table,
th,
td {
  border: 1px solid;
  border-collapse: collapse;
}

table {
  width: 80%;
}

th {
  background-color: #04AA6D;
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: coral;
}
</style>
