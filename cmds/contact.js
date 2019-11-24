const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Contact parancs", "Használat: f.contact <üzenet>")

    message.channel.send(helpembxd);
    return;
  } 

    let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
    if(!sayMessage) return message.channel.send("írj üzenetett is!").then(msg => {msg.delete(5000)});

   let contact = new Discord.RichEmbed()
   .setColor("00ff00")
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`Üzenet innen: [${message.guild.name}](${Invite.url})`)
   .setTitle("Üzenet, válaszoljá mán!")
   .addField("Felhasználo", Sender, true)
   .addField("Felhasználo ID: ", Sender.id, true)
   .addField("Üzenet: ", sayMessage)
   .setTimestamp()

    bot.users.get("366992986896203780").send(contact);

    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Üzenet elküldve!")
    .setDescription("Sikeresen elküldve!")
    .addField("Által: ", Sender)
    .addField("Üzenet: ", sayMessage)
    .setFooter("Köszönjük az üzeneteted!")

    message.channel.send(embed).then(msg => {msg.delete(10000)});

        message.delete();

      }
      module.exports.help = {
        name: "contact"
      }
