const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole <@user> <Role>
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Addrole Parancs", "Használat: v.addrole <említés> <rang>")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor("#cf8810")
  .setTitle(`Addrole Parancs`)
  .addField("Leírás:", "Rangot add a felhasználónak", true)
  .addField("Használat:", "v.addrole <említés> <rang>", true)
  .addField("Példa:", "v.addrole @Csongor Játékos")

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":x: Nincs jogod használni a parancsot!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("Milyen rangot szeretnél adni?!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send(":x: Nem találom ezt a rangot!.");

  if(rMember.roles.has(gRole.id)) return message.channel.send(":x: Már rendelkezik ilyen rangal.");
  await(rMember.addRole(gRole.id));

    await message.channel.send(`***:white_check_mark:  Sikeresen adtál ${rMember.user.username}-nak/nek egy ${gRole.name} rangot!***`)

    message.delete();
  
}

module.exports.help = {
  name: "addrole",
  description: 'Add role to someone',
  usage: 'addrole <@user> <Role>'
}
