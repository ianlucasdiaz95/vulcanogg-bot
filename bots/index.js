const botConfig = require('./botConfig');
const BotEN = require('./telegram/en.bot');
const BotES = require('./telegram/es.bot');
const BotPT = require('./telegram/pt.bot');

const BotTEST = require('./telegram/test.bot');

require('dotenv').config();

class InitBots {
    constructor() {

        if(process.env.NODE_ENV == 'production'){

            new BotEN(botConfig.en);
            new BotES(botConfig.es);
            new BotPT(botConfig.pt);

        }else if(process.env.NODE_ENV == 'development'){

            new BotTEST(botConfig.test);

        }

        
    }

}

module.exports = InitBots;