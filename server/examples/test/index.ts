import * as path from 'path';
import * as express from 'express';
import { createServer } from 'http';
import { Server } from 'colyseus';

// Require ChatRoom handler
import { ChatRoom } from "./rooms/01-basic";
import { Hub } from "./rooms/hub";

const port = Number(process.env.PORT || 2657);
const app = express();

// Create HTTP Server
const httpServer = createServer(app);

// Attach WebSocket Server on HTTP Server.
const gameServer = new Server({ server: httpServer });

// Register ChatRoom as "chat"
gameServer.register("chat", ChatRoom);
gameServer.register("hub", Hub);


gameServer.listen(port);

console.log(`Listening on http://localhost:${ port }`);
