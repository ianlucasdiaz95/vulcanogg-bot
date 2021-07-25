const token = process.env.TOKEN || '1751039035:AAFALSaB5XB_SkYzCXYztM_YUMWFUxsCZGY';
var cron = require('node-cron');
var chatID = '-1001518577650';
//var chatID = '1872721997'
const Bot = require('node-telegram-bot-api');
let bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

//Log
bot.on('message', (msg) => {
  console.log(msg);
});


//Contrato
bot.on('message', (msg) => {
  const name = msg.from.first_name;
  if('text' in msg){
    const message = msg.text.toLowerCase();

    if(message.includes('contrato') || message.includes('contract')){
      bot.sendMessage(msg.chat.id, 
      `${name}, te dejamos la información del token:

Binance Smart Chain (BSC)

Contrato $ARENA: 
0x2a17dc11a1828725cdb318e0036acf12727d27a2

Contrato $PYRAM:
No revelado aún, sera anunciado en los próximos días.

`).then(() => {
        // reply sent!
      });
    }
  }

});

// Chart
bot.on('message', (msg) => {
  const name = msg.from.first_name;
  if('text' in msg){
    const message = msg.text.toLowerCase();

    if(message.includes('chart') || message.includes('grafico')){
      bot.sendMessage(msg.chat.id, 
      `${name}, acá podes ver el chart de $ARENA

  https://poocoin.app/tokens/0x2a17dc11a1828725cdb318e0036acf12727d27a2`).then(() => {
        // reply sent!
      });
    }
  }
});

// Lanzamiento
bot.on('message', (msg) => {
  const name = msg.from.first_name;
  if('text' in msg){
    const message = msg.text.toLowerCase();

    if(message.includes('lanzamiento') || ( message.includes('cuando') && message.includes('sale')) || ( message.includes('estreno') && message.includes('juego'))){
      bot.sendMessage(msg.chat.id, 
      `${name}, El juego sale en la semana del 26, aun no especificaron el dia.
      
Apenas tengamos la fecha exacta la vamos a estar comunicandolo en la sección de anuncios.`).then(() => {
        // reply sent!
      });
    }
  }
});

// Utilidad
bot.on('message', (msg) => {
  const name = msg.from.first_name;
  if('text' in msg){
    const message = msg.text.toLowerCase();

    if((message.includes('utilidad') && (message.includes('token') || message.includes('arena'))) || ( (message.includes('token') || message.includes('arena')) && message.includes('para') && message.includes('sirve')) || ( message.includes('token') && message.includes('utilidad'))){
      bot.sendMessage(msg.chat.id, 
      `Arena es el token nativo de ArenaSwap utilizado para farmear el resto de tokens, comprar NFTs (equipamiento, personajes, etc) y como recompensa.`).then(() => {
        // reply sent!
      });
    }
  }
});

// Staking
bot.on('message', (msg) => {
  const name = msg.from.first_name;
  if('text' in msg){
    const message = msg.text.toLowerCase();

    if( (message.includes('como') && (message.includes('staking') || message.includes('stake') || message.includes('stakear')) ) || (message.includes('hacer') && (message.includes('staking') || message.includes('stake') || message.includes('stakear')) )){
      bot.sendMessage(msg.chat.id, 
      `Te dejo un video para aprender a hacer staking con Arena https://youtu.be/kudDB72Y6BM`).then(() => {
        // reply sent!
      });
    }
  }
});

//Welcome
bot.on('message', (msg) => {
  const name = msg.from.first_name;
  if(msg.new_chat_participant || false){
    let messageNumber = Math.floor((Math.random() * 4) + 1);
    if (messageNumber == 1){
      let messageText = `Hola ${name}, bienvenido/a al grupo 🚀🚀🚀`;
      bot.sendMessage(chatID, messageText).then(() => {
        // reply sent!
      });
    } else if (messageNumber == 2) {
        let messageText = `Bienvenido/a ${name}, cualquier duda que tengas te respondemos con gusto 😄`;
        bot.sendMessage(chatID, messageText).then(() => {
          // reply sent!
        });
    } else if (messageNumber == 3) {
        let messageText = `Bienvenido/a ${name}, cualquier duda que tengas te respondemos con gusto 😄`;
        bot.sendMessage(chatID, messageText).then(() => {
          // reply sent!
        });
    } else {
        let messageText = `Hola ${name}, bienvenido/a al grupo ⚔️⚔️⚔️🚀`;
        bot.sendMessage(chatID, messageText).then(() => {
          // reply sent!
        });
    }
  }
  
});

// Cron 1
cron.schedule('35 0-23/2 * * *', () => {
  bot.sendMessage(chatID, `ARENASWAP OFICIAL ESPAÑOL

NOVEDADES!!

-Ya estan funcionando las campañas de anuncios en Poocoin 📊
-Estamos esperando aprobación de los anuncios en CoinGecko 📊
-Hicimos un partner con dos influencers franceses para que twiteen sobre nosotros 🇫🇷
-Ya enviamos y pagamos una solicitud a CoinMarketCap para que nos listen cuanto antes 🔥
-Seguimos creciendo en los grupos de Telegram todos los días (ya +10K suscriptores en el grupo de Telegram oficial en Ingles) 🪐

YAHOO FINANCE saco una nota acerca de ArenaSwap, podes leerla acá:

https://finance.yahoo.com/news/arenaswap-first-bsc-based-platform-073400660.html

La misma también salio en otras plataformas como Techbullion, Benzinga y Marketwatch.

Ya tenemos 4000+ holders / 5Millones en MCap / Llegamos a 16$ ATH!! / 2.2 Millones TVL
Estate atento para más novedades y quedate con nosotros que nos vamos a la LUNA ⚔️🚀🚀🚀⚔️`);
});


//Cron 2
cron.schedule('1 * * * *', () => {
  bot.sendMessage(chatID, `Web Oficial ArenaSwap
https://arenaswap.com/

⚔️ 📜Litepaper:
https://arenaswap.com/litepaper

Votanos!
https://coinhunt.cc/coin/220567031

Seguinos en Twitter
https://twitter.com/ArenaSwap

⚔️ 📝 Reddit:
https://www.reddit.com/r/ArenaSwap

Canal de Telegram en Ingles
https://t.me/arenaswap

Información del Token
Contrato: 0x2a17dc11a1828725cdb318e0036acf12727d27a2
https://www.coingecko.com/en/coins/arena-token

Recuerden mantener un 0,001 de ARENA en su Wallet si hacen staking para contar como HOLDERS. 
¡Es importante para la estabilidad de la moneda y el crecimiento del proyecto!`);
});

module.exports = bot;


///set_message@Poocoin_Pricebot <a href="https://arenaswap.com">Compra ARENA en ArenaSwap Oficial</a> | <a href="https://www.reddit.com/r/arenaswap/">Reddit</a> | <a href="https://twitter.com/arenaswap">Twitter Oficial</a> | <a href="https://t.me/arenaswap">Telegram INGLES</a>