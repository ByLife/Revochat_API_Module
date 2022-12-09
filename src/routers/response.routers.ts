import express from "express"



export const Intercept = { // Intercept the requests and responses and route them to the right function
    path: "/api",
    Errors : {
        path: "/*",
        E404: {
            path: "",
            res: (response: express.Response | null): void => {
                response == null ? new Error("Unauthorized function manipulation") : 
                response.json({
                    status: "Error",
                    message: "Not found"
                })
            }
        }
    },
    Users: {
        path: "/client",
        Connect: {
            path:"/connect",
            res: () : void => {
                
            }
        },
        Channel: {
            path: "/channel",
            res: (req: express.Request, res: express.Response): void => {
                res.json({
                    status: "success",
                    message: `You are connect as ID: ${req.params.token}`
                })
            }
        }
    }

}
