import { User, UserInterface } from "./client/index";

var API = {
    client : {
        newUser(id: number, nonce: number, publicAddress: string, username: string): UserInterface {
            return new User({ id, nonce, publicAddress, username });
        }
    },
}