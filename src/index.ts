import RevoDB from "./database/"
import Client from "./client/client.emitter"
import { Routers } from "./routers/class.routers"


export * from "./database/"
export * from "./routers/"
export * from "./config/"

export default Client

export var RevoAPI = {
    client: Client,
    routes: new Routers(),
    database: RevoDB
}

Client.emit("ready", RevoAPI)

