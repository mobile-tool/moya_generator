#!/usr/bin/env node
const yargs = require("yargs");
const dotenv = require( "dotenv");
const parse = require('@bany/curl-to-json');
const info = require('./info');

dotenv.config();

info();

const options = yargs
    .usage("Usage: -c <curl>")
    .option("c", { alias: "curl", describe: "Your curl", type: "string", demandOption: true })
    .argv;

const out = parse(options.c);
console.log(out)
// var out = parse(`curl -X --request GET 'http://localhost:3001/search?search=react&asdfa=asfdaf' \
// --header 'xapi-key: 21432139847290402402190' \
// --header 'Content-Type: text/html' \
// --data-raw '{
//     "name": "string",
//     "name2": "string"
// }'`);