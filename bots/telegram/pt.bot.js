const Bot = require('./bot');
require('dotenv').config();


class BotPT extends Bot {
    constructor(config) {
        
        super(config);

        this.commands = [
            {
                command: 'info',
                description: 'Informações sobre mim.',
                response: data => `Eu sou Keppler. Sem gênero. De uma raça mecânica composta por andróides criados em Vulcan I.`,
                image: process.env.URL + '/assets/images/en/keppler.jpeg',
            },
            {
                command: 'contract',
                description: 'Informações sobre o contrato do token Vulcano.',
                response: data => `<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">$VULC</a> endereço do contrato:
                
0x3810a078AA274Ea6d06a480588eFf8fE517220a4

<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">🔎 Veja na BscScan </a>
<a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x3810a078AA274Ea6d06a480588eFf8fE517220a4">💸 Compre na PancakeSwap</a>`,
                options: {
                    parse_mode: "HTML",
                    'disable_web_page_preview': true
                }
            },
            {
                command: 'website',
                description: 'Informações oficiais sobre o website do Vulcano.',
                response: data => '<strong>Visite nosso website aqui 👇</strong>',
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
                description: 'Informações oficiais sobre o whitepaper do Vulcano.',
                response: data => '<strong>Confira nosso Whitepaper aqui 👇</strong>',
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
                description: 'Informações oficiais sobre o roadmap do Vulcano.',
                response: data => '<strong>Acesse nosso roadmap aqui 👇</strong>',
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
                description: 'Informações oficiais sobre as comunidades do Vulcano ao redor do mundo.',
                response: data => `<strong>🌎 Comunidades oficiais do Vulcano 🌎</strong>`,
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🇺🇸 Comunidad Inglês`, url:'https://t.me/VULCANO_En_Group' }],
                        [{ text: `🇪🇸 Comunidad Espanhol`, url:'https://t.me/VULCANO_Grupo_Es' }],
                        [{ text: `🇧🇷 Comunidad Português`, url:'https://t.me/Vulcano_PT' }],
                        [{ text: `🇨🇳 Comunidad China`, url:'https://t.me/VulcanoChina' }],
                        [{ text: `🇰🇷 Comunidad Coréia`, url:'https://t.me/vulcanokr' }],
                        [{ text: `🇻🇳 Comunidad Vietnã`, url:'https://t.me/Vulcano_VN' }],
                        [{ text: `🇵🇭 Comunidad Filipinas`, url:'https://t.me/vulcanoph' }],
                        [{ text: `🇹🇷 Comunidad Turca`, url:'https://t.me/vulcanoTR' }],
                        [{ text: `🇮🇩 Comunidad Indonesia`, url:'https://t.me/vulcanoIDN' }],
                        [{ text: `🇳🇱 Comunidad Holandesa`, url:'https://t.me/vulcanodutch' }],
                        [{ text: `🇸🇦 Comunidad Árabe`, url:'https://t.me/vulcanoarabic' }],
                        [{ text: `🇩🇪 Comunidad Alemã`, url:'https://t.me/vulcanogerman' }],
                        [{ text: `🟣 Discord`, url:'https://discord.gg/vulcanogame' }],
                        ]
                    })
                }
            },
            {
                command: 'price',
                description: '$VULC Token Price',
                custom: true
            }

        ];

        this.setCommands();

        this.listenCommands();

        this.priceCommand();

        this.listenBannedWords();

        this.listenBannedNames();

    }
}

module.exports = BotPT;

