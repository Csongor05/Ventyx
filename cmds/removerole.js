const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#a234b4")
    .addField("Removerole Parancs", "Használat: v.removerole <@felhasználó> <rang>")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor("#cf8810")
  .setTitle(`Removerole parancs`)
  .addField("Leírás:", "Elveszi a rangot a felhasználóról", true)
  .addField("Használat!", "v.removerole <@felhasználó> <rang>", true)
  .addField("Példa!", "v.removerole @Csongi Játékos")

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":x: Nincs jogod használni a parancsot");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);

  if(!role) return message.channel.send("Nem adtad meg a rangot!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Nem találom ezt a rangot!");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("Nem rendelkezik ilyen rangal.");
  await(rMember.removeRole(gRole.id));

  await message.channel.send(`***Elvetted ${rMember.user.username}-nak/nek a(z)${gRole.name} rangját!***`)

  message.delete();

}

module.exports.help = {
  name: "removerole"
}
