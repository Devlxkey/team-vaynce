const Discord = require ("discord.js");
const colours = require ("../colours.json");
const botconfig = require("../botconfig.json");
let something = require("../colours.json")

module.exports.run = async (bot, message, args) => {

    if (message.member.roles.some(r=>["*"].includes(r.name))){
        if (!message.content.startsWith(botconfig.prefix)) return;

        if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You do not have permission to use this command.");

        if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to add roles.");

        let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!mutee) return message.channel.send("Please supply a user to be muted!");

        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason given"

        let muterole = message.guild.roles.find(role => role.name === "● Muted")
        if (!muterole) return message.channel.send("There is no mute role to remove")

        mutee.removeRole(muterole.id).then(() => {
            message.delete()
            message.channel.send(`${mutee.user.username} was unmuted!`)
        })
    }
}

module.exports.help = {
    name: "unmute",
    aliases: ["unm"]
}