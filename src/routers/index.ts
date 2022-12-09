import express from 'express'; 
import { Routers } from './class.routers';
import {Intercept} from './response.routers';

exports = module.exports = new Routers();

export default () => {
    const app = express();
    
    app.get('/api', (request, response) => {
        response.json('documentation goes here');
    });

    app.get('/client/messages/:id', (request, response) => {
        response.json('Hello users!' + request.params.id);
    });

    app.get('/client/create-user/:name', (request, response) => {
        response.json('User created!' + request.params.name);
    });

    app.get('/client/auth/:publicAddress', (request, response) => {
        response.json('log in here'+ request.params.publicAddress);
    });

    app.get('/client/channel/:token', Intercept.Users.Channel.res) //récupérer le token de l'utilisateur & le token de la conversation 

    
    app.get('*', (Intercept.Errors.E404.res))

    app.listen(3000)
}
