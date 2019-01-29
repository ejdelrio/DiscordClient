"use strict";

const Context = require("./Context");
const HealthEvent = require("./HealthEvent");

class Logger
{
    static Log(healthEvent, debugContext, message)
    {
        if(!healthEvent || !healthEvent instanceof Context)
        {
            throw new TypeError(`First parameter of Logger.Log must be a static member of the HealthEvent class.`);
        }

        if(!message || typeof message != "string")
        {
            throw new TypeError("Third parameter of Logger.Log must be an instance of a string.");
        }

        debugContext(message);
    }
}