const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "Elérhető",
        idle: "Tétlen",
        dnd: "Elfoglalt",
        offline: "Láthatatlan"
      }
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "Igen";
  } else {
    bot = "Nem";
  }

            let embed = new Discord.RichEmbed()
                //.setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor("#cf8810")
                .addField("Neve", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Becenév", `${member.nickname !== null ? ` Nickname: ${member.nickname}` : "Nincs"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Játékban", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Nem játszik"}`,inline, true)
                .addField("Rangja", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || " Nincs rangja"}`, true)
                .addField("Létrehozta a profilját:", member.user.createdAt)
                .setFooter(`Információ róla: ${member.user.username}`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }

    module.exports.help = {
        name: "userinfo"
    }
