require('dotenv').config();

//APIS
const TelegramBot = require('node-telegram-bot-api');
const { ETwitterStreamEvent } = require('twitter-api-v2');

//UTILS
const { stripAndReplaceUrls } = require('../../utils/utils');

//SERVICES
const CoinService = require('../../services/coin.service');
const BitmartCoinService = require('../../services/bitmart.coin.service');
const TwitterService = require('../../services/twitter.service');

//PLUGINS
const schedule = require('node-schedule');
const moment = require('moment');
const Web3 = require('web3');

class Bot {
    constructor(config) {

        //Bot
        this.bot = new TelegramBot(config.token, {polling: true});

        //Services
        this.coinService = new CoinService();
        this.twitterService = new TwitterService();
        this.bitmartCoinService = new BitmartCoinService();


        //Variables
        this.config = config;

        this.deleteTime = 30 * 1000;

        this.timers = {
            priceCommand : moment(),
        }

        this.bannedNames = {
            names: ['contract' ,'presale', 'pre-sale', 'pancakeswap'],
        }

        this.bannedWords = {
            exact: ['hi','hey','hi guys','hello','nice project', 'hi good project', 'good project', 'good investment', 'pinksale', '.finance'],
            contains: ['pinksale', '.finance']
        }

        this.coin = { 
            id: 'vulcano-2',
            name: 'Vulcano',
            symbol: 'VULC',
            chart: false
        };
        
        // Logging
        this.bot.on("polling_error", (err) => console.log(err));

        //this.bot.on("message", (msg) => console.log(msg));

        console.log(this.config.username + ' Online.' + ' at ' + new Date());
        
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
                                
                                
                        }).catch((error) => { console.log(error) });

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

        let banTime = 172800; // 48hs

        try {

            this.bot.on('message', async (msg) => {

                var chatId = msg.chat.id;

                if(msg.text != undefined){

                    //Exact match
                    var bannedExact = this.bannedWords.exact.filter(word => msg.text.toLowerCase() == word.toLowerCase());

                    if(bannedExact.length > 0){

                        await this.deleteMessage(chatId, msg.message_id, 0);

                        await this.bot.banChatMember(chatId, msg.from.id, {until_date: banTime ,revoke_messages: true});

                    }

                    //Text contains match
                    var bannedContains = this.bannedWords.contains.filter(word => msg.text.toLowerCase().includes(word.toLowerCase()));

                    if(bannedContains.length > 0){

                        await this.deleteMessage(chatId, msg.message_id, 0);

                        await this.bot.banChatMember(chatId, msg.from.id, {until_date: banTime ,revoke_messages: true});

                    }

                }

            });

        } catch (error) {
            console.log(error);
        }

    }

    async listenBannedNames(){

        let banTime = 172800; // 48hs

        try {

            this.bot.on('message', async (msg) => {

                var chatId = msg.chat.id;

                if(msg.from != undefined){

                    var bannedNames = this.bannedNames.names.filter(name => msg.from.first_name.toLowerCase().includes(name.toLowerCase()));

                    if(bannedNames.length > 0){

                        await this.deleteMessage(chatId, msg.message_id, 0);

                        await this.bot.banChatMember(chatId, msg.from.id, {until_date: banTime, revoke_messages: true});

                    }

                }

            });

        } catch (error) {
            console.log(error);
        }

    }

    async scheduleMessages(){

        for(let recurrentMessage of this.recurrentMessages){

            let rule = recurrentMessage.rule;
            let message = recurrentMessage.message;
            let options = recurrentMessage.options;

            schedule.scheduleJob(rule, () => {

                try {
                    this.bot.sendMessage(this.config.chat_id, message, options);
                    
                } catch (error) {
                    console.log(error);
                }
                
            });

        }
    
    }

    async priceCommand(){

        try {
            this.bot.onText(new RegExp('/price'), async (msg, match) => {

                // check if message was sent 10 seconds ago
                console.log(moment().diff(moment(this.timers.priceCommand).add(10, 'seconds'), 'seconds'));
                if( moment().diff(moment(this.timers.priceCommand).add(10, 'seconds'), 'seconds') <= 0 ){
                    

                this.bot.sendMessage(msg.chat.id, `Only one at a time please! Wait a few seconds. 🤖`)
                        .then(async (result) => {
                            await this.deleteMessage(msg.chat.id, result.message_id, 5 * 1000);
                        })
                        .catch((error) => { console.log(error) });

                }else{

                    var parsedInfo = await this.coinService.parseCoinInfo(this.coin.id);

                    if(this.coin.chart){

                        var chart = await this.coinService.getChartImage(this.coin.id);

                        await this.bot.sendPhoto(msg.chat.id, chart.url, {caption: parsedInfo, 'disable_web_page_preview': true,
                            parse_mode : "HTML",
                            reply_markup: JSON.stringify({
                                inline_keyboard: [
                                [{ text: `💰 Swap $VULC`, url:'https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x3810a078AA274Ea6d06a480588eFf8fE517220a4' }],
                                [{ text: `📈 $VULC Chart`, url:'https://poocoin.app/tokens/0x3810a078aa274ea6d06a480588eff8fe517220a4' }],
                                ]
                            })
                        }).then((result) => {

                                this.timers.priceCommand = moment();

                        }).catch((error) => { console.log(error) });

                    }else{

                        this.bot.sendMessage(msg.chat.id,parsedInfo ,{
                            'disable_web_page_preview': true,
                            parse_mode : "HTML",
                            reply_markup: JSON.stringify({
                                inline_keyboard: [
                                [{ text: `💰 Swap $VULC`, url:'https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x3810a078AA274Ea6d06a480588eFf8fE517220a4' }],
                                [{ text: `📈 $VULC Chart`, url:'https://poocoin.app/tokens/0x3810a078aa274ea6d06a480588eff8fe517220a4' }],
                                ]
                            })
                        }).then((result) => {

                            this.timers.priceCommand = moment();

                        }).catch((error) => { console.log(error) });

                    }

                }

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


    async listenTweets(){

        try {
            const stream = await this.twitterService.getStream();

            stream.on(ETwitterStreamEvent.Data, async (eventData) => {

                // Do not send this statuses
                if(eventData.retweeted_status != undefined || eventData.delete != undefined){
                    return;
                }

                let text = eventData.text;
                let images = false;
                let urls = false;

                if(eventData.extended_tweet != undefined){

                    text = eventData.extended_tweet.full_text;

                    images = eventData.extended_tweet.entities.media;
                    urls = eventData.extended_tweet.entities.urls;

                    // Removing all urls from tweet and replacing them with real urls
                    text = stripAndReplaceUrls(text, urls);


                }

                if(images){

                    let image = images[0].media_url_https;

                    await this.bot.sendPhoto(this.config.chat_id, image, {caption: text}).then((result) => {

                        this.bot.pinChatMessage(this.config.chat_id, result.message_id);
                                
                    }).catch((error) => { console.log(error) });

                }else{

                    this.bot.sendMessage(this.config.chat_id,text).then((result) => {

                        this.bot.pinChatMessage(this.config.chat_id, result.message_id);
                    });
                }

                
            });
        } catch (error) {
            console.log(error);

            
        }
       
    }

    async testEnviroment(){

        

    }
}

module.exports = Bot;

