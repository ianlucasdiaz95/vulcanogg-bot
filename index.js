require("dotenv").config();

var bot = require('./bot');
require('./web')(bot);


var http = require("http");
setInterval(function() {
    http.get("http://arenaswap-bot.herokuapp.com");
}, 300000); // every 5 minutes (300000)