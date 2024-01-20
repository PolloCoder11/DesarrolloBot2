const express = require('express');
const { Client, MessageEmbed, MessageAttachment, } = require("discord.js");
const ms = require('ms');
const bodyParser = require('body-parser');
const enmap = require('enmap');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, () => console.log(`FUNCIONAMIENTO CORRECTO`));

app.get('/', function(req, res) {
  res.send('Hello World')
})
let port = process.env.PORT || 1000;
app.listen(port)

require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "USER", "REACTION"] });
client.on("ready", () => {
  console.log(`INICIADO COMO BOT: ${client.user.tag}`);
});

client.on('ready', () => {
  client.user.setActivity('que todo funcione.', { type: 'WATCHING' })
})
//---------------------------- CODIGO DEL BOT ----------------------------//
client.on("ready", () => {
  console.log("Bot Updated");
});

//-Comandos de Anuncios
client.on('message', message => {
  if(message.content.startsWith('!reg')){

    let texto = message.content.slice(4);
    if(texto.startsWith(" ")){
      texto = texto.slice(1);
    }

    let embed = new MessageEmbed()
    .setTitle(":scroll:  Whitelist")
    .setAuthor("Desarrollo SMP | 💻")
    .setColor("YELLOW")
    .setDescription(`Has sido añadido a la whitelist con el nick ${(texto)}.`);

    message.channel.send(embed);
    client.channels.resolve("1197719840060883032").send(`whitelist add ${(texto)}`);
    client.channels.resolve("1197719840060883032").send(`whitelist reload`);
    client.channels.resolve("1197719840060883032").send(`team join Miembro ${(texto)}`);;
    message.react('📜');
    message.react('☑️');
  }
});

client.on('message', message => {
  if (message.content.startsWith('.say')) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("No tienes permisos para ejecutar este comando...")
    }

    let texto = message.content.slice(4);
    if (texto.startsWith(" ")) {
      texto = texto.slice(1);
    }

    let embed = new MessageEmbed()
      .setTitle("Desarrollo SMP | 💻")
      .setColor("YELLOW")
      .setDescription(texto);

    client.channels.resolve("1197719839586910400").send(embed);
    client.channels.resolve("1197719839586910400").send('**Ping:** <@&1197719837925970018>');
  }
});
client.on('message', message => {
  if (message.content.startsWith('.ola')) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("No tienes permisos para ejecutar este comando...")
    }

    let texto = message.content.slice(4);
    if (texto.startsWith(" ")) {
      texto = texto.slice(1);
    }

    let embed = new MessageEmbed()
      .setTitle("Desarrollo SMP | 💻")
      .setColor("YELLOW")
      .setDescription(texto)
    message.channel.send(embed);
  }
});

client.on('message', message => {
  if (message.content.startsWith('.pmc')) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("No tienes permisos para ejecutar este comando...")
    }

    let postm = message.content.slice(4);
    if (postm.startsWith(" ")) {
      postm = postm.slice(1);
    }

    let embed = new MessageEmbed()
      .setTitle("Desarrollo SMP | 💻")
      .setColor("YELLOW")
      .setImage('https://media.discordapp.net/attachments/897555043568459817/919196196294246470/minecraft-1-18-1.png?width=933&height=498')
      .setDescription(postm);

    client.channels.resolve("897556131176656956").send(embed)
    client.channels.resolve("897556131176656956").send('**Ping:** <@&847940620919111745>');
  }
});

client.on('message', async message => {
  if (message.content == "hola") message.channel.send("¡Hola!")
  client.on("message", message => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    //- Comandos x
  });
  if (message.content == "Hola") message.channel.send("¡Hola!")
  if (message.content == "Ola") message.channel.send("¡Hola!")
  if (message.content == "ola") message.channel.send("¡Hola!")
  if (message.content == "Hello") message.channel.send("¡Hola!")
  if (message.content == "Hellou") message.channel.send("¡Hola!")
  if (message.content == "Buenas") message.channel.send("¡Hola!")
  if (message.content == "wenas") message.channel.send("¡Hola!")
  if (message.content == "buenas") message.channel.send("¡Hola!")
  if (message.content == "Wenas") message.channel.send("¡Hola!")

});

const mySecret = process.env['prefix']
let prefix = "D!"
client.on('message', async message => {

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "server") {
    embedbuilder(client, message, "YELLOW", ":beginner: Servidor", "Servidor Oficial del SMP.")
  }
  if (command === "help") {
    const embedhelp = new Discord.MessageEmbed()
      .setTitle(":robot: Comandos")
      .setAuthor("Desarrollo SMP | 💻")
      .setColor("YELLOW")
      .addField("D!rr", "Comando secreto...")
      .addField("D!ip", "Muestra la ip del servidor.")
      .setDescription("Comandos Disponibles  | El prefix es D!");

    message.channel.send({ embed: embedhelp });
  }
  if (command === "ip") {

  embedbuilder(client, message, "YELLOW", "**IP:** 108.181.241.178:25605")
  }
  if (command === "rr") {

    embedbuilder(client, message, "YELLOW", ":notes: ¡RickRoll!", "Never gonna give you up, ever gonna let you down, never gonna run around and desert you, never gonna make you cry, never gonna say goodbye, never gonna tell a lie and hurt you...")
    message.channel.send('https://tenor.com/view/rick-astly-rick-rolled-gif-22755440')
  }
});
const userID = "538887059478413353"
const holaID = "847896297230696496"
const settings = new enmap({
  name: "settings",
  autoFetch: true,
  cloneLevel: "deep",
  fetchAll: true
});

client.on('guildMemberAdd', (member) => {
  // Get the user who joined the server
  const user = member.user;
  let embed = new MessageEmbed()
  .setTitle("Desarrollo SMP | 💻")
  .setColor("YELLOW")
  .setDescription(`¡Bienvenido ${user.toString()} a Desarrollo SMP, espero que te diviertas y te la pases bien! No olvides leerte el canal de <#1197719839586910398> y <#1197719839066820702>.`);

  // Send a welcome message to the server's default channel
  client.channels.resolve("1197719839066820700").send(embed);
});

client.on('ready', () => {
  console.log('ready')
});

function embedbuilder(client, message, color, title, description) {
  let embed = new Discord.MessageEmbed()
    .setColor(color)
  client.user.displayAvatarURL();
  if (title) embed.setTitle(title);
  if (description) embed.setDescription(description);
  return message.channel.send(embed);
}

const mySecret2 = process.env['token']

client.login(mySecret2);