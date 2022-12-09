import Routes from "./routers/"
import { DB_Modal } from "./database/"
import { Routers } from "./routers/class.routers"

export  var RevoAPI = {
    routes: {
        init: new Routers()
    },
    database: {
        init: new DB_Modal()
    }
}


