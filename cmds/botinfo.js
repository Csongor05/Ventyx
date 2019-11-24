const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Bot Név:", `${bot.user.username}`, inline)
    .addField("Bot Készítő:", "<@366992986896203780>", inline )
    .addField("Szerverek:", `🛡 ${servsize}`, inline)
    .addField("Csatornák:", `📁 ${chansize}`, inline)
    .addField("Felhasználok:", ` ${usersize}`, inline)
    .addField("Bot Nyelve:", "Discord.js", inline)
    .addField("Készült:", bot.user.createdAt)
    .setFooter(`Információ: ${bot.user.username} . By: Csongor`)
    .setTimestamp()
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}
