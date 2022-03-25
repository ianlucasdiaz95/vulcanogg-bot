const Bot = require('./bot');
require('dotenv').config();


class BotEN extends Bot {
    constructor(config) {
        
        super(config);

        this.commands = [
            {
                command: 'info',
                description: 'Information about me',
                response: data => `I'm Keppler. Genderless. From a mechanical race made up of androids created on Vulcan I.`,
                image: process.env.URL + '/assets/images/en/keppler.jpeg',
            },
            {
                command: 'contract',
                description: 'Information about Vulcano Token Contract',
                response: data => 'Vulcano Token is not yet released, please stay tuned for further information.'
            },
            {
                command: 'website',
                description: 'Vulcano Official Websites information.',
                response: data => '<strong>Visit our website here 👇</strong>',
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🌐 Website`, url:'https://vulcano.gg' }],
                        [{ text: `📜 Whitepaper`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' },{ text: `🗺️ Roadmap`, url:'https://www.vulcano.gg/#roadmap' }],
                        ]
                    })
                }
            },
            {
                command: 'whitepaper',
                description: 'Vulcano Official Whitepaper information.',
                response: data => '<strong>Check out our Whitepaper here 👇</strong>',
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `📜 Whitepaper`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' }],
                        [{ text: `🌐 Website`, url:'https://vulcano.gg' },{ text: `🗺️ Roadmap`, url:'https://www.vulcano.gg/#roadmap' }],
                        ]
                    })
                }
            },
            {
                command: 'roadmap',
                description: 'Vulcano Official Roadmap information.',
                response: data => '<strong>Access our roadmap here 👇</strong>',
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🗺️ Roadmap`, url:'https://www.vulcano.gg/#roadmap' }],
                        [{ text: `🌐 Website`, url:'https://vulcano.gg' },{ text: `📜 Whitepaper`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' }],
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
                        [{ text: `🇯🇵 Japan Community`, url:'https://t.me/vulcanojp' }],
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
            /*{
                command: 'price',
                description: '$VULC Token Price Ticker',
                custom: true
            }*/

        ];

        this.welcome = {
            message: (name) => {
                return `Hello ${name}! Welcome to the metaverse of Vulcano 🔥🔥

Follow the links below to learn more about Vulcano and what it has to offer.`;
            },
            options: {
                parse_mode : "HTML",
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                    [{ text: `🌐 Website`, url:'https://vulcano.gg' }, { text: `📜 Whitepaper`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' }, { text: `🗺️ Roadmap`, url:'https://www.vulcano.gg/#roadmap' }],
                    [{ text: `💪 Our team`, url:'https://www.vulcano.gg/team' }, { text: `🤝 Partners`, url:'https://www.vulcano.gg/#partners' }],
                    [{ text: `🟣 Discord`, url:'https://discord.gg/vulcanogame' }, { text: `🔵 Twitter`, url:'https://twitter.com/Vulcano_Game' }],
                    ]
                })
            }
        }

        this.bannedWords = {
            words: ['hi','hi guys','hello','nice project', 'hi good project', 'good project', 'good investment']
        }

        this.setCommands();

        this.listenCommands();

        this.welcomeMessage();

        this.listenBannedWords();

        //this.priceCommand();
        
    }
}

module.exports = BotEN;

