module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(":x: Nincs jogod használni a parancsot!")

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("Jelöld meg a felhasználót!");

        let role = message.guild.roles.find(r => r.name === "Muted")
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("Ő nincs elnímitva!");

        await toMute.removeRole(role);
        message.channel.sendMessage("Némítás feloldva!");

        message.delete();

     }
    
        module.exports.help = {
            name: "unmute"
        }