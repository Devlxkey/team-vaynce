const Discord = require ("discord.js");
const colours = require ("../colours.json");
const botconfig = require ("../botconfig.json");


module.exports.run = async (bot, message, args) => {

    if (message.member.roles.some(r=>["Leader"].includes(r.name))){
        if (!message.content.startsWith(botconfig.prefix)) return;
        
       
    }
}

module.exports.help = {
    name: "tempmute",
    aliases: ["tmute"]
}