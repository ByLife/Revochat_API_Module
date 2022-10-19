import express from 'express';
 
export function init(){
    const app = express();
    
    app.get('/api', (request, response) => {
    response.send('documentation goes here');
    });

    app.get('/client/messages/:id', (request, response) => {
    response.send('Hello users!' + request.params.id);
    });

    app.get('/client/auth/:publicAddress', (request, response) => {
    response.send('log in here'+ request.params.publicAddress);
    });

    app.listen(3000)
}