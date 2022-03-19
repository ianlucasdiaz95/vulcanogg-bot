const TelegramBot = require('node-telegram-bot-api');

class Bot {
    constructor(config) {

        this.config = config

        this.commands = [];

        this.bot = new TelegramBot(config.token, {polling: true});

        this.bot.on("polling_error", (err) => console.log(err));
        
    }

    async setCommands() {
        try {

             await this.bot.setMyCommands(this.commands);

             let commands = await this.bot.getMyCommands();

             console.log(commands);

        } catch (error) {

            console.log(error);

        }
    }

    async listenCommands(){

        for(let command of this.commands){

            try {

                this.bot.onText(new RegExp('/'+command.command), async (msg, match) => {

                    await this.bot.sendMessage(msg.chat.id, command.response);

                    if(command.audio != undefined){
                        this.bot.sendVoice(msg.chat.id, command.audio);
                    }

                });

            } catch (error) {

                console.log(error);

            }

        }

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

