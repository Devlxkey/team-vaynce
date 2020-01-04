const Discord   = require("discord.js")
const colours   = require ("../colours.json");
const botconfig = require("../botconfig.json");

let something = require("../colours.json")

module.exports.run = async(bot, message, args) => {

    if (message.member.roles.some(r=>["● User"].includes(r.name))){
        if (!message.content.startsWith(botconfig.prefix)) return; 
            if (!message.member.roles.some(r=>["● Discord Mod"].includes(r.name)))
            {
                let userCMDS = new Discord.RichEmbed()

                .setTitle("† Team Vaynce | Command List")
                .setDescription("Prefix: **.**")
                .addField("Normal Commands:", ".help\n.info\n", true)
                .setColor("RANDOM")
                .setTimestamp(Date.now())
                .setFooter('Created by avoidfx.', 'https://cdn.discordapp.com/attachments/543719668544700427/659347313311088660/avoid_profilbild_end.png')
            
                message.channel.send(userCMDS)
            }
            else
            {   
                let adminCMDS = new Discord.RichEmbed()

                .setTitle("† Team Vaynce | Command List")
                .setDescription("Prefix: **.**")
                .addField("Admin Commands:", ".del <amount>\n.mute <reason>\n.unmute", true)
                .addField("Normal Commands:", ".help\n.info\n", true)
                .setColor("RANDOM")
                .setTimestamp(Date.now())
                .setFooter('Created by avoidfx.', 'https://cdn.discordapp.com/attachments/543719668544700427/659347313311088660/avoid_profilbild_end.png')

                message.channel.send(adminCMDS)
            }
    }
}

module.exports.help = {
    name: "help",
    aliases: ["h"]
}
