const botConfig = require('./botConfig');
const BotEN = require('./telegram/en.bot');

class InitBots {
    constructor() {

        new BotEN(botConfig.en);
        
    }

}

module.exports = InitBots;