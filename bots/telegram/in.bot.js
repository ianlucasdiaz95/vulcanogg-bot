const Bot = require('./bot');
require('dotenv').config();


class BotIN extends Bot {
    constructor(config) {
        
        super(config);

        this.commands = [
            {
                command: 'info',
                description: 'Apne bare mein batana.',
                response: data => `Mera naam kepplar hai, lingarahit. Machini daud me Vlucan l par mujhey andoirds se banaya gaya.`,
                image: process.env.URL + '/assets/images/en/keppler.jpeg',
            },
            {
                command: 'contract',
                description: 'Vulcano Token ke Contract ki jaankaari',
                response: data => `<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">$VULC</a> Contract Address: 
                
0x3810a078AA274Ea6d06a480588eFf8fE517220a4

<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">🔎 BscScan par dekhein </a>
<a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x3810a078AA274Ea6d06a480588eFf8fE517220a4">💸 PancakeSwap par Trade karein</a>`,
                options: {
                    parse_mode: "HTML",
                    'disable_web_page_preview': true
                }
            },
            {
                command: 'website',
                description: 'Vulcano ke adhikaari websites ki jaankari.',
                response: data => '<strong>website ko ispar visit karein 👇</strong>',
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
                description: 'Vulcano ke Adhikaarik Whitepaper ki jaankari.',
                response: data => '<strong>Humara whitepaper yahan dekhein 👇</strong>',
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
                description: 'Vulcano ke Adhikaarik Roadmap ki jaankari.',
                response: data => '<strong>Humara adhikaarik Roadmap yahan dekhein 👇</strong>',
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
                description: 'Vulcano ke vishviya Adhikaarik samudaye ki suchi.',
                response: data => `<strong>🌍 Vulcano addhikarik samudaye 🌍</strong>`,
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🇺🇸 English Mukhya Samudaye`, url:'https://t.me/VULCANO_En_Group' }],
                        [{ text: `🇪🇸 Spanish Samudaye`, url:'https://t.me/VULCANO_Grupo_Es' }],
                        [{ text: `🇧🇷 Portuguese Samudaye`, url:'https://t.me/Vulcano_PT' }],
                        [{ text: `🇫🇷 French Samudaye`, url:'https://t.me/vulcanoFR' }],
                        [{ text: `🇯🇵 Japanese Samudaye`, url:'https://t.me/vulcanojp' }],
                        [{ text: `🇨🇳 Chinese Samudaye`, url:'https://t.me/VulcanoChina' }],
                        [{ text: `🇰🇷 Korean Samudaye`, url:'https://t.me/vulcanokr' }],
                        [{ text: `🇻🇳 Vietnamese Samudaye`, url:'https://t.me/Vulcano_VN' }],
                        [{ text: `🇵🇭 Filipino Samudaye`, url:'https://t.me/vulcanoph' }],
                        [{ text: `🇹🇷 Turkish Samudaye`, url:'https://t.me/vulcanoTR' }],
                        [{ text: `🇮🇳 Indian Samudaye`, url:'https://t.me/vulcanoIN' }],
                        [{ text: `🇮🇩 Indonesian Samudaye`, url:'https://t.me/vulcanoIDN' }],
                        [{ text: `🇳🇱 Dutch Samudaye`, url:'https://t.me/vulcanodutch' }],
                        [{ text: `🇸🇦 Arabic Samudaye`, url:'https://t.me/vulcanoarabic' }],
                        [{ text: `🇩🇪 German Samudaye`, url:'https://t.me/vulcanogerman' }],
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

        this.listenBannedWords();

        this.listenBannedNames();

        this.priceCommand();
        
    }
}

module.exports = BotIN;

