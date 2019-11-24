const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

let killed = message.mentions.members.first();
if(!killed) {

let emb = new Discord.RichEmbed()
.setColor("#00f00")
.setDescription(`${message.author} úgy döntött, hogy megöli magát`)

message.channel.send(emb)

} else {

let emb = new Discord.RichEmbed()
.setColor("#00f00")
.setDescription(`${killed} meghalt, általa: ${message.author} `)

message.channel.send(emb)


}

}
module.exports.help = {
  name: "kill"
}
