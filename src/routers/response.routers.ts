import express from "express"



export const Intercept = { // Intercept the requests and responses and route them to the right function
    path: "/api",
    Users: {
        path: "/client",
        Connect: {
            path:"/connect/:publicAddress",
            res: (req: express.Request, res: express.Response) : void => {
                res.json({
                    status: "success",
                    message: `You are connect as ID: ${req.params.publicAddress}`
                })
            }
        },
        Channel: {
            path: "/channel/:token",
            res: (req: express.Request, res: express.Response): void => {
                res.json({
                    status: "success",
                    message: `You are connect as ID: ${req.params.token}`
                })
            }
        },
        Errors : {
            path: "*",
            E404: {
                path: "",
                res: (_: any, response: express.Response | null): void => {
                    response == null ? new Error("Unauthorized function manipulation") : 
                    response.json({
                        status: "Error",
                        message: "Not found"
                    })
                }
            }
        },
    }

}
