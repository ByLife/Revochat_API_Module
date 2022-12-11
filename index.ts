import API, { DB_Modal, Intercept, RevoAPI } from "./src";
import { ClientEvents } from "./src/client/client.emitter";
import { Routers } from "./src/routers/class.routers";

RevoAPI.routes.iterate(Intercept)

API.on("ready", (client: ClientEvents, routes: Routers, database: DB_Modal) => {
    client.logSuccess("API is ready!")
    console.log("danhzadh")
})

API.on("readyRoute", () => {
    console.log("readyRoute")
})

API.on("error", (error: Error | string) => {
    console.log(error)
})

API.on("loadRoute", (path: string) => {
    console.log(`[+] Loaded route: ${path}`)
})