#!/usr/bin/env node
const yargs = require("yargs");
const dotenv = require( "dotenv");
const parse = require('parse-curl');
const info = require('./info');

dotenv.config();

info();

const options = yargs
    .usage("Usage: -c <curl>")
    .option("c", { alias: "curl", describe: "Your curl", type: "string", demandOption: true })
    .argv;

const out = parse(options.c);

console.log(JSON.stringify(out, null, 2))
