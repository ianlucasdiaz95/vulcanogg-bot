const botConfig = require('./botConfig');
const BotEN = require('./telegram/en.bot');
const BotES = require('./telegram/es.bot');
const BotPT = require('./telegram/pt.bot');
const BotCN = require('./telegram/cn.bot');
const BotKR = require('./telegram/kr.bot');
const BotIN = require('./telegram/in.bot');
const BotIND = require('./telegram/ind.bot');
const BotPH = require('./telegram/ph.bot');
const BotTR = require('./telegram/tr.bot');
const BotFR = require('./telegram/fr.bot');
const BotSA = require('./telegram/sa.bot');
const BotVN = require('./telegram/vn.bot');
const BotNL = require('./telegram/nl.bot');
const BotDE = require('./telegram/de.bot');

const BotTEST = require('./telegram/test.bot');

require('dotenv').config();

class InitBots {
    constructor() {

        if(process.env.NODE_ENV == 'production'){
            
            //new BotIN(botConfig.in);
            //new BotFR(botConfig.fr);
            //new BotNL(botConfig.nl);
            //new BotSA(botConfig.sa);

            new BotEN(botConfig.en);
            new BotES(botConfig.es);
            new BotPT(botConfig.pt);
            new BotKR(botConfig.kr);
            new BotCN(botConfig.cn);
            new BotIND(botConfig.ind);
            new BotPH(botConfig.ph);
            new BotTR(botConfig.tr);
            new BotVN(botConfig.vn);
            new BotDE(botConfig.de);
            
        }else if(process.env.NODE_ENV == 'development'){

            new BotTEST(botConfig.test);

        }

        
    }

}

module.exports = InitBots;