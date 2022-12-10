import express from "express"
import { Intercept } from "./response.routers";

export class Routers {
    protected app: express.Express;

    constructor(){
        this.app = express()
    }

    iterate = (obj: any, path: string = "") => {
        Object.keys(obj).forEach(key => {
            if(key === "path") path += obj[key]

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                    this.iterate(obj[key], path)
            } else if (typeof obj[key] === 'function'){ 
                if(path.includes("*")) this.app.get("*", obj[key])
                else this.app.get(path, obj[key])
            }
        })
    }

    public initRoutes() {
        var arr: Array<Function> = []
        var path: string = ""
        this.iterate(Intercept)
        this.app.listen(3000, () => {
            console.log("Server is running on port 3000")
        })  
    }

}