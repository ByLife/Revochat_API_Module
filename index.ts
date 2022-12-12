import Client, { ClientEvents, RouterInterface, DatabaseInterface} from "./src";

Client.on("ready", (routes: RouterInterface, database: DatabaseInterface) => {
    routes.reload()
})

Client.on("error", (error: Error | string) => {
    console.log(error)
})

Client.on("connect", (client: ClientEvents) => {
    console.log("connect")
})