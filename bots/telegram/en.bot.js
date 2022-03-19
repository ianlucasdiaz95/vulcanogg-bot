const Bot = require('./bot');
require('dotenv').config();


class BotEN extends Bot {
    constructor(config) {
        
        super(config);

        this.commands = [
            {
                command: 'info',
                description: 'Information about me',
                response: `I'm the eldest son of the Great Alpha. I always carry the Dark Sword, a gift from my father.`,
                image: '/assets/images/en/dark-aster.jpg',
                audio: '/assets/audio/en/dark-aster-en.ogg'
            },
            {
                command: 'token',
                description: 'Information about Vulcano Token',
                response: 'Vulcano Token is a token that can be used to buy in the Vulcano ecosystem.'
            },
            {
                command: 'contract',
                description: 'Information about Vulcano Token Contract',
                response: 'Vulcano Token is a token that can be used to buy in the Vulcano ecosystem.'
            },
            {
                command: 'website',
                description: 'Vulcano Official Website URL',
                response: 'Vulcano Token is a token that can be used to buy in the Vulcano ecosystem.'
            },
            {
                command: 'communities',
                description: 'Vulcano Official Communities across the globe',
                response: 'Vulcano Token is a token that can be used to buy in the Vulcano ecosystem.'
            }
        ]

        console.log(this.commands);

        this.setCommands();

        this.listenCommands();
        
    }
}

module.exports = BotEN;

