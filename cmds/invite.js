const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.RichEmbed()
 .setDescription("[**Invite**](http://bit.ly/firefoxinvite)")
 .setColor("#00ff00")
 .setThumbnail(bicon)
 .addField("Használd a meghívot, hogy meghívd a botot a szerveredre!", "http://bit.ly/firefoxinvite")

 message.channel.send(inviteEmbed);

        message.delete();

}
      module.exports.help = {
        name: "invite"
      }
