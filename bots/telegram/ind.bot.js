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

<a href="https://bscscan.com/token/0x3810a078AA274Ea6d06a480588eFf8fE517220a4">π Lihat di BscScan </a>
<a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x3810a078AA274Ea6d06a480588eFf8fE517220a4">πΈ Trade di PancakeSwap</a>`,
                options: {
                    parse_mode: "HTML",
                    'disable_web_page_preview': true
                }
            },
            {
                command: 'website',
                description: 'Informasi Situs Web Resmi Vulcano.',
                response: data => '<strong>Kunjungi situs web kami di sini π</strong>',
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
                description: 'Informasi Whitepaper Resmi Vulcano.',
                response: data => '<strong>Lihat Whitepaper kami di sini π</strong>',
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
                description: 'Informasi Roadmap Resmi Vulcano.',
                response: data => '<strong>Lihat Roadmap kami di sini π</strong>',
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
                description: 'Komunitas Resmi Vulcano di seluruh dunia.',
                response: data => `<strong>π Komunitas Resmi Vulcano π</strong>`,
                options : {
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `πΊπΈ Komunitas Global Bahasa Inggris`, url:'https://t.me/VULCANO_En_Group' }],
                        [{ text: `πͺπΈ Komunitas Spanyol`, url:'https://t.me/VULCANO_Grupo_Es' }],
                        [{ text: `π§π· Komunitas Portugis`, url:'https://t.me/Vulcano_PT' }],
                        [{ text: `π¨π³ Komunitas China`, url:'https://t.me/VulcanoChina' }],
                        [{ text: `π°π· Komunitas Korea`, url:'https://t.me/vulcanokr' }],
                        [{ text: `π»π³ Komunitas Vietnam`, url:'https://t.me/Vulcano_VN' }],
                        [{ text: `π΅π­ Komunitas Filipina`, url:'https://t.me/vulcanoph' }],
                        [{ text: `πΉπ· Komunitas Turki`, url:'https://t.me/vulcanoTR' }],
                        [{ text: `π?π© Komunitas Indonesia`, url:'https://t.me/vulcanoIDN' }],
                        [{ text: `π£ Discord`, url:'https://discord.gg/vulcanogame' }],
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

        this.setCommands();

        this.listenCommands();

        this.listenBannedWords();

        this.listenBannedNames();

        this.priceCommand();
        
    }
}

module.exports = BotIND;

