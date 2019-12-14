const Discord = require('discord.js');
const fs = require("fs");

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: Nincs jogod használni a parancsot!");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Jelölj meg valakit!');
  if (reason.length < 1) return message.reply('írj indokot is !');

  let dmsEmbed = new Discord.RichEmbed()
  .setTitle("Warn")
  .setColor("#cf8810")
  .setDescription(`Figyelmeztettve lettél innen: \`${message.guild.name}\``)
  .addField("Általa:", message.author.tag)
  .addField("Indok", reason);

  user.send(dmsEmbed);

  message.delete();
  
  message.channel.send(`${user.tag} figyelmeztettve lett`)

}

exports.help = {
  name: 'warn'
};
