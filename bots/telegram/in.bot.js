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

<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">π BscScan par dekhein </a>
<a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x3810a078AA274Ea6d06a480588eFf8fE517220a4">πΈ PancakeSwap par Trade karein</a>`,
                options: {
                    parse_mode: "HTML",
                    'disable_web_page_preview': true
                }
            },
            {
                command: 'website',
                description: 'Vulcano ke adhikaari websites ki jaankari.',
                response: data => '<strong>website ko ispar visit karein π</strong>',
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `π Website`, url:'https://vulcano.gg' }],
                        [{ text: `π Whitepaper`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' },{ text: `πΊοΈ Roadmap`, url:'https://www.vulcano.gg/#roadmap' }],
                        ]
                    })
                }
            },
            {
                command: 'whitepaper',
                description: 'Vulcano ke Adhikaarik Whitepaper ki jaankari.',
                response: data => '<strong>Humara whitepaper yahan dekhein π</strong>',
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `π Whitepaper`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' }],
                        [{ text: `π Website`, url:'https://vulcano.gg' },{ text: `πΊοΈ Roadmap`, url:'https://www.vulcano.gg/#roadmap' }],
                        ]
                    })
                }
            },
            {
                command: 'roadmap',
                description: 'Vulcano ke Adhikaarik Roadmap ki jaankari.',
                response: data => '<strong>Humara adhikaarik Roadmap yahan dekhein π</strong>',
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `πΊοΈ Roadmap`, url:'https://www.vulcano.gg/#roadmap' }],
                        [{ text: `π Website`, url:'https://vulcano.gg' },{ text: `π Whitepaper`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' }],
                        ]
                    })
                }
            },
            {
                command: 'communities',
                description: 'Vulcano ke vishviya Adhikaarik samudaye ki suchi.',
                response: data => `<strong>π Vulcano addhikarik samudaye π</strong>`,
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `πΊπΈ English Mukhya Samudaye`, url:'https://t.me/VULCANO_En_Group' }],
                        [{ text: `πͺπΈ Spanish Samudaye`, url:'https://t.me/VULCANO_Grupo_Es' }],
                        [{ text: `π§π· Portuguese Samudaye`, url:'https://t.me/Vulcano_PT' }],
                        [{ text: `π«π· French Samudaye`, url:'https://t.me/vulcanoFR' }],
                        [{ text: `π―π΅ Japanese Samudaye`, url:'https://t.me/vulcanojp' }],
                        [{ text: `π¨π³ Chinese Samudaye`, url:'https://t.me/VulcanoChina' }],
                        [{ text: `π°π· Korean Samudaye`, url:'https://t.me/vulcanokr' }],
                        [{ text: `π»π³ Vietnamese Samudaye`, url:'https://t.me/Vulcano_VN' }],
                        [{ text: `π΅π­ Filipino Samudaye`, url:'https://t.me/vulcanoph' }],
                        [{ text: `πΉπ· Turkish Samudaye`, url:'https://t.me/vulcanoTR' }],
                        [{ text: `π?π³ Indian Samudaye`, url:'https://t.me/vulcanoIN' }],
                        [{ text: `π?π© Indonesian Samudaye`, url:'https://t.me/vulcanoIDN' }],
                        [{ text: `π£ Discord`, url:'https://discord.gg/vulcanogame' }],
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

