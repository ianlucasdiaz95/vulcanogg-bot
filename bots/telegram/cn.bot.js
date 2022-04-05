const Bot = require('./bot');
require('dotenv').config();


class BotCN extends Bot {
    constructor(config) {
        
        super(config);

        this.commands = [
            {
                command: 'info',
                description: '关于我的信息',
                response: data => `我是开普勒。无性别。来自由 Vulcan I 上创建的机器人组成的机械竞赛。`,
                image: process.env.URL + '/assets/images/en/keppler.jpeg',
            },
            {
                command: 'contract',
                description: '有关 Vulcano 代币合约的信息',
                response: data => `<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">$VULC</a> 合约地址：
                
0x3810a078AA274Ea6d06a480588eFf8fE517220a4

<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">🔎 在 BscScan 上查看 </a>
<a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x3810a078AA274Ea6d06a480588eFf8fE517220a4">💸 在 PancakeSwap 上交易</a>`,
                options: {
                    parse_mode: "HTML",
                    'disable_web_page_preview': true
                }
            },
            {
                command: 'website',
                description: 'Vulcano 官网信息。',
                response: data => '<strong>点击这里访问我们的网站 👇</strong>',
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🌐 网站`, url:'https://vulcano.gg' }],
                        [{ text: `📜 白皮书`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' },{ text: `🗺️ 路线图`, url:'https://www.vulcano.gg/#roadmap' }],
                        ]
                    })
                }
            },
            {
                command: 'whitepaper',
                description: 'Vulcano 官方白皮书信息。',
                response: data => '<strong>在这里查看我们的路线图 👇</strong>',
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `📜 白皮书`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' }],
                        [{ text: `🌐 网站`, url:'https://vulcano.gg' },{ text: `🗺️ 路线图`, url:'https://www.vulcano.gg/#roadmap' }],
                        ]
                    })
                }
            },
            {
                command: 'roadmap',
                description: 'Vulcano 官方路线图信息。',
                response: data => '<strong>在这里查看我们的白皮书 👇</strong>',
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🗺️ 路线图`, url:'https://www.vulcano.gg/#roadmap' }],
                        [{ text: `🌐 网站`, url:'https://vulcano.gg' },{ text: `📜 白皮书`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' }],
                        ]
                    })
                }
            },
            {
                command: 'communities',
                description: '全球 Vulcano 官方社区',
                response: data => `<strong>🌍 Vulcano 官方社区 🌎</strong>`,
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🇺🇸 英文主社区`, url:'https://t.me/VULCANO_En_Group' }],
                        [{ text: `🇪🇸 西班牙语社区`, url:'https://t.me/VULCANO_Grupo_Es' }],
                        [{ text: `🇧🇷 葡萄牙语社区`, url:'https://t.me/Vulcano_PT' }],
                        [{ text: `🇫🇷 法语社区`, url:'https://t.me/vulcanoFR' }],
                        [{ text: `🇯🇵 日语社区`, url:'https://t.me/vulcanojp' }],
                        [{ text: `🇨🇳 华人社区`, url:'https://t.me/VulcanoChina' }],
                        [{ text: `🇰🇷 韩语社区`, url:'https://t.me/vulcanokr' }],
                        [{ text: `🇻🇳 越南社区`, url:'https://t.me/Vulcano_VN' }],
                        [{ text: `🇵🇭 菲律宾社区`, url:'https://t.me/vulcanoph' }],
                        [{ text: `🇹🇷 土耳其社区`, url:'https://t.me/vulcanoTR' }],
                        [{ text: `🇮🇳 印度社区`, url:'https://t.me/vulcanoIN' }],
                        [{ text: `🇮🇩 印尼社区`, url:'https://t.me/vulcanoIDN' }],
                        [{ text: `🇳🇱 荷兰社区`, url:'https://t.me/vulcanodutch' }],
                        [{ text: `🇸🇦 阿拉伯语社区`, url:'https://t.me/vulcanoarabic' }],
                        [{ text: `🟣 Discord`, url:'https://discord.gg/vulcanogame' }],
                        ]
                    })
                }
                
            },
             {
                command: 'price',
                description: '$VULC 代币价格代码',
                custom: true
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

        this.priceCommand();

        //this.welcomeMessage();

        this.listenBannedNames();

        //this.scheduleMessages();

    }
}

module.exports = BotCN;

