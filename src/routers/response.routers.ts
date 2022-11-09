import express from "express"

function Error404 (response: express.Response | null): void {
    response == null ? new Error("Unauthorized function manipulation") : 
    response.send("Not found :(")
}



export const response = {
    Error404: Error404
}
