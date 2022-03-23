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
                response: data => 'El token todavía no salió, estate atento para más información.'
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
                        [{ text: `🇯🇵 Comunidad Japón`, url:'https://t.me/vulcanojp' }],
                        [{ text: `🇨🇳 Comunidad China`, url:'https://t.me/Vulcano_VN' }],
                        [{ text: `🇰🇷 Comunidad Corea`, url:'https://t.me/vulcanokr' }],
                        [{ text: `🇻🇳 Comunidad Vietnam`, url:'https://t.me/VulcanoChina' }],
                        [{ text: `🇵🇭 Comunidad Filipinas`, url:'https://t.me/vulcanoph' }],
                        [{ text: `🇹🇷 Comunidad Turquía`, url:'https://t.me/vulcanoTR' }],
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

        this.setCommands();

        this.listenCommands();

        this.welcomeMessage();

    }
}

module.exports = BotES;

