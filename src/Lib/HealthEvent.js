"use strict";

const Context = require("./Context");

class HealthEvent
{
    static get InformationEvent() { return new Context("InformationEvent"); }
    
    static get ErrorEvent() { return new Context("ErrorEvent"); }
}