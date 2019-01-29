"use strict";

const botNames =
[
    "Andy",
    "MrCucko"
];

function formatNamesToHashMap(hash, name)
{
    hash[name] = name;
    return hash;
}

module.exports = botNames
    .reduce(formatNamesToHashMap, {});