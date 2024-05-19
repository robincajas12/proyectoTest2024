import express from 'express';
import homeRouter from './controllers/homeController.js';
import testRouter from './controllers/testController.js';
import profileRouter from './controllers/profileController.js';
import {Server  as ServerIO} from 'socket.io';
import http from  'http';
import { Server } from 'http';

function main({PORT}) : void
{
    const app = express();
    const server : Server = http.createServer(app);
    const io : ServerIO = new ServerIO(server);
    app.set('view engine', 'ejs');
    app.set('PORT', PORT)
    app.use(express.urlencoded({extended:true}))
    app.use(express.static('src/public'))
    app.use(homeRouter);
    app.use(testRouter);
    app.use(profileRouter);
    server.listen(app.get('PORT'), () : void =>{
        console.log("App running in port: ", app.get('PORT'));
    });  
}

const PORT = process.env.ENVIROMENT === 'development' ? process.env.PORT : 3000;
main({PORT:PORT});
