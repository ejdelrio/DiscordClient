"use strict";

const Discord = require("discord.io");
const CommonWorkItems = require("../Utility/CommonWorkItems");

class Clientimplementation extends Discord.Client
{
    constructor(token = null, autorun = false)
    {
        super({
            token,
            autorun
        });
    }

    ReadyEventHandler()
    {
        console.log(`${ this.username } with ID : ${ this.id }`);
    }

    DisconnectEventHandler(error, callback)
    {
        console.log(error);
        console.log(callback);
    }

    GenerateDefaultResponse()
    {

    }

    GenerateErrorMessage(
        sender,
        senderId,
        channelId,
        message,
        event,
        error,
        parameters)
    {
        this.sendMessage({
            to: channelId,
            message: "???????"
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
        var botUserName;
        var operationName;
        var parameters;

        parsedMessageArray = Clientimplementation.ParseMessageInput(message);
        botUserName = parsedMessageArray[ 0 ];
        operationName = parsedMessageArray[ 1 ];

        if (!botUserName || botUserName.toLowerCase() != this.username.toLowerCase()) return;
        if (!operationName) return this.GenerateDefaultResponse();

        parameters = parsedMessageArray.length > 2 ?
            parsedMessageArray.slice(2, parsedMessageArray.length) :
            new Array();

        try
        {
            this[ operationName.toLowerCase() ](
                sender,
                senderId,
                channelId,
                message,
                event,
                parameters);
        }
        catch (error)
        {
            console.log(error);
            this.GenerateErrorMessage(
                sender,
                senderId,
                channelId,
                message,
                event,
                error,
                parameters)
        }

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

        for (let i = 0; i < filteredMessage.length; i++)
        {
            let character = filteredMessage[ i ];

            if (character === " " && !inQuotation)
            {
                if (!!singleParameter) messageContent.push(singleParameter);

                singleParameter = new String();
                continue;
            }

            if (character === "\"")
            {
                inQuotation = !inQuotation;
                continue;
            }

            singleParameter += character;
        }

        messageContent.push(singleParameter);
        return messageContent;
    }

    Initialize()
    {
        this.on("ready", this.ReadyEventHandler);
        this.on("message", this.MessageEventHandler);
        this.on("disconnect", this.DisconnectEventHandler);
    }
}

module.exports = Clientimplementation;