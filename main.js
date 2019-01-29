"use strict";

const ConfigurationManager = require("./src/Utility/ConfigurationManager");

const AnalAndy = require("./src/ClientImplementations/AnalAndy");
const analAndyInstance = new AnalAndy(ConfigurationManager.FetchBotToken("Andy"), false);

analAndyInstance.Initialize();
analAndyInstance.connect();