const botconfig = require("./botconfig.json");
const login     = require("./login.json");
const Discord   = require("discord.js");
const ownerID   = '381538605685932032';
const active    = new Map();
const colours   = require ("./colours.json");
const fs        = require("fs");
const path      = require('path');
const bot       = new Discord.Client({ disableEveryone: true });
const client    = new Discord.Client();
const logs = new Discord.WebhookClient('694326502195593226', 'ofv9NLfVRQ20E8LWu2QKtXhJsyfYL_Z4KpekcLeYlz6O_wsQGnQmaiyIMkfASl-iUdzp');
const welcomer = new Discord.WebhookClient('663181391546023948', '0_6rAzDOJWBRDl3FfSjwmX5IWHYu_7qiqKHbwlZkmhWfNbEXt7zR7PMr5k46wiGT7RdN');

bot.commands = new Discord.Collection();
bot.aliases  = new Discord.Collection(); 

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Command not found.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded...`);
        bot.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias => {
        bot.aliases.set(alias, props.help.name);
        });

    });

});

bot.on("ready", async () => {
    console.log(`Logged in as ${bot.user.username}...`);
    console.log(`${bot.user.username} is in ${bot.guilds.size} Discord Servers.`);

    bot.user.setStatus("dnd") //online, idle, dnd, invisible

    let activities = [`${bot.users.size} users.`], i = 0; // `${bot.guilds.size} servers.`, `${bot.users.size} users.`, 
        setInterval(() => bot.user.setActivity(`${botconfig.prefix}help | ${activities[i++ % activities.length]}`, { type: 'WATCHING'}), 5000)
       const guild = bot.guilds.get("693235861730492496");
    setInterval(function () {
       var memberCount = guild.members.filter(member => !member.user.bot).size;
       var memberCountChannel = bot.channels.get("694227033944883220");
       memberCountChannel.setName(`Alle User: ${memberCount}`);
    }, 5000);
});

bot.on('message', (message) => {
    if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) 
    { 
        if (!message.member.roles.some(r=>["● links 'n pics perms"].includes(r.name)))
        {
            message.delete().catch()
            let kickEmbed = new Discord.RichEmbed()

              .setTitle("VΛZE eSports | Invite Link warnings")
              .setColor("RANDOM")
              .addField("Target:", `${message.author}`, true)
              .addField("Staff:", `† Team Vaynce`, true)
              .addField("Channel:", `${message.channel}`, true)
              .addField("Reason:", `Invite links are not permitted on this server.`)
              .setTimestamp(Date.now())
              .setFooter('\nCreated by avoidfx.', 'https://cdn.discordapp.com/attachments/543719668544700427/659347313311088660/avoid_profilbild_end.png');

        logs.send(kickEmbed)
        }
    }
})

bot.on('guildMemberAdd', async message => {
    //console.log(`${message.id} joined the server.`); // This just gives you the ID from the joined user

    let rulesChannel = message.guild.channels.find(channel => channel.id === '663116866805563432')

    welcomer.send(`Welcome ${message} before you do anything else, please read our ${rulesChannel}`) // this is the channel where the welcome message goes
    let memberRole = message.guild.roles.find(role => role.id === '632865092836261899'); // this is the role that you are giving to
    message.addRole(memberRole)
});

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix  = botconfig.prefix;
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    let command;

    if (!message.content.startsWith(prefix)) return;

    if (bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else {
        command = bot.commands.get(bot.aliases.get(cmd));
    }

    if (command) command.run(bot, message, args);

});

bot.login(login.token);
