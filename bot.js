const CoinService = require('./coin.service');
const token = process.env.TOKEN || '1751039035:AAFALSaB5XB_SkYzCXYztM_YUMWFUxsCZGY';
var cron = require('node-cron');
var chatID = '-1001518577650';
//var chatID = '1872721997'
const Bot = require('node-telegram-bot-api');
let bot;


var coinService = new CoinService();

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

function messageValidate(message){
  const minchar = 130;


  if(message.length >= minchar){
    return false;
  }

  return true;
}

//Log
bot.on('message', (msg) => {
  //console.log(msg);
});

//Comandos

bot.onText(/^\/price/, function(msg){
    var chatId = msg.chat.id;
    
    bot.sendMessage(chatId, `¿Qué precio necesitas?

⚔️⚔️ Precio ARENA:

/precio_arena ➡

🔥🔥 Precio PYRAM:

/precio_pyram ➡

Selecciona uno para ver su precio
`);
});

bot.onText(/^\/precio_arena/, async function(msg){
    var chatId = msg.chat.id;
    var coinInfo = await coinService.parseCoinInfo('arena-token')
    bot.sendMessage(chatId, coinInfo, {parse_mode : "HTML"});
});

bot.onText(/^\/precio_pyram/, async function(msg){
    var chatId = msg.chat.id;
    var coinInfo = await coinService.parseCoinInfo('pyram-token')
    bot.sendMessage(chatId, coinInfo, {parse_mode : "HTML"});
});


//Contrato ARENA
bot.on('message', (msg) => {
  if('text' in msg){
    
     const message = msg.text.toLowerCase();

    //Valido el mensaje
    if(!messageValidate(message)){
      return;
    }

    var texto = '';
    if(message.includes('compro') || message.includes('compra')){
      texto = 'Para comprar el token: '
    }

    if(message.includes('contrato') || message.includes('contract')){
      texto = 'Te dejo el contrato del token: '
    }

    if(((message.includes('compro') || message.includes('compra')) || (message.includes('contrato') || message.includes('contract'))) && message.includes('arena')){
      bot.sendMessage(msg.chat.id, 
      `${texto}
      
Contrato $ARENA: 
0x2a17dc11a1828725cdb318e0036acf12727d27a2

💰 Compra $ARENA

<a href="https://exchange.arenaswap.com/#/swap?outputCurrency=0x2A17Dc11a1828725cdB318E0036ACF12727d27a2">Hace click acá para ir al exchange✅</a>


Binance Smart Chain (BSC)

`,{parse_mode : "HTML", 'disable_web_page_preview': true}).then(() => {
        // reply sent!
      });
    }
  }

});

//Contrato PYRAM
bot.on('message', (msg) => {
  if('text' in msg){

    const message = msg.text.toLowerCase();

    //Valido el mensaje
    if(!messageValidate(message)){
      return;
    }

    var texto = '';
    if(message.includes('compro') || message.includes('compra')){
      texto = 'Para comprar el token: '
    }

    if(message.includes('contrato') || message.includes('contract')){
      texto = 'Te dejo el contrato del token: '
    }

    if(((message.includes('compro') || message.includes('compra')) || (message.includes('contrato') || message.includes('contract'))) && message.includes('pyram')){
      bot.sendMessage(msg.chat.id, 
      `${texto}

Contrato $PYRAM:
0xedeCfB4801C04F3EB394b89397c6Aafa4ADDa15B

💰 Compra $PYRAM

<a href="https://pancakeswap.finance/swap?outputCurrency=0xedeCfB4801C04F3EB394b89397c6Aafa4ADDa15B">Hace click acá para ir al exchange✅</a>

Binance Smart Chain (BSC)

`,{parse_mode : "HTML", 'disable_web_page_preview': true}).then(() => {
        // reply sent!
      });
    }
  }

});


