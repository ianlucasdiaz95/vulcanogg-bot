require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

const CoinService = require('../../services/coin.service');

class Bot {
    constructor(config) {

        this.config = config;

        this.deleteTime = 30 * 1000;

        this.bot = new TelegramBot(config.token, {polling: true});

        this.bot.on("polling_error", (err) => console.log(err));

        this.coinService = new CoinService();

        console.log(this.config.username + ' Online.');
        
    }

    async setCommands() {
        try {

            await this.bot.setMyCommands(this.commands);

            await this.bot.getMyCommands();

        } catch (error) {

            console.log(error);

        }
    }

    async listenCommands(){

        const commands = this.commands.filter(command => command.custom != true);

        for(let command of commands){
            
            try {

                this.bot.onText(new RegExp('/'+command.command), async (msg, match) => {

                    this.deleteMessage(msg.chat.id, msg.message_id, 0);

                    if(command.image != undefined){

                        await this.bot.sendPhoto(msg.chat.id, command.image, {caption: command.response(msg)}).then((result) => {
                                
                                this.deleteMessage(msg.chat.id, result.message_id);
                                
                        });

                    }else if(command.video != undefined){
                            
                        await this.bot.sendVideo(msg.chat.id, command.video, {caption: command.response(msg)}).then((result) => {
                                
                                this.deleteMessage(msg.chat.id, result.message_id);
                                
                        });
    
                    }else if (command.animation != undefined){

                        await this.bot.sendAnimation(msg.chat.id, command.animation, {caption: command.response(msg)}).then((result) => {
                                
                                this.deleteMessage(msg.chat.id, result.message_id);
                                
                        });

                    }else{
                            
                        await this.bot.sendMessage(msg.chat.id, command.response(msg), command.options).then((result) => {
                                
                                this.deleteMessage(msg.chat.id, result.message_id);
                                
                        });
    
                    }

                    if(command.audio != undefined){
                        this.bot.sendVoice(msg.chat.id, command.audio).then((result) => {
                                
                                this.deleteMessage(msg.chat.id, result.message_id);
                                
                        });
                    }

                });

            } catch (error) {

                console.log(error);

            }

        }

    }

    async welcomeMessage(){
        this.bot.on('new_chat_members', (msg) => {
    
            var chatId = msg.chat.id;

            console.log(msg);
            
            if (msg.new_chat_members != undefined){
            
                var nameNewMember = msg.new_chat_member.first_name;
            
                this.bot.sendMessage(chatId, this.welcome.message(nameNewMember), this.welcome.options).then((result) => {
                    
                    this.deleteMessage(chatId, result.message_id);

                });
            }

        });
    }

    async priceCommand(){

        try {
            
            this.bot.onText(new RegExp('/price'), async (msg, match) => {

                this.deleteMessage(msg.chat.id, msg.message_id, 0);

                var coinInfo = await this.coinService.parseCoinInfo('bitcoin');
                this.bot.sendMessage(msg.chat.id, coinInfo, {
                    'disable_web_page_preview': true,
                    parse_mode : "HTML",
                    reply_markup: JSON.stringify({
                        inline_keyboard: [
                        [{ text: `💰 Swap $VULC`, url:'https://vulcano.gg' }],
                        [{ text: `📈 $VULC Chart`, url:'https://vulcano.gg' }],
                        ]
                    })
                }).then((result) => {
                    this.deleteMessage(msg.chat.id, result.message_id);
                });

            });

        } catch (error) {
            console.log(error);
        }
    }

    async deleteMessage(chatId, messageId, time = this.deleteTime){
        setTimeout(() => {
            this.bot.deleteMessage(chatId, messageId);
        }, time);
    }

    async banCommand(){

        try {
            
            this.bot.onText(/^\/ban (.+)/, (msg, match) => {

                if (msg.reply_to_message != undefined){
                    var replyId = msg.reply_to_message.from.id;
                    var replyName = msg.reply_to_message.from.first_name;
                    var days = match[1];
                }else{
                    var options = match[1].split(' ');
                    var replyId = options[1];
                    var replyName = replyId;
                    var days = options[2];
                }

                var chatId = msg.chat.id;
                var userId = msg.from.id;
                var fromName = msg.from.first_name;
                var messageId = msg.message_id;
                
                const ms = require("ms");

                
                this.bot.getChatMember(chatId, userId).then((data) => {

                    if((data.status == 'creator') || (data.status == 'administrator')){
                        
                        this.bot.kickChatMember(chatId, replyId, {until_date: Math.round((Date.now() + ms(days + " days"))/1000)}).then((result) => {
                            this.bot.deleteMessage(chatId, messageId);
                            this.bot.sendMessage(userId, "User " + replyName + " was banned for " + days + " days.")
                        });
                    } else {
                        this.bot.sendMessage(chatId, "Im sorry, " + fromName + ", you do not have privileges for that action.");
                    }
                })
            });

        } catch (error) {
            console.log(error);
        }

    }
}

module.exports = Bot;

