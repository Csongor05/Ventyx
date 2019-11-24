const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .setTitle("Support Info")
    .addField("Bot Parancsok", "`f.help`")
    .addField("Bug jelentése", "`f.contact`")
    .addField("Segítségre szorulsz? Csatlakozz be! [Support Szerver](https://discord.gg/HBqCEZs) Vagy itt a weboldal! [FireFox-Weboldal](https://firefox-weboldal.webnode.hu/)")

    message.channel.send(embed)

            message.delete();
}

module.exports.help = {
    name: "support"
}
