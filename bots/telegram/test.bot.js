const Bot = require('./bot');

require('dotenv').config();


class BotTEST extends Bot {
    constructor(config) {
        
        super(config);

        // Commands
        this.commands = [
            {
                command: 'info',
                description: 'Información sobre mi.',
                response: data => `Soy Keppler. No tengo genero. Vengo de una raza mecánica de androides creados en Vulcan I.`,
                image: process.env.URL + '/assets/images/en/keppler.jpeg',
            },
            {
                command: 'contrato',
                description: 'Información sobre el contrato de $VULC.',
                response: data => 'Vulcano Token is not yet released, please stay tuned for further information.'
            },
            {
                command: 'website',
                description: 'Informacion sobre nuestro sitio web.',
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
                description: 'Informacion sobre nuestro whitepaper.',
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
                description: 'Informacion sobre nuestro roadmap.',
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
                command: 'comunidades',
                description: 'Nuestras comunidades oficiales en todo el mundo.',
                response: data => `<strong>🌍 Vulcano Official Communities 🌍</strong>`,
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🇺🇸 Comunidad Principal Ingles`, url:'https://t.me/VULCANO_En_Group' }],
                        [{ text: `🇪🇸 Comunidad Español`, url:'https://t.me/VULCANO_Grupo_Es' }],
                        [{ text: `🇧🇷 Comunidad Portugues`, url:'https://t.me/Vulcano_PT' }],
                        [{ text: `🇯🇵 Comunidad Japón`, url:'https://t.me/vulcanojp' }],
                        [{ text: `🇨🇳 Comunidad China`, url:'https://t.me/VulcanoChina' }],
                        [{ text: `🇰🇷 Comunidad Corea`, url:'https://t.me/vulcanokr' }],
                        [{ text: `🇻🇳 Comunidad Vietnam`, url:'https://t.me/Vulcano_VN' }],
                        [{ text: `🇵🇭 Comunidad Filipinas`, url:'https://t.me/vulcanoph' }],
                        [{ text: `🇹🇷 Comunidad Turquía`, url:'https://t.me/vulcanoTR' }],
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

        // Welcome message 
        this.welcome = {
            message: (name) => {
                return `Hola ${name}! Bienvenido al metaverso de Vulcano 🔥🔥

En los enlaces debajo te dejamos todos los links para obtener más información acerca de Vulcano.`;
            },
            options: {
                parse_mode : "HTML",
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                    [{ text: `🌐 Website`, url:'https://vulcano.gg' }, { text: `📜 Whitepaper`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' }, { text: `🗺️ Roadmap`, url:'https://www.vulcano.gg/#roadmap' }],
                    [{ text: `💪 Our team`, url:'https://www.vulcano.gg/team' }, { text: `🤝 Partners`, url:'https://www.vulcano.gg/#partners' }],
                    [{ text: `🟣 Discord`, url:'https://discord.gg/vulcanogame' }, { text: `🔵 Twitter`, url:'https://twitter.com/Vulcano_Game' }],
                    [{ text: '🔇 Click acá para empezar a escribir ✅', callback_data: 'unmute' }]
                    ]
                })
            },
            mute: true,
            muteText: 'Gracias, ya puedes escribir mensajes.'
        }

        this.bannedWords = {
            words: ['hi','hi guys','hello','nice project', 'hi good project', 'good project', 'good investment'],
        }

        this.recurrentMessages = [
            {
                message: `<strong>🌋 V U L C A N O  🌋</strong>

<i>Latest of Vulcano</i>
🤝 GameFi, GamesPad & BullPerk Partnerships
🌟 Whitelist Open: <a href="https://bit.ly/3IixQJy">https://bit.ly/3IixQJy</a>
🗓 The IDO will be taking place 31st of March
🛒 Marketplace at the end of March

<a href="http://www.vulcano.gg/">Website</a> l <a href="https://twitter.com/Vulcano_Game">Twitter</a> l <a href="https://discord.gg/vulcanogame">Discord</a> l <a href="https://t.me/VULCANO_gg">Announcements</a> l <a href="https://vulcano.gitbook.io/vulcano-whitepaper-en/">Whitepaper</a> l <a href="https://www.vulcano.gg/#roadmap">Roadmap</a>`,
                options: {
                    parse_mode : "HTML",
                    'disable_web_page_preview': true
                },
                rule: '37 10 * * *',
            }
        ]

        try {

            this.setCommands();

            this.listenCommands();

            this.welcomeMessage();

            this.listenBannedWords();

            this.listenBannedNames();

            this.scheduleMessages();

            this.priceCommand();      
            
            //this.listenTweets();   
            
        } catch (error) {
            console.log(error);            
        }
    }

}

module.exports = BotTEST;

