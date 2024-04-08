require('dotenv/config');
const { Client, GatewayIntentBits} = require('discord.js');
const { CommandHandler } = require('djs-commander');
const { handleMessage } = require('./services/service.js'); //Import a single service function
const path = require('path');


const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
	],
});

new CommandHandler({
  client,
  commandsPath: path.join(__dirname, 'slash-commands'),
  additionalContext: { client },
});

client.login(process.env.TOKEN);

client.on('ready',() => {
	console.log(`${client.user.tag}  logged in`);
  });

  client.on('messageCreate', message => {
	if (!message.author.bot) {
	  handleMessage(message);
	}
  });
