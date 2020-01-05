const Discord   = require("discord.js")
const colours   = require ("../colours.json");
const botconfig = require("../botconfig.json");
const hook = new Discord.WebhookClient('663181513948659723', '95K9vplxMkFH9bRSVXnhItbFaYHD82zJpVAbyJHq5rdkcnPAEnOTIONndb0nv4T3ROzX');
let something = require("../colours.json")

module.exports.run = async(bot, message, args) => {

    if (!message.content.startsWith(botconfig.prefix)) return; 

    async function deletemsg() {
        message.delete();

        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.send(`You have no permissions for it.`)
            return;
        }

        if (isNaN(args[0])) {
            message.channel.send('Please use a number as your arguments. \n Usage: ' + botconfig.prefix + 'del <amount>');
            return;
        }

        const fetched = await message.channel.fetchMessages({ limit: args[0] });

        let delembed = new Discord.RichEmbed()
    
        .setTitle("† Team Vaynce | Deleted Messages")
        .setColor("RANDOM")
        .addField("Messages:", `${fetched.size}`, true)
        .addField("Author:", `${message.author}`, true)
        .addField("Channel:", `${message.channel}`, true)
        .setTimestamp(Date.now())
        .setFooter('\nCreated by avoidfx.', 'https://cdn.discordapp.com/attachments/543719668544700427/659347313311088660/avoid_profilbild_end.png')
    
        hook.send(delembed)

        message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send(`Error: ${error}`));
        }

    deletemsg();
}

module.exports.help = {
    name: "delete",
    aliases: ["del"]
}
