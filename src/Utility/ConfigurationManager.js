"use strict";

require("dotenv").config();
const BotNameHashMap = require("./BotNameHashMap");
const BotToTokenMapper = new Object();

for (let botName in BotNameHashMap)
{
    BotToTokenMapper[botName] = process.env[botName];
}


class ConfigurationManager
{
    static FetchBotToken(botName) { return BotToTokenMapper[botName]; }
    static get ElevatedAccounts() { return process.env.ELEVATED.split(","); }
}

module.exports = ConfigurationManager;