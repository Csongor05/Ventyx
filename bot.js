const botSettings = require("./botsettings.json")
const Discord = require("discord.js");
const fs = require("fs");
const ytdl = require("ytdl-core");
const request = require("request");
const client = new Discord.Client();
const prefix = botSettings.prefix;
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.dblapi, client);

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./cmds", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("Parancs nem találva");
        return;
    }

    console.log(`Betöltve ${jsfiles.length} parancs!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () => {
console.log(`Bot elérhető, dolgozik ${bot.guilds.size} szerveren ${bot.users.size} felhasználóval!`);
    
    dbl.postStats(bot.guilds.size);
 
/*setInterval(() => {
        dbl.postStats(bot.guilds.size);
    }, 1800000); */
    
bot.user.setStatus('Online')

bot.user.setActivity(`play.ventyx.tk | 1.8 - 1.12.2`);
    
    bot.channels.get("521378814467506176").setName(`Szerverek: ${bot.guilds.size}/100`)
    

try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
    } catch(e) {
        console.log(e.stack);
        }
});
     
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;  

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
    
});

bot.login("token tesa");

//restart
