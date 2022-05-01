<template>
  <div class="nav-bar">
    <div v-for="(field, idx) in theFields" :class="{ 'active-field': idx == theActiveFieldIdx }"
      @click="setActiveField(idx)">
      {{ field.display }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theFields: [
        { key: 'players', display: 'Players' },
        { key: 'teams', display: 'Teams' },
        { key: 'about', display: 'About' }],
      theActiveFieldIdx: 0
    }
  },
  methods: {
    setActiveField(aNewIdx) {
      console.log(aNewIdx)
      this.theActiveFieldIdx = aNewIdx
    }
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: #333;
  overflow: hidden;
  text-align: center;
}

.nav-bar div {
  display: inline-block;
  padding: 14px 16px;

  color: #f2f2f2;
  text-decoration: none;
  font-size: 17px;
}

.nav-bar div:hover {
  background-color: #ddd;
  color: black;
}

.nav-bar div.active-field {
  background-color: #04AA6D;
  color: white;
}
</style>