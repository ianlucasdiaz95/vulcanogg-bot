require("dotenv").config();

var bot = require('./telegram.bot');
var discordBot = require('./discord.bot');
require('./web')(bot);
