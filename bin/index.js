#!/usr/bin/env node
const yargs = require("yargs");
const dotenv = require( "dotenv" );
const info = require('./info');

dotenv.config();

info();
const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;
