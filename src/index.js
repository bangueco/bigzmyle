const {Client} = require('discord.js-selfbot-v13');
const {token} = require('../config.json');

const userId = [
  '411309910530457610'
]

const client = new Client();

client.on('ready', async() => {
  console.log(`${client.user.username} is now online!`);
})

client.on('messageCreate', async(message) => {
  userId.forEach(id => {
    if (message.author.id === id && message.content === 'hi') {
      message.reply("hello")
    }
  })
})

client.on('messageCreate', async(message) => {
  userId.forEach(id => {
    if (message.author.id == id ) {
      message.react('😆');
    }
  })
})

client.login(token);