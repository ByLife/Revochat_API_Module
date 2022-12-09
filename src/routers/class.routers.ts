import express from "express"
import { Intercept } from "./response.routers";

export class Routers {
    protected app: express.Express;

    constructor(){
        this.app = express()
    }

    public getRoutesPath(route: any): any{
        for(const [key, value] of Object.entries(route)){
            if(key == "path") this.getRoutesPath(value)
            else return value
        }
    }

    public initRoutes() {
        console.log(this.getRoutesPath(Intercept));

    }

}