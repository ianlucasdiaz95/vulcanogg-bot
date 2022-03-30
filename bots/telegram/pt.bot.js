const Bot = require('./bot');
require('dotenv').config();


class BotPT extends Bot {
    constructor(config) {
        
        super(config);

        this.commands = [
            {
                command: 'info',
                description: 'Informações sobre mim.',
                response: data => `Eu sou Keppler. Não tenho gênero. Eu venho de uma raça mecânica de andróides criada em Vulcano I.`,
                image: process.env.URL + '/assets/images/en/keppler.jpeg',
            },
            {
                command: 'contrato',
                description: 'Informações do contrato $VULC.',
                response: data => 'O token ainda não saiu, fique atento para mais informações.'
            },
            {
                command: 'website',
                description: 'Informações sobre nosso site.',
                response: data => '<strong>Visite o nosso site 👇</strong>',
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
                description: 'Informações sobre nosso whitepaper.',
                response: data => '<strong>Confira nosso whitepaper 👇</strong>',
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
                description: 'Informações sobre nosso roadmap.',
                response: data => '<strong>Acesse aqui o roadmap 👇</strong>',
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
                description: 'Nossas comunidades oficiais em todo o mundo.',
                response: data => `<strong>🌍 Nossas comunidades oficiais 🌍</strong>`,
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🇺🇸 Comunidad Inglês Principal`, url:'https://t.me/VULCANO_En_Group' }],
                        [{ text: `🇪🇸 Comunidad Espanhol`, url:'https://t.me/VULCANO_Grupo_Es' }],
                        [{ text: `🇧🇷 Comunidad Português`, url:'https://t.me/Vulcano_PT' }],
                        [{ text: `🇫🇷 Comunidad francês`, url:'https://t.me/vulcanoFR' }],
                        [{ text: `🇯🇵 Comunidad Japão`, url:'https://t.me/vulcanojp' }],
                        [{ text: `🇨🇳 Comunidad China`, url:'https://t.me/VulcanoChina' }],
                        [{ text: `🇰🇷 Comunidad Coréia`, url:'https://t.me/vulcanokr' }],
                        [{ text: `🇻🇳 Comunidad Vietnã`, url:'https://t.me/Vulcano_VN' }],
                        [{ text: `🇵🇭 Comunidad Filipinas`, url:'https://t.me/vulcanoph' }],
                        [{ text: `🇹🇷 Comunidad Turca`, url:'https://t.me/vulcanoTR' }],
                        [{ text: `🇮🇳 Comunidad Índia`, url:'https://t.me/vulcanoIN' }],
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
                    [{ text: `💪 Nossa equipe`, url:'https://www.vulcano.gg/team' }, { text: `🤝 Partners`, url:'https://www.vulcano.gg/#partners' }],
                    [{ text: `🟣 Discord`, url:'https://discord.gg/vulcanogame' }, { text: `🔵 Twitter`, url:'https://twitter.com/Vulcano_Game' }],
                    [{ text: '🔇 Click acá para empezar a escribir ✅', callback_data: 'unmute' }]
                    ]
                })
            },
            mute: true,
            muteText: 'Obrigado, agora você pode escrever mensagens.'
        }

        this.setCommands();

        this.listenCommands();

        this.welcomeMessage();

        this.listenBannedNames();

        //this.scheduleMessages();

    }
}

module.exports = BotPT;

