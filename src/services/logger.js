'use strict';

const betterLogging = require('better-logging');
const { Theme } = betterLogging;
const config = require('../config.json');

const fileName = new Date().toLocaleDateString().replace(/\//g, '-');
betterLogging(console, {
    color: Theme.dark,
    saveToFile: `./logs/${fileName}.log`,
});

console.logLevel = config.logLevel;
/**
 * debug: 4
 * log: 3
 * info: 2
 * warn: 1
 * error: 0
 * line: 1
 * turn off all logging: -1
 * default: 3
 */