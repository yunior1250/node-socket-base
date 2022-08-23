const express = require('express');
const cors = require('cors');
const { socketcontroller } = require('../sockets/controller');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        this.paths = {}
        //Middlewares
        this.middlewares();
        //rutas de mi aplicaion
        this.routes();
        //Sockets
        this.sockets();
    }
    middlewares() {
        // CORS
        this.app.use(cors());

        //Directorio Publico
        this.app.use(express.static('public'));
    }
    routes() {
        // this.app.use(this.paths.auth, require('../routes/auth'));
    }
    sockets() {
        this.io.on('connection',socketcontroller)


    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo enpuerto ', this.port)
        });
    }
}

module.exports = Server;
