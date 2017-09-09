export class StateHandler {
  players: any
  map: any
  counter: number
  constructor () {
    this.players = {}
    this.map = {}
    this.counter = 0
  }

  addPlayer (client) {
    console.log('added player')
  }

  removePlayer (client) {
    console.log('removed player')
  }

  increaseCounter () {
    this.counter++
  }

  toJSON () {
    return {
      players: this.players,
      map: this.map,
      counter: this.counter
    }
  }
}
