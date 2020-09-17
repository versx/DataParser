'use strict';

const betterLogging = require('better-logging');
const { Theme } = betterLogging;

betterLogging(console, {
    color: Theme.dark,
    saveToFile: `./logs/${Date.now()}.log`,
});