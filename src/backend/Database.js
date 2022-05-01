export default class Database {
  get(key) {
    if (key == 'players')
      return this.getPlayers()

    console.log("Unsupported key provided='" + key + "'")
    return null
  }

  getPlayers() {
    return {
      metadata: [
        "Ranking",
        "Name",
        "Elo"
      ],
      data: [
        { ranking: 1, name: "Alice", elo: 2000 },
        { ranking: 2, name: "Bob", elo: 1500 },
        { ranking: 3, name: "Charlie", elo: 1000 }
      ]
    }
  }
}
