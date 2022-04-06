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
                        [{ text: `🇳🇱 Comunidad Holandesa`, url:'https://t.me/vulcanodutch' }],
                        [{ text: `🇸🇦 Comunidad Árabe`, url:'https://t.me/vulcanoarabic' }],
                        [{ text: `🟣 Discord`, url:'https://discord.gg/vulcanogame' }],
                        ]
                    })
                }
            },
            {
                command: 'price',
                description: 'Consulta el precio de $VULC.',
                custom: true
            }

        ];

        this.setCommands();

        this.listenCommands();

        this.listenBannedWords();

        this.listenBannedNames();

        this.priceCommand();

    }
}

module.exports = BotES;

