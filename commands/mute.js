const Discord = require ("discord.js");
const colours = require ("../colours.json");
const botconfig = require ("../botconfig.json");
const hook = new Discord.WebhookClient('662852174585528340', '79iuNzniv7y-JA7CcB12KHOPXpHkHOTlV4RwQbUm1I3WlhqLR4WvL3uxL3jIXjjG7tyZ');

module.exports.run = async (bot, message, args) => {

    if (message.member.roles.some(r=>["*"].includes(r.name))){
        if (!message.content.startsWith(botconfig.prefix)) return;

        if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You dont have permission to use this command.")
        if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permissions to add roles!")

        let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
        if (!mutee) return message.channel.send("Please supply a user to be muted!")

        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason given"

        muterole = message.guild.roles.find(x => x.name === '● Muted')
        if (!muterole) {
            try {
                muterole = await message.guild.createRole({
                    name: "● Muted",
                    color: "#020202",
                    permissions: []
                })
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        ADMINISTRATOR: false,
                        CREATE_INSTANT_INVITE: false,
                        KICK_MEMBERS: false,
                        BAN_MEMBERS: false,
                        MANAGE_CHANNELS: false,
                        MANAGE_GUILD: false,
                        ADD_REACTIONS: false,
                        VIEW_AUDIT_LOG: false,
                        VIEW_CHANNEL: true,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: false,
                        SEND_TTS_MESSAGES: false,
                        MANAGE_MESSAGES: false,
                        EMBED_LINKS: false,
                        ATTACH_FILES: false,
                        READ_MESSAGE_HISTORY: true,
                        MENTION_EVERYONE: false,
                        USE_EXTERNAL_EMOJIS: false,
                        EXTERNAL_EMOJIS: false,
                        CONNECT: true, 
                        SPEAK: false,
                        MUTE_MEMBERS: false, 
                        DEAFEN_MEMBERS: false,
                        MOVE_MEMBERS: false,
                        CHANGE_NICKNAME: false,
                        MANAGE_ROLES: false,
                        MANAGE_ROLES_OR_PERMISSIONS: false,
                        MANAGE_WEBHOOKS: false,
                        MANAGE_EMOJIS: false
                    })
                })
            }
            catch (e){
                console.log(e.stack);
            }
        }

        mutee.addRole(muterole.id).then(() => {
            message.delete();
            //mutee.send(`Hey, you have been in ${message.guild.name} for: ${reason}`)
            message.channel.send(`${mutee.user.username} was successfully muted.`)
        })
        
        let muteembed = new Discord.RichEmbed()
    
        .setTitle("† Team Vaynce | Muted Users")
        .setColor("RANDOM")
        .addField("Muted User:", `${mutee.user}`, true)
        .addField("Author:", `${message.author}`, true)
        .addField("Reason:", `${reason}`, true)
        .setTimestamp(Date.now())
        .setFooter('\nCreated by avoidfx.', 'https://cdn.discordapp.com/attachments/543719668544700427/659347313311088660/avoid_profilbild_end.png')
    
        hook.send(muteembed)

    }
}

module.exports.help = {
    name: "mute",
    aliases: ["m"]
}
