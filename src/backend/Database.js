export default class Database {
  get(key) {
    if (key == 'players')
      return this.getPlayers()
    if (key == 'teams')
      return this.getTeams()
    if (key == 'games')
      return this.getGames()

    console.log("Unsupported key provided='" + key + "'")
    return null
  }

  getPlayers() {
    return {
      metadata: [
        { name: "Ranking", key: "ranking" },
        { name: "Name", key: "name" },
        { name: "Elo", key: "elo" }
      ],
      data: [
        { ranking: 1, name: "Alice", elo: 2000 },
        { ranking: 2, name: "Bob", elo: 1500 },
        { ranking: 3, name: "Charlie", elo: 1000 }
      ]
    }
  }

  getTeams() {
    return {
      metadata: [
        { name: "Ranking", key: "ranking" },
        { name: "Name", key: "name" },
        { name: "Elo", key: "elo" }
      ],
      data: [
        { ranking: 1, name: "Alice's Team", elo: 2200 },
        { ranking: 2, name: "Bob's Team", elo: 1700 },
        { ranking: 3, name: "Charlie's Team", elo: 1200 }
      ]
    }
  }

  getGames() {
    return {
      metadata: [
        { name: "TeamA", key: "teamA" },
        { name: "TeamB", key: "teamB" },
        { name: "Score", key: "score" }
      ],
      data: [
        { teamA: "A", teamB: "B", score: "10:8" },
        { teamA: "A", teamB: "C", score: "10:6" },
        { teamA: "B", teamB: "C", score: "4:10" }
      ]
    }
  }
}
