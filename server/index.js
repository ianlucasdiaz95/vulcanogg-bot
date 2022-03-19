const express = require('express');
const cors = require('cors');
//const sequelize = require('../db/connections');
const CronService = require('../cron');
const cron = require('node-cron');

const InitTelegramBots = require('../bots');

require('dotenv').config();

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.basePath = '/api/base';

        // Conexión a la bae de datos
        //this.dbConnection();
        
        //Inicialización de cron
        this.crons();

        // Middlewares
        this.middlewares();

        // Bots
        this.bots();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        //Available origin requests
        var corsOptions = {
            origin: [],
            optionsSuccessStatus: 200 // For legacy browser support
        }

        // CORS
        this.app.use( cors(corsOptions) );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use( this.basePath, require('../routes/base.route'));
    }

    crons() {
        const enviroment = process.env.NODE_ENV || 'dev';
        // only run in prod
        if(enviroment == 'production'){
            cron.schedule('1 * * * * *', function() {
                new CronService();
            });
        }
    }

    bots() {

        new InitTelegramBots();

    }

    listen() {
        try {
            this.app.listen( this.port, () => {
                console.log('Servidor corriendo en puerto', this.port );
            });
        } catch (error) {
            console.log(error);
        }
            
        
    }

}

module.exports = Server;
