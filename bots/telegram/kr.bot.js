const Bot = require('./bot');
require('dotenv').config();


class BotKR extends Bot {
    constructor(config) {
        
        super(config);

        this.commands = [
            {
                command: 'info',
                description: '나에 대한 정보',
                response: data => `저는 케플러입니다. 성별이 없지만 Vulcan I에서 생성된 안드로이드로 구성된 기계 종족입니다`,
                image: process.env.URL + '/assets/images/en/keppler.jpeg',
            },
            {
                command: 'contract',
                description: 'Vulcano 토큰 Contract 정보입니다',
                response: data => `<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">$VULC</a> Contract Address:
                
0x3810a078AA274Ea6d06a480588eFf8fE517220a4

<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">🔎 BscScan에서 보기 </a>
<a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x3810a078AA274Ea6d06a480588eFf8fE517220a4">💸 PancakeSwap에서 거래</a>`,
                options: {
                    parse_mode: "HTML",
                    'disable_web_page_preview': true
                }
            },
            {
                command: 'website',
                description: 'Vulcano 공식 웹사이트 정보입니다',
                response: data => '<strong>이곳에서 저희 웹사이트를 방문하십시오 👇</strong>',
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🌐 홈페이지`, url:'https://vulcano.gg' }],
                        [{ text: `📜 백서`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' },{ text: `🗺️ 로드맵`, url:'https://www.vulcano.gg/#roadmap' }],
                        ]
                    })
                }
            },
            {
                command: 'whitepaper',
                description: 'Vulcano 공식 백서 안내드립니다',
                response: data => '<strong>이곳에서 백서를 확인하십시오 👇</strong>',
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `📜 백서`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' }],
                        [{ text: `🌐 홈페이지`, url:'https://vulcano.gg' },{ text: `🗺️ 로드맵`, url:'https://www.vulcano.gg/#roadmap' }],
                        ]
                    })
                }
            },
            {
                command: 'roadmap',
                description: 'Vulcano 공식 로드맵 정보입니다',
                response: data => '<strong>여기에서 로드맵을 확인하십시오 👇</strong>',
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🗺️ 로드맵`, url:'https://www.vulcano.gg/#roadmap' }],
                        [{ text: `🌐 홈페이지`, url:'https://vulcano.gg' },{ text: `📜 백서`, url:'https://vulcano.gitbook.io/vulcano-whitepaper-en/' }],
                        ]
                    })
                }
            },
            {
                command: 'communities',
                description: '전 세계 Vulcano 공식 커뮤니티 목록입니다',
                response: data => `<strong>🌍 Vulcano 공식 커뮤니티 🌎</strong>`,
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

        //this.welcomeMessage();

        this.listenBannedNames();

        //this.scheduleMessages();

    }
}

module.exports = BotKR;

