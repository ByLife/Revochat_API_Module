import { Route, Routes } from "./interfaces.routers"
import { response } from "./response.routers"

const Err404: Route = {
    path: "*",
    response: response.Error404
}

export const routes: Route[] = [
    Err404
]
