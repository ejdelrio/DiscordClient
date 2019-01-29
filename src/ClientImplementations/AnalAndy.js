"use strict";

const ClientImplementation = require("./ClientImplementation");

function timeoutDummyFunction()
{

}

class AnalAndy extends ClientImplementation
{
  constructor(token = null, autorun = false)
  {
    super(token, autorun);
  }

  eatass(
    sender,
    senderId,
    channelId,
    message,
    event,
    parameters)
  {
    var message = new Object();
    message.to = channelId;
    message.message = `Licking the butthole of ${ parameters[ 0 ] }`;;

    this.sendMessage(message);
  }

  tell(
    sender,
    senderId,
    channelId,
    message,
    event,
    parameters)
  {
    var targetedUserObject;
    var targetedUserName;
    var messageToSend;

    if (parameters.length < 2)
    {
      return this.sendMessage({
        to: channelId,
        message: "Mother fucker, learn how to write a command!"
      });
    }

    targetedUserName = parameters[ 0 ];
    messageToSend = parameters
      .slice(1, parameters.length)
      .join(" ", parameters.length);

    for (let userId in this.users)
    {
      let user = this.users[ userId ];
      if (user.username.toLowerCase() === targetedUserName.toLowerCase())
      {
        targetedUserObject = user;
        break;
      }
    }

    if (!targetedUserObject)
    {
      return this.sendMessage({
        to: channelId,
        message: "Who the fuck is that?"
      });
    }

    this.sendMessage({
      to: targetedUserObject.id,
      message: messageToSend
    });
  }

  spam(
    sender,
    senderId,
    channelId,
    message,
    event,
    parameters)
  {
    var spamAmount;
    var intervalCount;
    var intervalObject;

    spamAmount = parseInt(parameters.pop());

    if (spamAmount === NaN || spamAmount <= 0)
    {
      return this.sendMessage({
        to: channelId,
        message: "The last thingy has to be a positive number asswipe"
      })
    }

    if (parameters[ 0 ].toLowerCase() === "ejdelrio000")
    {
      parameters[ 0 ] = sender;
      setTimeout(() =>
      {
        this.sendMessage({
          to: senderId,
          message: "I would never do that to my master."
        });
      }, 1000);
    }

    intervalCount = 0;
    intervalObject = setInterval(function (client)
    {
      intervalCount++;
      client.tell(
        sender,
        senderId,
        channelId,
        message,
        event,
        parameters);

      if (intervalCount === spamAmount)
      {
        clearInterval(intervalObject)
      }
    }, 3000, this);
  }
}

module.exports = AnalAndy;