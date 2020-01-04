const Discord   = require("discord.js")
const colours   = require ("../colours.json");
const botconfig = require("../botconfig.json");

let something = require("../colours.json")

module.exports.run = async(bot, message, args) => {

    if (message.member.roles.some(r=>["*"].includes(r.name))){
        if (!message.content.startsWith(botconfig.prefix)) return; 

    let rEmbed = new Discord.RichEmbed()

    .setTitle("† Team Vaynce | Rules")
    .setDescription(`\n\nPlease read these rules carefully!
    ​
     - Don't ask for staff ranks. We pay attention to the chat and will choose who deem fit.
    ​
     - We don't tolerate spam. Doing so will result in a warning, mute and possible Ban.
    ​
     - Respect all users & staffs. We don't tolerate aggressive language towards any users in our server.
    ​
     - We don't tolerate advertising any type of sales or self promotion without owners permission, will result in possible ban.
    ​
     - Invite links to other Discord Servers without Admin permission are not allowed and will result in a possible ban.
    
     - Sending links without Admin permission aren't allowed and will result in a possible ban.

     - Staff members can change the rules with immediate effect.\n\n
     `)
    .setColor("RANDOM")
    .setTimestamp(Date.now())
    .setFooter('\nCreated by avoidfx.', 'https://cdn.discordapp.com/attachments/543719668544700427/659347313311088660/avoid_profilbild_end.png')

    message.channel.send(rEmbed)
    message.delete()
    }
}

module.exports.help = {
    name: "rules",
    aliases: ["r"]
}
