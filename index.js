const config = require("./config.json");

const path = require("path");

const Commando = require("discord.js-commando");
const client = new Commando.Client({
    owner: config.ownerID,
});

client.registry.registerDefaults();
client.registry.registerGroups([
    ["badges", "Badges"],
]);
client.registry.registerCommandsIn(path.join(__dirname, "commands"));

client.login(config.token);