'use strict';

const betterLogging = require('better-logging');
const { Theme } = betterLogging;

const fileName = new Date().toLocaleDateString().replace(/\//g, '-');
betterLogging(console, {
    color: Theme.dark,
    saveToFile: `./logs/${fileName}.log`,
});