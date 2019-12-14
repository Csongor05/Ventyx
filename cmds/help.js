const Discord = require ("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    const infoList = fs.readFileSync("./info.txt", "utf8");
    const adminCommands = fs.readFileSync("./admin.txt", "utf8");
    const funcommands = fs.readFileSync("./fun.txt", "utf8");
    let bicon = bot.user.displayAvatarURL;
    const pidor = message.guild.members.get(args[0]) || message.member;

    let funEmbed = new Discord.RichEmbed()
    .setColor("#cf8810")
    .setTitle("**__Parancsok__**")
    .setDescription(funcommands)
    
    pidor.send(funEmbed);

    let infoEmbed = new Discord.RichEmbed()
    .setColor("#cf8810")
    .setTitle("**__Szerver IP__**")
    .setDescription("**hamarosan**")

    pidor.send(infoEmbed);

    let modembed = new Discord.RichEmbed()
    .setColor("#cf8810")
    .setTitle("**__Verzió__**")
    .setDescription("**1.8**-**1.12.2**")
    
    pidor.send(modembed);

    let supEmbed = new Discord.RichEmbed()
    .setColor("#cf8810")
    .setTitle("Help")
    .setDescription("Segítségre szozrulsz? Csatlakozz be! [Discord Szerver](https://discord.gg/qmtfV6w)")
    .setFooter("Olvasd el a szabályokot, és tartsd be őket!")
    .setTimestamp()
    .addField("Csalót láttál?", "Jelentsd egy csapattagnak! ")

    pidor.send(supEmbed)

    let chanEmbed = new Discord.RichEmbed()
    .setTitle("Help")
    .setColor("#cf8810")
    .setFooter(`Help parancsot lekérte: ${pidor.user.username}`)
    .setDescription(`${pidor} :white_check_mark: Privát üzenetben elküldtem a parancsokat`);

    message.channel.send(chanEmbed).then(msg => {msg.delete(5000)});

    message.delete();
    
 }

 module.exports.help = {
     name: "help" 
 }
