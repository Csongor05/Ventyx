const Discord = require("discord.js")

//ban command

module.exports.run = async (bot, message, args) => {

let xdemb = new Discord.RichEmbed()
        .setColor("#cf8810")
        .setTitle("Ban Parancs")
        .addField("Leírás:", `Kitiltja a felhasználót`, true)
        .addField("Használat:", `v.ban <említés> <indok>`, true)
        .addField("Példa:", `v.ban @Csongor Hirdetés`)

        if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "366992986896203780") return message.channel.send(":x: Nincs jogod használni a parancsot!");

        let member = message.mentions.members.first();
        if(!member) return message.channel.send(xdemb)
        if(!member.bannable) return message.channel.send(":x: Nem tudtam kitiltani a felhasználot!")
        if(member.user.id === "366992986896203780") return message.channel.send(":x: Nem tudtam kitiltani a **Készítőmet**!")

        if(member.id === message.author.id) return message.channel.send(":x: Nem tilthatod ki saját magad!")

        let reason = args.slice(1).join(" ");

        if(!reason) {
            res = "Nincs indok adva";
        } else {
            res = reason
        }

        await member.ban(reason).catch(error => message.channel.send(`:x: Nem tudtam kitiltani mert: ${error}`));

        let bean = new Discord.RichEmbed()
        .setColor("#cf8810")
        .setTitle(`Kitiltva | ${member.user.tag}`)
        .addField("Felhasználó:", member, true)
        .addField("Általa:", message.author, true)
        .addField("Indok:", res)
        .setTimestamp()

        message.channel.send(bean)

        message.delete()

      }
      module.exports.help = {
        name: "ban"
      }
