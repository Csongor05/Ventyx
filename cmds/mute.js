const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!mute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("Jelöld meg a felhasználót!");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Nincs jogod használni ezt a parancsot!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Nem tudtam elnémítani a felhasználót!");
  if (tomute.id === message.author.id) return message.channel.send("Nem némíthatod el magadat");
  let muterole = message.guild.roles.find(`name`, "Muted");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.channel.send("Nen adtál meg időt!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> le lett némítva ennyi időre: ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Feloldva a némítása!`);
  }, ms(mutetime));

  message.delete();

}

module.exports.help = {
  name: "mute"
}
