import express from "express"
import { Intercept } from "./response.routers";
import chalk from "chalk"
import { Server } from "http"

import Emitter from "../client/client.emitter"

export class Routers  {
    protected app: express.Express;
    protected port: number;
    protected server: Server;

    constructor(){
        this.port = 3000
        this.app = express()
        this.start()
        this.server = this.app.listen(this.port, () => { console.log("Server is running") })
        console.log(chalk.green(`[+] Server is running on port ${this.port}`))
    }

    iterate = (obj: any, path: string = ""): void => {
        Object.keys(obj).forEach(key => {
            if(key === "path") path += obj[key]

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                this.iterate(obj[key], path)
            } else if (typeof obj[key] === 'function'){ 
                if(path.includes("*")) path = "*"
                this.app.get(path, obj[key]) , Emitter.emit("loadRoute", `${path}`, obj[key])
            }
        })
    }

    public start() {
        this.iterate(Intercept)
        Emitter.emit("readyRoute", this)
    }

    public reload(){
        this.server.close()
        this.start()
    }

    public stop(){
        this.server.close()
    }
}