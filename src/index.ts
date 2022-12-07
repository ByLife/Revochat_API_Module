import Routes from "./routers/"
import { DB_Manager } from "./database/"

export  var RevoAPI = {
    routes: {
        init: Routes
    },
    database: {
        init: new DB_Manager()
    }
}


