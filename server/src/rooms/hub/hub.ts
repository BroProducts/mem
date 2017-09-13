import { Room } from 'colyseus';
import { StateHandler } from './stateHandler'

export class Hub extends Room {

    maxClients = 100;

    //When room is initialized
    onInit (options) {
        this.setState(new StateHandler)
        this.setPatchRate( 1000 / 20 );
        this.setSimulationInterval( this.update.bind(this) );

        console.log("Hub created!", options);
    }

    //When a client try to joins the room
    //If true client joins the room
    requestJoin(options) {
      //TODO: If a user from friendlist is in the room u can still join(only in the Hub)
      return this.clients.length < this.maxClients
    }

    //When a client joins the room
    onJoin (client) {
        console.log(`${ client.id } joined hub.`)
    }

    //When a client leaves the room
    onLeave (client) {
        console.log(`${ client.id } left hub.`)
    }

    //When a client send a message
    onMessage (client, data) {
        console.log("ChatRoom:", client.id, data)
    }

    //Cleanup callback, called after there are no more clients on the room
    onDispose () {
        console.log("Dispose ChatRoom")
    }

    update () {
      this.state.increaseCounter()
      console.log(this.state)
      console.log('lol')
    }



}
