export enum Status {
    'success' = 'success',
    'error' = 'error',
    'warning' = 'warning',
    'info' = 'info',
    'failed' = 'failed'
}

type SuccessString<TEnum extends string> =
    { [key in string]: TEnum | string; }

export interface Route {
    path: string,
    response?: Function | null
    callback?: Function | null
}


export interface InterceptRoute {
    status: Status,
    message: string,
    data?: InterceptRoute_Channel | InterceptRoute_Connect | InterceptRoute_Error | InterceptRoute_Messages
}

export interface InterceptRoute_Connect {
    _from: string,
}

export interface InterceptRoute_Error {
    _from: string,
}

export interface InterceptRoute_Channel {
    _from: string,
    channel: string,
}

export interface InterceptRoute_Messages {
    _from: string,
    _to: string,
}

export interface Routes extends Array<Route>{}

export const RouteResponse = new class RouteResponse implements InterceptRoute {
    public status!: Status
    public message!: string
    public data?: InterceptRoute_Channel | InterceptRoute_Connect | InterceptRoute_Error | InterceptRoute_Messages
    setStatus(status: Status): this {
        this.status = status
        return this
    }
    setMessage(message: string): this {
        this.message = message
        return this
    }
    setData(data: InterceptRoute_Channel | InterceptRoute_Connect | InterceptRoute_Error | InterceptRoute_Messages): this {
        this.data = data
        return this
    }
}