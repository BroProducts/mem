import { Room } from "colyseus";

export class Hub extends Room {

    //When room is initialized
    onInit (options) {
        this.setState({ messages: [] });
        console.log("Hub created!", options);
    }

    //When a client joins the room
    onJoin (client) {
        this.state.messages.push(`${ client.id } joined hub.`);
        console.log(this.state);
    }

    //When a client leaves the room
    onLeave (client) {
        this.state.messages.push(`${ client.id } left hub.`);
        console.log(this.state);
    }

    //When a client send a message
    onMessage (client, data) {
        this.state.messages.push(data.message);
        console.log("ChatRoom:", client.id, data);
    }

    //Cleanup callback, called after there are no more clients on the room
    onDispose () {
        console.log("Dispose ChatRoom");
    }

}
