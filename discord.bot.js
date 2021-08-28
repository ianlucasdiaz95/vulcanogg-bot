const CoinService = require('./coin.service');
const token = 'ODgwOTg2NjYyMTc0MzQzMTY4.YSmQxA.mTWKDm-BS7p82oFYMK5MXpgKfUs';
const { GuildManager ,Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const guildId = '874882958681604126';
var cron = require('node-cron');

var coinService = new CoinService();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  var lastToken = 'pyram';

  cron.schedule('*/15 * * * * *', async () => {
    try {
      if(lastToken == 'arena'){
        var token = await coinService.getCoin('pyram-token');
      }else{
        var token = await coinService.getCoin('arena-token');
      }

      var price = token.market_data.current_price.usd.toLocaleString();
      var symbol = token.symbol.toUpperCase();
      
      lastToken = token.symbol;
      client.guilds.cache.get(guildId).me.setNickname(`${price} USD `);
      client.user.setActivity(`${symbol}/USD`, {type: 'WATCHING'}); 
      
    } catch (error) {
        console.log(error);
    }
  });

});

client.login(token);

module.exports = client;

