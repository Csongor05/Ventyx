const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let msg = await message.channel.send("Icon lekérése");

if(!message.guild.iconURL) return msg.edit("Az képet nem találom");

let iconembed = new Discord.RichEmbed()
.setColor("#cf8810")
.setFooter("Lekérte " + message.author.tag)
.setImage(message.guild.iconURL)
.setTitle("Szerver Kép")

message.channel.send(iconembed)
    
    msg.delete();
 }

    module.exports.help = {
        name: "icon"
    }
