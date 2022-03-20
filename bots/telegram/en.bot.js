const Bot = require('./bot');
require('dotenv').config();


class BotEN extends Bot {
    constructor(config) {
        
        super(config);

        this.commands = [
            {
                command: 'info',
                description: 'Information about me',
                response: data => `I'm the eldest son of the Great Alpha. I always carry the Dark Sword, a gift from my father.`,
                image: process.env.URL + '/assets/images/en/dark-aster.jpg',
            },
            {
                command: 'contract',
                description: 'Information about Vulcano Token Contract',
                response: data => 'Vulcano Token is not yet released, please stay tuned for further information.'
            },
            {
                command: 'website',
                description: 'Vulcano Official Websites information.',
                response: data => '<strong>🔗 Vulcano Official Website and Links 🔗</strong>',
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🌐 Website`, url:'https://vulcano.gg' }],
                        [{ text: `📜 Whitepaper`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' }],
                        [{ text: `🗺️ Roadmap`, url:'https://www.vulcano.gg/#roadmap' }],
                        [{ text: `🤝 Partnership Program`, url:'https://docs.google.com/forms/d/e/1FAIpQLSfMucGEAH2X2bQwBozdd9MqXk9B2NOT0C7cGhSBsr8kvK1YWQ/viewform' }],
                        ]
                    })
                }
            },
            {
                command: 'communities',
                description: 'Vulcano Official Communities across the globe',
                response: data => `<strong>🌍 Vulcano Official Communities 🌍</strong>`,
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🇺🇸 English Main Community`, url:'https://t.me/VULCANO_En_Group' }],
                        [{ text: `🇪🇸 Spanish Community`, url:'https://t.me/VULCANO_Grupo_Es' }],
                        [{ text: `🇧🇷 Portuguese Community`, url:'https://t.me/Vulcano_PT' }],
                        [{ text: `🇨🇳 Chinese Community`, url:'https://t.me/Vulcano_VN' }],
                        [{ text: `🇰🇷 Korean Community`, url:'https://t.me/vulcanokr' }],
                        [{ text: `🇻🇳 Vietnamese Community`, url:'https://t.me/VulcanoChina' }],
                        [{ text: `🇵🇭 Filipino Community`, url:'https://t.me/vulcanoph' }],
                        [{ text: `🇹🇷 Turkish Community`, url:'https://t.me/vulcanoTR' }],
                        [{ text: `🟣 Discord`, url:'https://discord.gg/vulcanogame' }],
                        ]
                    })
                }
                
            },
            {
                command: 'price',
                description: '$VULC Token Price Ticker',
                custom: true
            }

        ];

        this.welcome = (name) => {
            return `Hello ${name}! Welcome to the universe of Vulcano!`;
        }

        this.setCommands();

        this.listenCommands();

        this.welcomeMessage();

        this.priceCommand();
        
    }
}

module.exports = BotEN;

