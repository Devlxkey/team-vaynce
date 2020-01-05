const Discord    = require("discord.js");
const botconfig  = require("../botconfig.json");
const login      = require("../login.json");
const colours    = require ("../colours.json");


module.exports.run = async (bot, message, args) => {

    if(message.author.id !== "381538605685932032") return;{
        if (!message.content.startsWith(botconfig.prefix)) return;


        bot.destroy()
        .then(bot.login(login.token))

        if(message.author.id == botconfig.owner || message.author.id == "381538605685932032") {
    
            bot.on("ready", async () => console.log('restarted!'))
        }
    }
}

module.exports.help = {
    name: "restart",
    aliases: ["rs"]
}