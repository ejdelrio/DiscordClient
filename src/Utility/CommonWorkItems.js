"use strict";

class CommonWorkItems
{

    // Removes white space from the beginning and end of a string.
    // Parameters :
    //      str : instance of a string to filter whtie space from
    static RemoveWhiteSpace(str)
    {
        var startIndex;
        var endIndex;
        var filteredString;

        if(CommonWorkItems.IsNullOrWhiteSpace(str))
        {
            throw new ReferenceError("string is null or empty");
        }

        filteredString = new String();
        startIndex = 0;
        endIndex = 0;

        for(startIndex = 0; str[startIndex] == " "; startIndex++) { }
        for(endIndex = str.length - 1; str[endIndex] == " "; endIndex--) { }
        while(startIndex <= endIndex)
        {
            filteredString += str[startIndex];
            startIndex++;
        }

        return filteredString;
    }

    // Validates that a string is not null or just whitespace
    // Parameters :
    //      str : instance of string to validate
    static IsNullOrWhiteSpace(str)
    {
        if(!str)
        {
            return true;
        }

        if(typeof str != "string")
        {
            throw new TypeError("str must be an instance of a string.");
        }

        for(let i = 0; i < str.length; i++)
        {
            if(str[i] != " ")
            {
                return false;
            }
        }

        return true;
    }
}

module.exports = CommonWorkItems;