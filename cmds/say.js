module.exports.run = async (bot, message, args) => {
    
    if(message.author.id === "650619955817086996") return
    if(message.author.id === "650619955817086996") return
    
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);

}

module.exports.help = {
    name: "say"
}
