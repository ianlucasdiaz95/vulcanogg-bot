const Bot = require('./bot');
require('dotenv').config();


class BotIND extends Bot {
    constructor(config) {
        
        super(config);

        this.commands = [
            {
                command: 'info',
                description: 'Informasi tentang saya',
                response: data => `Saya Keppler. Tanpa gender. Dari ras mekanik yang terdiri dari android yang dibuat di Vulcan I.`,
                image: process.env.URL + '/assets/images/en/keppler.jpeg',
            },
            {
                command: 'contract',
                description: 'Informasi tentang Kontrak Token Vulcano',
                response: data => `Alamat Kontrak <a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">$VULC</a>:
                
0x3810a078AA274Ea6d06a480588eFf8fE517220a4

<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">🔎 Lihat di BscScan </a>
<a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x3810a078AA274Ea6d06a480588eFf8fE517220a4">💸 Trade di PancakeSwap</a>`,
                options: {
                    parse_mode: "HTML",
                    'disable_web_page_preview': true
                }
            },
            {
                command: 'website',
                description: 'Informasi Situs Web Resmi Vulcano.',
                response: data => '<strong>Kunjungi situs web kami di sini 👇</strong>',
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
                description: 'Informasi Whitepaper Resmi Vulcano.',
                response: data => '<strong>Lihat Whitepaper kami di sini 👇</strong>',
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
                description: 'Informasi Roadmap Resmi Vulcano.',
                response: data => '<strong>Lihat Roadmap kami di sini 👇</strong>',
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
                description: 'Komunitas Resmi Vulcano di seluruh dunia.',
                response: data => `<strong>🌍 Komunitas Resmi Vulcano 🌍</strong>`,
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `🇺🇸 Komunitas Global Bahasa Inggris`, url:'https://t.me/VULCANO_En_Group' }],
                        [{ text: `🇪🇸 Komunitas Spanyol`, url:'https://t.me/VULCANO_Grupo_Es' }],
                        [{ text: `🇧🇷 Komunitas Portugis`, url:'https://t.me/Vulcano_PT' }],
                        [{ text: `🇫🇷 Komunitas Prancis`, url:'https://t.me/vulcanoFR' }],
                        [{ text: `🇯🇵 Komunitas Jepang`, url:'https://t.me/vulcanojp' }],
                        [{ text: `🇨🇳 Komunitas China`, url:'https://t.me/VulcanoChina' }],
                        [{ text: `🇰🇷 Komunitas Korea`, url:'https://t.me/vulcanokr' }],
                        [{ text: `🇻🇳 Komunitas Vietnam`, url:'https://t.me/Vulcano_VN' }],
                        [{ text: `🇵🇭 Komunitas Filipina`, url:'https://t.me/vulcanoph' }],
                        [{ text: `🇹🇷 Komunitas Turki`, url:'https://t.me/vulcanoTR' }],
                        [{ text: `🇮🇳 Komunitas India`, url:'https://t.me/vulcanoIN' }],
                        [{ text: `🇮🇩 Komunitas Indonesia`, url:'https://t.me/vulcanoIDN' }],
                        [{ text: `🇳🇱 Komunitas Dutch`, url:'https://t.me/vulcanodutch' }],
                        [{ text: `🇸🇦 Komunitas Arabic`, url:'https://t.me/vulcanoarabic' }],
                        [{ text: `🟣 Discord`, url:'https://discord.gg/vulcanogame' }],
                        ]
                    })
                }
                
            },
            {
                command: 'price',
                description: 'Harga Token $VULC',
                custom: true
            }

        ];

        this.bannedWords = {
            words: ['hi','hey','hi guys','hello','nice project', 'hi good project', 'good project', 'good investment']
        }

        this.setCommands();

        this.listenCommands();

        this.listenBannedWords();

        this.listenBannedNames();

        this.priceCommand();

        //this.scheduleMessages();
        
    }
}

module.exports = BotIND;

