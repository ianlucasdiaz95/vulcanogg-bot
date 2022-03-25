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

        const commands = this.commands.filter(command => command.hidden != true);

        try {

            await this.bot.setMyCommands(commands);

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


                    if(command.image != undefined){

                        await this.bot.sendPhoto(msg.chat.id, command.image, {caption: command.response(msg)}).then((result) => {
                                
                                
                        }).catch((error) => { console.log(error) });;

                    }else if(command.video != undefined){
                            
                        await this.bot.sendVideo(msg.chat.id, command.video, {caption: command.response(msg)}).then((result) => {
                                
                                
                        }).catch((error) => { console.log(error) });;
    
                    }else if (command.animation != undefined){

                        await this.bot.sendAnimation(msg.chat.id, command.animation, {caption: command.response(msg)}).then((result) => {
                                
                                
                        }).catch((error) => { console.log(error) });;

                    }else{
                            
                        await this.bot.sendMessage(msg.chat.id, command.response(msg), command.options).then((result) => {
                                
                        }).catch((error) => { console.log(error) });;
    
                    }

                    if(command.audio != undefined){
                        this.bot.sendVoice(msg.chat.id, command.audio).then((result) => {
                                
                                
                        }).catch((error) => { console.log(error) });;
                    }

                });

            } catch (error) {

                console.log(error);

            }

        }

    }

    async welcomeMessage(){

        try {

            this.bot.on('message', (msg) => {
        
                var chatId = msg.chat.id;

                if (msg.new_chat_members != undefined){

                    // Mute person if it's what is expected
                    if(this.welcome.mute != undefined && this.welcome.mute){
                        this.bot.restrictChatMember(chatId, msg.new_chat_member.id, {
                            can_send_messages: false,
                        });

                        //Escuchamos el click del botón
                        this.welcomeUnmuteOnClick();
                    }
                
                    var nameNewMember = msg.new_chat_member.first_name;
                
                    this.bot.sendMessage(chatId, this.welcome.message(nameNewMember), this.welcome.options).then(async (result) => {

                        if(this.welcome.mute == undefined || !this.welcome.mute){
                            await this.deleteMessage(chatId, result.message_id);
                        }else{
                            await this.deleteMessage(chatId, result.message_id, 60 * 1000);
                        }

                    }).catch((error) => { console.log(error) });
                }

            });

        } catch (error) {
            console.log(error);
        }
    }

    async welcomeUnmuteOnClick(){
        this.bot.on('callback_query', (callbackQuery) => {
            const action = callbackQuery.data;
            const user = callbackQuery.from;
            const msg = callbackQuery.message;
            
            if (action === 'unmute') {
                this.bot.answerCallbackQuery(callbackQuery.id, {text: this.welcome.muteText,show_alert: false});

                this.bot.restrictChatMember(msg.chat.id, user.id, {
                    can_send_messages: true,
                }).catch((error) => { console.log(error) });
            }

        });
    }

    async listenBannedWords(){

        try {

            this.bot.on('message', async (msg) => {

                var chatId = msg.chat.id;

                if(msg.text != undefined){

                    var bannedWords = this.bannedWords.words.filter(word => msg.text.toLowerCase() == word.toLowerCase());

                    if(bannedWords.length > 0){

                        await this.deleteMessage(chatId, msg.message_id, 0);

                    }

                }

            });

        } catch (error) {
            console.log(error);
        }

    }

    async priceCommand(){

        try {
            
            this.bot.onText(new RegExp('/price'), async (msg, match) => {

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

                }).catch((error) => { console.log(error) });;

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

