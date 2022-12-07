export interface Route {
    path: string,
    response?: Function | null
    callback?: Function | null
}

export interface Routes extends Array<Route>{}