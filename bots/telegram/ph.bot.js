const Bot = require('./bot');
require('dotenv').config();


class BotPH extends Bot {
    constructor(config) {
        
        super(config);

        this.commands = [
            {
                command: 'info',
                description: 'Impormasyon tungkol sa akin',
                response: data => `Ako si Keppler. Walang kasarian. Mula sa lahi ng mekanikal na binubuo ng mga android na ginawa sa Vulcan I.`,
                image: process.env.URL + '/assets/images/en/keppler.jpeg',
            },
            {
                command: 'contract',
                description: 'Impormasyon ng  Vulcano Token Contract',
                response: data => `<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">$VULC</a> Contract Address:
                
0x3810a078AA274Ea6d06a480588eFf8fE517220a4

<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">π View on BscScan </a>
<a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x3810a078AA274Ea6d06a480588eFf8fE517220a4">πΈ Trade on PancakeSwap</a>`,
                options: {
                    parse_mode: "HTML",
                    'disable_web_page_preview': true
                }
            },
            {
                command: 'website',
                description: 'Impormasyon ng Opisyal Vulcano Websites.',
                response: data => '<strong>Bisitahin ang aming website dito π</strong>',
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
                description: 'Impormasyon ng Vulcano Official Whitepaper',
                response: data => '<strong>Tignan ang aming roadmap dito π</strong>',
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
                description: 'Impormasyon ng Opisyal Vulcano Roadmap.',
                response: data => '<strong>Tignan ang aming Whitepaper dito π</strong>',
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
                description: 'Mga Opisyal na Komunidad ng Vulcano sa buong mundo',
                response: data => `<strong>π Mga Opisyal na Komunidad ng Vulcano π</strong>`,
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `πΊπΈ English Main Community`, url:'https://t.me/VULCANO_En_Group' }],
                        [{ text: `πͺπΈ Spanish Community`, url:'https://t.me/VULCANO_Grupo_Es' }],
                        [{ text: `π§π· Portuguese Community`, url:'https://t.me/Vulcano_PT' }],
                        [{ text: `π¨π³ Chinese Community`, url:'https://t.me/VulcanoChina' }],
                        [{ text: `π°π· Korean Community`, url:'https://t.me/vulcanokr' }],
                        [{ text: `π»π³ Vietnamese Community`, url:'https://t.me/Vulcano_VN' }],
                        [{ text: `π΅π­ Filipino Community`, url:'https://t.me/vulcanoph' }],
                        [{ text: `πΉπ· Turkish Community`, url:'https://t.me/vulcanoTR' }],
                        [{ text: `π?π© Indonesian Community`, url:'https://t.me/vulcanoIDN' }],
                        [{ text: `π£ Discord`, url:'https://discord.gg/vulcanogame' }],
                        ]
                    })
                }
                
            },
            {
                command: 'price',
                description: 'Presyo ng $VULC Token',
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

module.exports = BotPH;

