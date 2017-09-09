export class StateHandler {
  players: any
  map: any
  constructor () {
    this.players = {}
    this.map = {}
  }

  addPlayer (client) {
    console.log('added player')
  }

  removePlayer (client) {
    console.log('removed player')
  }

  toJSON () {
    return {
      players: this.players,
      map: this.map
    }
  }
}
