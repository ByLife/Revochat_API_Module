import express from "express"
import {Routes, Route} from "./interfaces.routers"

class Routers {
    protected app: express.Express;
    protected routes: Route[];

    constructor(){
        this.app = express()
    }

    public initRoutes() {

    }



}