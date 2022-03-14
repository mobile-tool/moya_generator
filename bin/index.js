#!/usr/bin/env node
const yargs = require("yargs");
const dotenv = require( "dotenv");
const parse = require('@bany/curl-to-json');
const info = require('./info');
const gen = require('./gen_to_moya');

dotenv.config();

info();

const options = yargs
    .usage("Usage: -c <curl>")
    .option("c", { alias: "curl", describe: "Your curl", type: "string", demandOption: true })
    .argv;
    
const moyaOut = gen(parse(options.c));

console.log(moyaOut)