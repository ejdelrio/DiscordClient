"use strict";

const Discord = require("discord.io");
const CommonWorkItems = require("../Utility/CommonWorkItems");

class Clientimplementation extends Discord.Client
{
    constructor(token=null, autorun=false)
    {
        super({
            auth: token,
            autorun
        });
    }

    MessageEventHandler(
        sender,
        senderId,
        channelId,
        message,
        event)
    {
        var parsedMessageArray;

        parsedMessageArray = Clientimplementation.ParseMessageInput(message);
    }

    static ParseMessageInput(message)
    {
        var filteredMessage;
        var inQuotation;
        var messageContent;
        var singleParameter;

        filteredMessage = CommonWorkItems.RemoveWhiteSpace(message);

        messageContent = new Array();
        singleParameter = new String();

        for(let i = 0; i < filteredMessage.length; i++)
        {
            let character = filteredMessage[i];
            
            if(character === " " && !inQuotation)
            {
                if(!!singleParameter) messageContent.push(singleParameter);

                singleParameter = new String();
                continue;
            }

            if(character === "\"")
            {
                inQuotation = !inQuotation;
                continue;
            }

            singleParameter += character;
        }

        messageContent.push(singleParameter);
        return messageContent;
    }
}

module.exports = Clientimplementation;