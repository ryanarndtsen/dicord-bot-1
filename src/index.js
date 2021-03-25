require('dotenv').config();
const Discord = require("discord.js");

// Create discord.js client
const client = new Discord.Client();

// Server ID
const guildID = '768696097383776276';

// Function called when client is ready
client.once('ready', () =>
    console.log("Botter is ready!")
);

// Check every message 
client.on('message', async (msg) => {
    if(msg.guild.id === guildID){
        if(msg.content.toLowerCase() === "!botter"){
            await msg.reply("Hello " + msg.author.username);
            console.log('Done!');
        }
    }
});

// Login to bot account
client.login(process.env.BOTTOKEN);