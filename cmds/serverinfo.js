const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const verlvl = {
    0: "None",
    1: "Low",
    2: "Medium",
    3: "(╯°□°）╯︵ ┻━┻",
    4: "(ノಠ益ಠ)ノ彡┻━┻"
  }

    let inline = true
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#cf8810")
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("Név", message.guild.name, inline)
    .addField("ID", message.guild.id, inline)
    .addField("Tulaj", message.guild.owner, inline)
    .addField("Regió", message.guild.region, inline)
    .addField("Ellenőrzési szint", verlvl[message.guild.verificationLevel],inline)
    .addField("Tagok", `${message.guild.memberCount}`, inline)
    .addField("Rangok", message.guild.roles.size, inline)
    .addField("Csatornák", message.guild.channels.size, inline)
    .addField("Te csatlakoztál", message.member.joinedAt)
    .setFooter(`Készült ${message.guild.createdAt}`);

    message.channel.send(serverembed);

    message.delete();
}

module.exports.help = {
  name:"serverinfo"
}
