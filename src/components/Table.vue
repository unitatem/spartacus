<template>
  <table>
    <tr>
      <th v-for="column in records.metadata">{{ column.name }}</th>
    </tr>
    <tr v-for="record in records.data">
      <td v-for="column in records.metadata">{{ record[column.key] }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ['records']
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
