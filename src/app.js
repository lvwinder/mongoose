require('./db/connection');
const yargs = require("yargs");
const command = process.argv[2];
const title = yargs.argv.title;
const actor = yargs.argv.actor;
const watched = yargs.argv.watched;

const app = () => {
    if (command === "add") {
        // add function goes here //
    } else if (command === "list") {
        // list function goes here //
    }
}
