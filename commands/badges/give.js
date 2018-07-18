const Command = require("discord.js-commando").Command;

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: "give",
            group: "badges",
            memberName: "give",
            description: "Gives a user a badge.",
            args: [{
                key: "target",
                prompt: "Who shall we give the badge to?",
                type: "user",
            }],
        });
    }

    run(msg) {
        return msg.reply("Hi!")
    }
};