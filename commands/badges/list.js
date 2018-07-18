const Command = require("discord.js-commando").Command;
const badges = Object.values(require("./../../config.json").challenges);

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: "list",
            group: "badges",
            memberName: "list",
            description: "Lists all badges.",
        });
    }

    run(msg) {
        return msg.reply(`There are ${badges.length} badges: **${badges.map(badge => badge.name).join("**, **")}**`)
    }
};