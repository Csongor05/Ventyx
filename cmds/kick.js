const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "366992986896203780") return message.channel.send(":x: Nincs jogod használni a parancsot!");
    
  let xdemb = new Discord.RichEmbed()
  .setColor("#cf8810")
  .setTitle("Kick Parancs")
  .addField("Leírás:", `Kickeli a felhasználót`, true)
  .addField("Használat:", "v.kick <felhasználó> [indok]", true)
  .addField("Példa:" ,"v.kick @Csongi Spam")

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.kickable) 
      return message.channel.send(":x: Nem tudtam ki kickelni a felhasználót!");
   if(member.user.id === "366992986896203780") return message.channel.send(":x: Nem kickelhetem ki a készítőnet!")

    
    let reason = args.slice(1).join(' ');
    if(!reason) {
      res = "Nincs indok megadva";
    }
    else {
      res = `${reason}`
    }
    
    await member.kick(reason)
      .catch(error => message.reply(`:x: Nem tudtam ki kickelni, mert : ${error}`));

      let kick = new Discord.RichEmbed()
      .setColor("#cf8810")
      .setTitle(`Kick | ${member.user.tag}`)
      .addField("Felhasználó", member, true)
      .addField("Általa", message.author, true)
      .addField("Indok", res)
      .setTimestamp()
      .setFooter(member.id)

      message.channel.send(kick)

    message.delete();
    
}
      module.exports.help = {
        name: "kick"
      }
