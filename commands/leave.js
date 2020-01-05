const Discord = require ("discord.js");
const ytdl = require ('ytdl-core');
const botconfig = require("../botconfig.json");

module.exports.run = async (client, message, args, ops) => {

    if (!message.member.roles.some(r=>["● DJ"].includes(r.name))) {
        if (!message.content.startsWith(botconfig.prefix)) return;
        message.channel.send('You need the DJ Role');
    }
    else {
        if (!message.content.startsWith(botconfig.prefix)) return;

        if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');

        if (!message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot isn\'t connected to the guild.');

        if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Sorry, you aren\'t connected to the same channel.');

        message.guild.me.voiceChannel.leave();
    }
}

module.exports.help = {
    name: "leave",
    aliases: ["l"]
}
