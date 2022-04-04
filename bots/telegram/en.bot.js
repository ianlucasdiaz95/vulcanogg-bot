const Bot = require('./bot');
require('dotenv').config();


class BotEN extends Bot {
    constructor(config) {
        
        super(config);

        this.commands = [
            {
                command: 'info',
                description: 'Information about me',
                response: data => `I'm Keppler. Genderless. From a mechanical race made up of androids created on Vulcan I.`,
                image: process.env.URL + '/assets/images/en/keppler.jpeg',
            },
            {
                command: 'contract',
                description: 'Information about Vulcano Token Contract',
                response: data => `<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">$VULC</a> Contract Address: 
                
0x3810a078AA274Ea6d06a480588eFf8fE517220a4

<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">🔎 View on BscScan </a>
<a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x3810a078AA274Ea6d06a480588eFf8fE517220a4">💸 Trade on PancakeSwap</a>`,
                options: {
                    parse_mode: "HTML",
                    'disable_web_page_preview': true
                }
            },
            {
                command: 'website',
                description: 'Vulcano Official Websites information.',
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
                description: 'Vulcano Official Whitepaper information.',
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
                description: 'Vulcano Official Roadmap information.',
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
                command: 'communities',
                description: 'Vulcano Official Communities across the globe',
                response: data => `<strong>🌍 Vulcano Official Communities 🌍</strong>`,
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

        this.welcome = {
            message: (name) => {
                return `Hello ${name}! Welcome to the metaverse of Vulcano 🔥🔥

Follow the links below to learn more about Vulcano and what it has to offer.`;
            },
            options: {
                parse_mode : "HTML",
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                    [{ text: `🌐 Website`, url:'https://vulcano.gg' }, { text: `📜 Whitepaper`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' }, { text: `🗺️ Roadmap`, url:'https://www.vulcano.gg/#roadmap' }],
                    [{ text: `💪 Our team`, url:'https://www.vulcano.gg/team' }, { text: `🤝 Partners`, url:'https://www.vulcano.gg/#partners' }],
                    [{ text: `🟣 Discord`, url:'https://discord.gg/vulcanogame' }, { text: `🔵 Twitter`, url:'https://twitter.com/Vulcano_Game' }],
                    ]
                })
            }
        }

        this.bannedWords = {
            words: ['hi','hey','hi guys','hello','nice project', 'hi good project', 'good project', 'good investment']
        }

        this.recurrentMessages = [
            {
                message: `<strong>🌋 V U L C A N O  🌋</strong>

<i>Latest of Vulcano</i>
🛒 Marketplace Released: <a href="https://www.vulcano.gg/app/marketplace">https://www.vulcano.gg/app/marketplace</a>
✅ BitMart CEX Listing
🤝 GameFi, GamesPad & BullPerk Partnerships
🌟 Whitelist Open: <a href="https://bit.ly/3IixQJy">https://bit.ly/3IixQJy</a>
🗓 The IDO will be taking place 31st of March

<a href="http://www.vulcano.gg/">Website</a> l <a href="https://www.vulcano.gg/app/marketplace">Marketplace</a> l <a href="https://twitter.com/Vulcano_Game">Twitter</a> l <a href="https://discord.gg/vulcanogame">Discord</a> l <a href="https://t.me/VULCANO_gg">Announcements</a> l <a href="https://vulcano.gitbook.io/vulcano-whitepaper-en/">Whitepaper</a> l <a href="https://www.vulcano.gg/#roadmap">Roadmap</a>`,
                options: {
                    parse_mode : "HTML",
                    'disable_web_page_preview': true
                },
                rule: '0 14 * * *',
            }
        ]

        this.setCommands();

        this.listenCommands();

        this.welcomeMessage();

        this.listenBannedWords();

        this.listenBannedNames();

        this.priceCommand();

        //this.scheduleMessages();
        
    }
}

module.exports = BotEN;

