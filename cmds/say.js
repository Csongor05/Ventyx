module.exports.run = async (bot, message, args) => {
    
    if(message.author.id === "647091061977513994") return
    if(message.author.id === "647091061977513994") return
    
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);

}

module.exports.help = {
    name: "say"
}
