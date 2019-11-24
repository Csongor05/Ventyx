const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Clear Parancs", "Használat: f.clear <szám>")

    message.channel.send(helpembxd);
    return;
  } 

  message.delete()

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: Nincs jogod használni a parancsot!");
  if(!args[0]) return message.channel.send("Mennyi üzenetett szeretnél törölni? `Használat: f.clear <szám>`");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**__Törölve ${args[0]} üzenet.__**`).then(msg => msg.delete(2000));
});


}

module.exports.help = {
  name: "clear"
}
