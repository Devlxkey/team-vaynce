const Discord = require ("discord.js");
const colours = require ("../colours.json");
const botconfig = require("../botconfig.json");
let something = require("../colours.json")

module.exports.run = async (bot, message, args) => {

    if (message.member.roles.some(r=>["† user."].includes(r.name))){
        if (!message.content.startsWith(botconfig.prefix)) return;

        let botembed = new Discord.RichEmbed()
        
        .setTitle("† Team Vaynce")
        .setColor("RANDOM")
        .setDescription("Some information about me :D")
        .addField("Developer:", "avoidfx.")
        .addField("Created:", "26. November. 2019")
        .addField("Prefix", `${botconfig.prefix}`)
    
        message.channel.send(botembed)
    }
}

module.exports.help = {
    name: "info",
    aliases: ["i"]
}
