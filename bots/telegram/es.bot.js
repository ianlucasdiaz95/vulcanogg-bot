const Bot = require('./bot');
require('dotenv').config();


class BotES extends Bot {
    constructor(config) {
        
        super(config);

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
                response: data => `<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">$VULC</a> Contract Address: 

0x3810a078AA274Ea6d06a480588eFf8fE517220a4

<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">🔎 Ver en BscScan </a>

<a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x3810a078AA274Ea6d06a480588eFf8fE517220a4">💸 Comprar en PancakeSwap</a>`,
                options: {
                    parse_mode: "HTML",
                    'disable_web_page_preview': true
                }
            },
            {
                command: 'website',
                description: 'Informacion sobre nuestro sitio web.',
                response: data => '<strong>Visita nuestro sitio web 👇</strong>',
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
                response: data => '<strong>Revisa nuestro whitepaper 👇</strong>',
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
                response: data => '<strong>Accede al roadmap aquí 👇</strong>',
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
                response: data => `<strong>🌍 Nuestras comunidades oficiales 🌍</strong>`,
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🇺🇸 Comunidad Principal Ingles`, url:'https://t.me/VULCANO_En_Group' }],
                        [{ text: `🇪🇸 Comunidad Español`, url:'https://t.me/VULCANO_Grupo_Es' }],
                        [{ text: `🇧🇷 Comunidad Portugues`, url:'https://t.me/Vulcano_PT' }],
                        [{ text: `🇫🇷 Comunidad Frances`, url:'https://t.me/vulcanoFR' }],
                        [{ text: `🇯🇵 Comunidad Japón`, url:'https://t.me/vulcanojp' }],
                        [{ text: `🇨🇳 Comunidad China`, url:'https://t.me/VulcanoChina' }],
                        [{ text: `🇰🇷 Comunidad Corea`, url:'https://t.me/vulcanokr' }],
                        [{ text: `🇻🇳 Comunidad Vietnam`, url:'https://t.me/Vulcano_VN' }],
                        [{ text: `🇵🇭 Comunidad Filipinas`, url:'https://t.me/vulcanoph' }],
                        [{ text: `🇹🇷 Comunidad Turquía`, url:'https://t.me/vulcanoTR' }],
                        [{ text: `🇮🇳 Comunidad India`, url:'https://t.me/vulcanoIN' }],
                        [{ text: `🇮🇩 Comunidad Indonesia`, url:'https://t.me/vulcanoIDN' }],
                        [{ text: `🟣 Discord`, url:'https://discord.gg/vulcanogame' }],
                        ]
                    })
                }
                
            }

        ];

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
                    [{ text: `💪 Nuestro equipo`, url:'https://www.vulcano.gg/team' }, { text: `🤝 Partners`, url:'https://www.vulcano.gg/#partners' }],
                    [{ text: `🟣 Discord`, url:'https://discord.gg/vulcanogame' }, { text: `🔵 Twitter`, url:'https://twitter.com/Vulcano_Game' }],
                    [{ text: '🔇 Click acá para empezar a escribir ✅', callback_data: 'unmute' }]
                    ]
                })
            },
            mute: true,
            muteText: 'Gracias, ya puedes escribir mensajes.'
        }

        this.recurrentMessages = [
            {
                message: `<strong>🌋 V U L C A N O  🌋</strong>

<i>Noticias de Vulcano</i>
🛒 Marketplace Lanzado: <a href="https://www.vulcano.gg/app/marketplace">https://www.vulcano.gg/app/marketplace</a>
✅ BitMart CEX Listing
🤝 GameFi, GamesPad & BullPerk Partnerships
🌟 Whitelist Abierta: <a href="https://bit.ly/3IixQJy">https://bit.ly/3IixQJy</a>
🗓 IDO con fecha 31 de Marzo

<a href="http://www.vulcano.gg/">Website</a> l <a href="https://www.vulcano.gg/app/marketplace">Marketplace</a> l <a href="https://twitter.com/Vulcano_Game">Twitter</a> l <a href="https://discord.gg/vulcanogame">Discord</a> l <a href="https://t.me/VULCANO_gg">Anuncios</a> l <a href="https://vulcano.gitbook.io/vulcano-whitepaper-en/">Whitepaper</a> l <a href="https://www.vulcano.gg/#roadmap">Roadmap</a>`,
                options: {
                    parse_mode : "HTML",
                    'disable_web_page_preview': true
                },
                rule: '0 14 * * *',
            }
        ]

        this.setCommands();

        this.listenCommands();

        this.listenBannedNames();

        //this.welcomeMessage();

        //this.scheduleMessages();

    }
}

module.exports = BotES;

