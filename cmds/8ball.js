  const Discord = require("discord.js")
 
 module.exports.run = async (bot, message, args) => {

    //!8ball question
    if(!args[1]) return message.reply("Írj egy kérdést és én válaszolok rá!");
    let replies = ["Igen", "Nem", "Nem tudom", "Később válaszolok!", "Nem tudom biztosan!", "Kérlek ne!", "Hivj fel", "Fogalmam sincs" ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = new Discord.RichEmbed()

    .setAuthor(message.author.username)
    .setColor("##cf8810")
    .addField("Kérdés:", question)
    .addField("Válasz:", replies[result]);

    message.channel.send(ballembed)

    message.delete();


 }

    module.exports.help = {
        name: "8ball"
    }