// Chart ARENA
bot.on('message', (msg) => {
  if('text' in msg){

    const message = msg.text.toLowerCase();

    //Valido el mensaje
    if(!messageValidate(message)){
      return;
    }

    if(((message.includes('precio') && message.includes('?')) || message.includes('chart') || message.includes('grafico')) && message.includes('arena')){
      bot.sendMessage(msg.chat.id,
      `Gráfico y precio de $ARENA 🚀🚀🚀

https://charts.bogged.finance/0x2A17Dc11a1828725cdB318E0036ACF12727d27a2`, {'disable_web_page_preview': true}).then(() => {
        // reply sent!
      });
    }
  }
});

// Chart PYRAM
bot.on('message', (msg) => {
  if('text' in msg){

    const message = msg.text.toLowerCase();

    //Valido el mensaje
    if(!messageValidate(message)){
      return;
    }

    if(((message.includes('precio') && message.includes('?')) || message.includes('chart') || message.includes('grafico')) && message.includes('pyram')){
      bot.sendMessage(msg.chat.id, 
      `Gráfico y precio de $PYRAM 🚀🚀🚀

https://charts.bogged.finance/0xedeCfB4801C04F3EB394b89397c6Aafa4ADDa15B`,{'disable_web_page_preview': true}).then(() => {
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

    //Valido el mensaje
    if(!messageValidate(message)){
      return;
    }

    if(message.includes('lanza') || ( message.includes('cuando') && message.includes('sal')) || ( message.includes('estreno') && message.includes('juego'))){
      bot.sendMessage(msg.chat.id, 
      `${name}, los desarolladores estimaron la salida de Pyramid Royale para el domingo 1 de Agosto.`).then(() => {
        // reply sent!
      });
    }
  }
});

// Minimo para jugar
bot.on('message', (msg) => {
  const name = msg.from.first_name;
  if('text' in msg){
    const message = msg.text.toLowerCase();

    //Valido el mensaje
    if(!messageValidate(message)){
      return;
    }

    if((message.includes('minimo') && (message.includes('jugar') || message.includes('empezar') || message.includes('comenzar')) ) || ( message.includes('cuanto') || message.includes('necesito') && (message.includes('jugar') || message.includes('juego')))){
      bot.sendMessage(msg.chat.id, 
      `${name}, el minimo para jugar todavía no fue revelado, eso lo vamos a saber bien una vez este funcionando el juego. Lo que si esta confirmado es que se necesitaran ambas monedas.`).then(() => {
        // reply sent!
      });
    }
  }
});

// Utilidad Arena & Pyram
bot.on('message', (msg) => {
  
  if('text' in msg){
    const message = msg.text.toLowerCase();

    //Valido el mensaje
    if(!messageValidate(message)){
      return;
    }

    let extra = '';

    if((message.includes('diferencia') && message.includes('pyram') && message.includes('arena')) || ((message.includes('utilidad') || message.includes('us')) && (message.includes('token') || message.includes('arena'))) || ( (message.includes('token') && message.includes('arena')) && message.includes('para') && message.includes('sirve')) || ( message.includes('token') && (message.includes('utilidad') || message.includes('uso') || message.includes('usa')))){
      bot.sendMessage(msg.chat.id, 
      `$ARENA es el token nativo de ArenaSwap utilizado para farmear el resto de tokens, comprar NFTs (equipamiento, personajes, etc) y como recompensa.`).then(() => {
        
      });

      // Si sale ARENA cargo el mensaje para PYRAM
      extra = 'Ambas monedas son complementarias entre si y se necesitaran para jugar.';
    }

    //Utilidad PYRAM
    if( (message.includes('diferencia') && message.includes('pyram') && message.includes('arena')) || (message.includes('sirve') && message.includes('pyram')) || ((message.includes('utilidad') || message.includes('us')) && (message.includes('token') || message.includes('pyram'))) || ( (message.includes('token') || message.includes('pyram')) && message.includes('para') && message.includes('sirve')) || ( message.includes('pyram') && (message.includes('utilidad') || message.includes('uso') || message.includes('usa')))){
      bot.sendMessage(msg.chat.id, 
      `$PYRAM es el token que se utiliza para el juego Pyramid Royale. ${extra}`,{'disable_web_page_preview': true}).then(() => {
        // reply sent!
      });
    }
  }
});

// Staking
bot.on('message', (msg) => {
  
  if('text' in msg){
    const message = msg.text.toLowerCase();

    //Valido el mensaje
    if(!messageValidate(message)){
      return;
    }

    if( (message.includes('como') && (message.includes('staking') || message.includes('stake') || message.includes('stakear')) ) || (message.includes('hacer') && (message.includes('staking') || message.includes('stake') || message.includes('stakear')) )){
      bot.sendMessage(msg.chat.id, 
      `Te dejo un video para aprender a hacer staking con Arena https://youtu.be/kudDB72Y6BM`).then(() => {
        // reply sent!
      });
    }
  }
});

// Farm PYRAM
bot.on('message', (msg) => {
 
  if('text' in msg){
    const message = msg.text.toLowerCase();

    //Valido el mensaje
    if(!messageValidate(message)){
      return;
    }

    /*if( (message.includes('pyram') && message.includes('farm') && (message.includes('cuando') || message.includes('cuanto') || message.includes('falta')))){
      bot.sendMessage(msg.chat.id, 
      `Ya esta abierto el farm/stake de $PYRAM, pone a trabajar tus monedas en arenaswap.com`,{'disable_web_page_preview': true}).then(() => {
        // reply sent!
      });
    }*/
  }
});

// Impermanent loss
bot.on('message', (msg) => {
  
  if('text' in msg){
    const message = msg.text.toLowerCase();

    //Valido el mensaje
    if(!messageValidate(message)){
      return;
    }

    if( message.includes('impermanent') && message.includes('loss') && message.includes('?')){
      bot.sendMessage(msg.chat.id, 
      `¿Qué es el impermanent loss?

El impermanent loss sucede por la fluctuación de precio entre las dos monedas de tu LP.
Impermanent loss,como su nombre lo índica la misma es inpermanente esto quiere decir qué solo se aplica cuando haces tu retiro, les dejamos un calculo aproximado en caso
de necesitarlo acuerden se esto aplica para cualquier movimiento o fluctuación de las monedas en stake:

Cambio de precio.        Perdida

X1.5.                           2%
X2.                             5.7%
X3.                             13.4%
X4.                             20%
X5.                             25.5%`,{'disable_web_page_preview': true}).then(() => {
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
        let messageText = `Bienvenido/a ${name}, estamos para ayudarte 😄`;
        bot.sendMessage(chatID, messageText).then(() => {
          // reply sent!
        });
    } else {
        let messageText = `Hola ${name}, bienvenido/a al grupo ⚔️⚔️⚔️🚀`;
        bot.sendMessage(chatID, messageText,[], true).then(() => {
          // reply sent!
        });
    }
  }
  
});

// Cron 1
cron.schedule('35 0-23/2 * * *', () => {
  bot.sendMessage(chatID, `Los desarolladores estimaron la salida de Pyramid Royale para el domingo 1 de Agosto.
  
Horario a confirmar.`,{'disable_web_page_preview': true});
});


//Cron 2
cron.schedule('1 */4 * * *', () => {
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

Canal de Telegram Oficial $PYRAM
https://t.me/ArenaSwapPyramid

Contrato $ARENA: 
0x2a17dc11a1828725cdb318e0036acf12727d27a2

💰 Compra $ARENA

<a href="https://exchange.arenaswap.com/#/swap?outputCurrency=0x2A17Dc11a1828725cdB318E0036ACF12727d27a2">CLICK ACÁ PARA COMPRAR $ARENA 🔥</a>

Contrato $PYRAM:
0xedeCfB4801C04F3EB394b89397c6Aafa4ADDa15B

💰 Compra $PYRAM

<a href="https://pancakeswap.finance/swap?outputCurrency=0xedeCfB4801C04F3EB394b89397c6Aafa4ADDa15B">CLICK ACÁ PARA COMPRAR $PYRAM 🔥</a>

Recuerden mantener un 0,001 de ARENA en su Wallet si hacen staking para contar como HOLDERS. 
¡Es importante para la estabilidad de la moneda y el crecimiento del proyecto!`,{parse_mode : "HTML", 'disable_web_page_preview': true});
});
console.log(new Date());
//Cron 2
cron.schedule('0 14 * * *', () => {
  bot.sendMessage(chatID, `✅* Tareas diarias de la comunidad *✅

Entra en CoinGecko y hace un Scroll y algunos clicks para mostrar que hay tráfico🔥⬆️
https://www.coingecko.com/en/coins/arena-token?utm_medium=telegram&utm_source=ArenaSwapES

Vota por ArenaSwap 🔥⬆️
https://coinsniper.net/coin/5626?utm_medium=telegram&utm_source=ArenaSwapES

Vota por PYRAM 🔥⬆️
https://coinsniper.net/coin/9630?utm_medium=telegram&utm_source=ArenaSwapES

Votanos en CMC 🔥⬆️

PYRAM
https://coinmarketcap.com/currencies/pyram-token/?utm_medium=telegram&utm_source=ArenaSwapES

ARENA
https://coinmarketcap.com/currencies/arena-token/?utm_medium=telegram&utm_source=ArenaSwapES

Seguinos, Comenta  y vota  🔥⬆️
https://www.reddit.com/r/arenaswap?utm_medium=telegram&utm_source=ArenaSwapES

Seguinos, dejanos un like  y retweet  🔥⬆️

https://twitter.com/arenaswap?utm_medium=telegram&utm_source=ArenaSwapES`,{'disable_web_page_preview': true});
});

//Cron 3
/*cron.schedule('40 0-23/3 * * *', () => {
  bot.sendMessage(chatID, `⭐️ NOTICIAS DE MARKETING ⭐️

- Se encontró un acuerdo con 2 Youtubers para realizar Reviews de ArenaSwap. Una hoy y otra máximo mañana.

- Se está entrevistando a 2 MarketMakers para trabajar para ArenaSwap. Ambos brindan servicios completos de market boost para facilitar el listado en Exchanges.

- Mañana habra un Voice Chat a la mañana!! Y se presentará al nuevo Marketing Manager para encarar grandes proyectos.

- Se están analizando partnership para luego del lanzamiento del juego. Y una de ella es con una plataforma con 330m$ de TVL, creo que saben cual es!!

- Se están negociando nuevos listados (Kucoin, Bitmart, gate.io, etc)

- Es posible que hoy Apeboard nos liste, no está confirmado. Se están negociando algunos aspectos tecnicos.

Seguimos creciendo! 🚀🚀🚀

arenaswap.com
`,{'disable_web_page_preview': true});
});*/

//Cron 4
cron.schedule('55 0-23/3 * * *', () => {
  bot.sendMessage(chatID, `Ya estamos listados en CoinMarketCap! 🚀

Dejanos tu estrellita para que seamos trend 🔥⬆️

1. Ir a https://coinmarketcap.com/currencies/pyram-token/
2. Click ⭐ y votanos 👍

1. Ir a https://coinmarketcap.com/currencies/arena-token/
2. Click ⭐ y votanos 👍

`,{'disable_web_page_preview': true});
});

//Cron 6
cron.schedule('34 0-23/10 * * *', () => {
  bot.sendMessage(chatID, `Para los que estan en stake LP consideren la perdida impermanente
(Impermanent Loss).

La misma solo se aplica cuando haces tu retiro, les dejamos un calculo aproximado en caso
de necesitarlo recuerden que esto aplica para cualquiera de las dos monedas que tengan en su LP:

Cambio de precio.        Perdida

X1.5.                     2%
X2.                       5.7%
X3.                       13.4%
X4.                       20%
X5.                       25.5%
`,{'disable_web_page_preview': true});
});

module.exports = bot;

///set_message@Poocoin_Pricebot ⚔️ Querés el precio de PYRAM? Hace click en el link debajo <a href="https://charts.bogged.finance/0xedeCfB4801C04F3EB394b89397c6Aafa4ADDa15B">Ver precio PYRAM</a>