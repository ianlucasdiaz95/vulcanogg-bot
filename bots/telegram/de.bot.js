const Bot = require('./bot');
require('dotenv').config();


class BotDE extends Bot {
    constructor(config) {
        
        super(config);

        this.commands = [
            {
                command: 'info',
                description: 'Informationen über mich',
                response: data => `Ik ben Keppler. Geslachtloos. Van een mechanisch ras bestaande uit androïden gemaakt op Vulcan I`,
                image: process.env.URL + '/assets/images/en/keppler.jpeg',
            },
            {
                command: 'contract',
                description: 'Informationen über den Vulcano-Token-Vertrag',
                response: data => `<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">$VULC</a> Vertragsadresse: 
                
0x3810a078AA274Ea6d06a480588eFf8fE517220a4

<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">🔎 Auf BscScan anzeigen </a>
<a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x3810a078AA274Ea6d06a480588eFf8fE517220a4">💸 Handeln Sie auf PancakeSwap</a>`,
                options: {
                    parse_mode: "HTML",
                    'disable_web_page_preview': true
                }
            },
            {
                command: 'website',
                description: 'Informationen der offiziellen Vulcano-Websites.',
                response: data => '<strong>Besuchen Sie unsere Website hier 👇</strong>',
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
                description: 'Vulcano Offizielle Whitepaper-Informationen',
                response: data => '<strong>Sehen Sie sich hier unser Whitepaper an 👇</strong>',
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
                description: 'Vulcano Officiële Roadmap informatie',
                response: data => '<strong>Bekijk hier onze Roadmap 👇</strong>',
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
                description: 'Vulcano Officiële Gemeenschappen over de hele wereld',
                response: data => `<strong>🌍 Vulcano Officiële Gemeenschappen 🌍</strong>`,
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🇺🇸 English Main Community`, url:'https://t.me/VULCANO_En_Group' }],
                        [{ text: `🇪🇸 Spanish Community`, url:'https://t.me/VULCANO_Grupo_Es' }],
                        [{ text: `🇧🇷 Portuguese Community`, url:'https://t.me/Vulcano_PT' }],
                        [{ text: `🇫🇷 French Community`, url:'https://t.me/vulcanoFR' }],
                        [{ text: `🇯🇵 Japanese Community`, url:'https://t.me/vulcanojp' }],
                        [{ text: `🇨🇳 Chinese Community`, url:'https://t.me/VulcanoChina' }],
                        [{ text: `🇰🇷 Korean Community`, url:'https://t.me/vulcanokr' }],
                        [{ text: `🇻🇳 Vietnamese Community`, url:'https://t.me/Vulcano_VN' }],
                        [{ text: `🇵🇭 Filipino Community`, url:'https://t.me/vulcanoph' }],
                        [{ text: `🇹🇷 Turkish Community`, url:'https://t.me/vulcanoTR' }],
                        [{ text: `🇮🇳 Indian Community`, url:'https://t.me/vulcanoIN' }],
                        [{ text: `🇮🇩 Indonesian Community`, url:'https://t.me/vulcanoIDN' }],
                        [{ text: `🇳🇱 Dutch Community`, url:'https://t.me/vulcanodutch' }],
                        [{ text: `🇸🇦 Arabic Community`, url:'https://t.me/vulcanoarabic' }],
                        [{ text: `🇩🇪 German Community`, url:'https://t.me/vulcanogerman' }],
                        [{ text: `🟣 Discord`, url:'https://discord.gg/vulcanogame' }],
                        ]
                    })
                }
                
            },
            {
                command: 'price',
                description: '$VULC Token Prijs',
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

module.exports = BotDE;

