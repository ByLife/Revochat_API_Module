import express from "express"
import Emitter from "../client/client.emitter"


export const Intercept = { // Intercept the requests and responses and route them to the right function
    path: "/api",

    // CLIENT SIDE ROUTES

    Users: {
        path: "/client",

        // PUBLIC ADDRESS IS THE PUBLIC ADDRESS OF THE USER THAT YOU ARE CONNECTING TO WITH METAMASK

        Connect: {
            path:"/connect/:publicAddress",
            res: (req: express.Request, res: express.Response) : void => {
                res.json({
                    status: "success",
                    message: `You are connect as ID: ${req.params.publicAddress}`
                })
            }
        },

        // CHANNEL IS THE PUBLIC ADDRESS OF THE USER THAT YOU ARE CONNECTING TO OR THE PUBLIC ADDRESS OF THE CHANNEL THAT YOU ARE CONNECTING TO

        Channel: {
            path: "/channel/:token",
            res: (req: express.Request, res: express.Response): void => {
                Emitter.emit("channel", req.params.token)
                res.json({
                    status: "success",
                    message: `You are connect as ID: ${req.params.token}`
                })
            }
        },

        // WE CAN'T SEE YOUR MESSAGES, WE CAN ONLY SEE THE PUBLIC ADDRESS OF THE USER THAT YOU ARE SENDING THE MESSAGE TO

        Messages : {                                                        
            path: "/messages",
            Send: {
                path: "/send/:token",
                res: (req: express.Request, res: express.Response): void => {
                    Emitter.emit("messages", req.params.token)
                    res.json({
                        status: "success",
                        message: `You are connect as ID: ${req.params.token}`
                    })
                },
            },
        },
    },

    // ERROR HANDLER OF WRONG ROUTES

    Errors : {
        path: "*",
        E404: {
            path: "",
            res: (req: express.Request, response: express.Response | null): void => {
                Emitter.emit("errors", req.header('x-forwarded-for') || req.connection.remoteAddress)
                response == null ? new Error("Unauthorized function manipulation") : 
                response.json({
                    status: "Error",
                    message: "Not found"
                })
            }
        }
    }
}
