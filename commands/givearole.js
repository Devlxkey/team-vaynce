const Discord = require ("discord.js");
const colours = require ("../colours.json");
const botconfig = require("../botconfig.json");
let something = require("../colours.json")

module.exports.run = async (bot, message, args) => {
    if (message.member.roles.some(r=>["*"].includes(r.name))){
        if (!message.content.startsWith(botconfig.prefix)) return;
        let role = message.guild.roles.find(r => r.name == '● User')

        if (!role) return message.channel.send(`**${message.author.username}**, role not found`)
        
        message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(role))
        //message.channel.send(`**${message.author.username}**, role **${role.name}** was added to all online members`)
        message.delete();
    }
}

module.exports.help = {
    name: "givearole",
    aliases: ["gar"]
}
