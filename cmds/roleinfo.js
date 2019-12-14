const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true

    let role = args.join(` `)
    if(!role) return message.reply("Nem adtad meg a rangot!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Nem találom a rangot.");

    const status = {
        false: "Nem",
        true: "Igen"
      }

    let roleemebed = new Discord.RichEmbed()
    .setColor("#cf8810")
    .addField("ID", gRole.id, inline )
    .addField("Név", gRole.name, inline)
    .addField("Jelölés", `\`<@${gRole.id}>\``, inline)
    .addField("Szín", gRole.hexColor, inline)
    .addField("Tagok", gRole.members.size, inline)
    .addField("Helye ", gRole.position, inline)
    .addField("Megemlíthető", status[gRole.mentionable], inline)
   
    
    message.channel.send(roleemebed);

}

module.exports.help = {
  name:"roleinfo"
}