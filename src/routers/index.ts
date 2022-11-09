import express from 'express'; 
import {response} from './response.routers';

export function init(){
    const app = express();
    
    app.get('/api', (request, response) => {
    response.json('documentation goes here');
    });

    app.get('/client/messages/:id', (request, response) => {
    response.json('Hello users!' + request.params.id);
    });

    app.get('/client/auth/:publicAddress', (request, response) => {
    response.json('log in here'+ request.params.publicAddress);
    });

    app.get('/client/channel/:token', (request, response) => {//récupérer le token de l'utilisateur & le token de la conversation 
        response.json('log in here'+ request.params.token);
    });
    
    app.get('*', function(req, res){
        response.Error404(res);
    });

    app.listen(3000)
}
